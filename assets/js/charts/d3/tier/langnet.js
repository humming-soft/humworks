/**
 * (c) Cotrino, 2012 (http://www.cotrino.com/)
 * 
 */

var w = 0, h = 0;
var chart = "network";
var networkChart = {
		vis : null,
		nodes : [],
		nameAnchors : [],
		nameAnchorLinks : [],
		links : [],
		force : null,
		force2 : null
};
var chordChart = {
		links : [], // Square matrix
		data : []
};
var progrmmeFilter ='all';
var hideUnrelated = false;
var similarityThresholdMin = 100;
var similarityThresholdMax = 0;
var similarityThreshold = 0;

function restart() {

	if( d3.select("#graph") != null ) {
		d3.select("#graph").remove();
	}
	w = $('#graphHolder').width();
	h = $('#graphHolder').height();

	/*$('#similarity').html(Math.round(similarityThreshold)+"%");*/

	// clear network, if available
	if( networkChart.force != null ) {	networkChart.force.stop();	}
	if( networkChart.force2 != null ) {	networkChart.force2.stop();	}
	networkChart.nodes = [];
	networkChart.nameAnchors = [];
	networkChart.nameAnchorLinks = [];
	networkChart.links = [];

	// clear chord, if available
	chordChart.links = [];
	chordChart.data = [];

	if( chart == "network" ) {
		drawNetwork();
	} else if( chart == "chord" ) {
		drawChord();
	}
}
function drawNetwork() {

	buildNetwork();

	$("#hint").html("Move the mouse over any <b>Contractor</b> to show further information or click to grab the bubble around.");

	networkChart.vis = d3.select("#graphHolder").append("svg:svg").attr("id", "graph").attr("width", w).attr("height", h);

	networkChart.force = d3.layout.force().size([w, h])
	.nodes(networkChart.nodes).links(networkChart.links)
	.gravity(1).linkDistance(100).charge(-3000)
	.linkStrength(function(x) {
		return x.weight * 10
	});
	networkChart.force.start();

	// brings everything towards the center of the screen
	networkChart.force2 = d3.layout.force()
	.nodes(networkChart.nameAnchors).links(networkChart.nameAnchorLinks)
	.gravity(0).linkDistance(0).linkStrength(8).charge(-100).size([w, h]);
	networkChart.force2.start();

	var link = networkChart.vis.selectAll("line.link")
	.data(networkChart.links).enter()
	.append("svg:line").attr("class", "link")
	.style("stroke", "#000").style("stroke-width", 3);

	var node = networkChart.vis.selectAll("g.node")
	.data(networkChart.force.nodes()).enter()
	.append("svg:g").attr("id", function(d, i) { return d.name }).attr("class", "node");
	node.append("svg:circle").attr("id",function(d, i) { return "c_"+d.name })
	.attr("r", function(d, i) { return d.size })
	.style("fill", function(d, i) { return d.color })
	.style("stroke", "#fff");
	node.call(networkChart.force.drag);
	node.on("mouseover", function(d) {
		showInformation(d.name);
	});

	var anchorLink = networkChart.vis.selectAll("line.anchorLink")
	.data(networkChart.nameAnchorLinks);

	var anchorNode = networkChart.vis.selectAll("g.anchorNode")
	.data(networkChart.force2.nodes()).enter()
	.append("svg:g").attr("class", "anchorNode");
	anchorNode.append("svg:circle")
	.attr("id",function(d, i) { return "ct_"+d.node.name })
	.attr("r", 0).style("fill", "#FFF");
	anchorNode.append("svg:text")
	.attr("id",function(d, i) { return "t_"+d.node.name })
	.text(function(d, i) {
		return i % 2 == 0 ? "" : d.node.name
	}).style("fill", function(d, i) { return d.node.textcolor })
	.style("font-size", 10)
	.style("font-weight", 600)
	.on("mouseover", function(d) {
		showInformation(d.node.name);
	});

	var updateLink = function() {
		this.attr("x1", function(d) {
			return d.source.x;
		}).attr("y1", function(d) {
			return d.source.y;
		}).attr("x2", function(d) {
			return d.target.x;
		}).attr("y2", function(d) {
			return d.target.y;
		});

	}

	var updateNode = function() {
		this.attr("transform", function(d) {
			return "translate(" + d.x + "," + d.y + ")";
		});

	}

	networkChart.force.on("tick", function() {
		networkChart.force2.start();
		node.call(updateNode);
		anchorNode.each(function(d, i) {
			if(i % 2 == 0) {
				d.x = d.node.x;
				d.y = d.node.y;
			} else {
				var b = this.childNodes[1].getBBox();
				var diffX = d.x - d.node.x;
				var diffY = d.y - d.node.y;
				var dist = Math.sqrt(diffX * diffX + diffY * diffY);
				var shiftX = b.width * (diffX - dist) / (dist * 2);
				shiftX = Math.max(-b.width, Math.min(0, shiftX));
				var shiftY = 5;
				this.childNodes[1].setAttribute("transform", "translate(" + shiftX + "," + shiftY + ")");
			}
		});
		anchorNode.call(updateNode);
		link.call(updateLink);
		anchorLink.call(updateLink);
	});

}

function buildNetwork() {

	var newMapping = [];
	var k = 0;
	for(var i=0; i<nodesArray.length; i++) {
        var node;
        /*if(progrmmeFilter == "all") {*/
            node = nodesArray[i];
/*        }else{
            if(typeof(nodesArray[i].programs) !="undefined") {
                if ((nodesArray[i].programs).includes(progrmmeFilter)) {
                    node = nodesArray[i];
                }
            }
        }*/
		var draw = true;
		if( hideUnrelated ) {
			if( getAmountLinks(i) == 0 ) {
				draw = false;
			}
		}
		if( draw ) {
			newMapping[i] = k;
			networkChart.nodes.push(node);
			networkChart.nameAnchors.push({ node : node });
			networkChart.nameAnchors.push({ node : node	});
			k++;
		} else {
			newMapping[i] = -1;
		}
	}

	for(var j=0; j<linksArray.length; j++) {
		var link = linksArray[j];
		var sim = link.weight;
		adjustSlider(sim);

		// just draw the links if similarity is higher than the threshold
		// or the nodes exist
		if( sim >= similarityThreshold/100.0 && newMapping[link.source] != -1 && newMapping[link.target] != -1 ) {
			var newLink = { source : newMapping[link.source], target : newMapping[link.target], weight : sim, color : link.color };
			networkChart.links.push(newLink);
		}
	}

	// link names to circles
	for(var i = 0; i < networkChart.nodes.length; i++) {
		networkChart.nameAnchorLinks.push({ source : i * 2, target : i * 2 + 1, weight : 1 });
	}
}

//adjust the scala of the slider
function adjustSlider(sim) {
	if( sim*100 > similarityThresholdMax ) {
		similarityThresholdMax = sim*100; 
	} else if( sim*100 < similarityThresholdMin ) {
		similarityThresholdMin = sim*100;
	}
}

function buildChord() {

	var newMapping = [];
	var k = 0;
	for(var i=0; i<nodesArray.length; i++) {
        var node;
        /*if(progrmmeFilter == "all") {*/
            node = nodesArray[i];
/*        }else{
            if(typeof(nodesArray[i].programs) !="undefined") {
                if ((nodesArray[i].programs).includes(progrmmeFilter)) {
                    node = nodesArray[i];
                }
            }
        }*/
		var draw = true;
		if( hideUnrelated ) {
			if( getAmountLinks(i) == 0 ) {
				draw = false;
			}
		}
		if( draw ) {
			newMapping[i] = k;
			k++;
		} else {
			newMapping[i] = -1;
		}
	}
	
	for(var i=0; i<linksArray.length; i++) {
		var link = linksArray[i];
		var lang1 = nodesArray[link.source];
		var lang2 = nodesArray[link.target];
		var sim = link.weight;
		adjustSlider(sim);

		// just draw the links if similarity is higher than the threshold
		// or the nodes exist
		if( sim >= similarityThreshold/100.0 ) { //&& newMapping[link.source] != -1 && newMapping[link.target] != -1 ) {
			chordChart.data.push({
				source: lang1, 
				target: lang2,
				size: lang1.size, 
				similarity: sim,
				color: link.color
			});
		}
	}
	chordChart.data.forEach(function(d) {
		d.source.similarity = d.similarity;
		d.target.similarity = d.similarity;
		d.valueOf = value; // convert object to number implicitly
	});
	// Initialize link matrix
	for (var i = 0; i < nodesArray.length; i++) {
		chordChart.links[i] = [];
		for (var j = 0; j < nodesArray.length; j++) {
			chordChart.links[i][j] = 0;
		}
	}
	// Populate the link matrix with actual values
	chordChart.data.forEach(function(d) {
		chordChart.links[d.source.id][d.target.id] = d;
	});

	function value() {
		return +this.size;
	}
}

function drawChord() {

	buildChord();

	$("#hint").html("Move the mouse over any <b>Contractor</b> to hide all others.");

	// Chart dimensions.
	var r1 = Math.min(w, h) / 4 - 4;
	var r0 = r1 - 100;

	// The chord layout, for computing the angles of chords and groups.
	var layout = d3.layout.chord()
	//.sortGroups(d3.descending)
	.sortSubgroups(d3.descending)
	.padding(.04)
	.matrix(chordChart.links);

	// The arc generator for the groups
	var arc = d3.svg.arc().innerRadius(r0).outerRadius(r1);

	// The chord generator (quadratic Bézier) for the chords
	var chord = d3.svg.chord().radius(r0);

	// Add an SVG element
	var svg = d3.select("#graphHolder")
	.append("svg").attr("id", "graph")
	.attr("width", w)
	.attr("height", h)
	.append("g")
	.attr("transform", "translate(" + (w/2) + "," + h/2 + ")");

	// Add chords
	svg.selectAll("path")
	.data(layout.chords)
	.enter().append("path")
	.attr("class", "chord")
	.style("fill", function(d) { return d.source.value.color; })
	.style("stroke", function(d) { return d.source.value.color; })
	.attr("d", chord);

	// Add groups
	var g = svg.selectAll("g.group")
	.data(layout.groups)
	.enter().append("g")
	.attr("class", "group");

	// Add the group arc
	g.append("path")
	.on("mouseover", fade(0))
	.on("mouseout", fade(1))
	.style("fill", function(d) { return nodesArray[d.index].color; })
	.attr("id", function(d, i) { return "group" + d.index; })
	.attr("d", arc);

	// Add the language name
	g.append("svg:text")
	.attr("x", 6)
	.attr("dy", 15)
	.attr("transform", function(d) {
		return "rotate(" + (getMeanAgle(d) * 180 / Math.PI - 90) + ")"
		+ "translate("+r0+","+(-5-50*(d.endAngle-d.startAngle))+")";
	})
	.style("fill", function(d) { return d3.rgb(nodesArray[d.index].textcolor).darker(); })
	.style("font-size", function(d) {
		return (9+100*(d.endAngle-d.startAngle)) > 25 ? 25.37628 : 9+100*(d.endAngle-d.startAngle);
	})
	.text(function(d) { return nodesArray[d.index].name; });

	function getMeanAgle(d) {
		return d.startAngle+(d.endAngle-d.startAngle)/2;
	}

	/** Returns an event handler for fading a given chord group. */
	function fade(opacity) {
		return function(g, i) {
			showInformation(nodesArray[i].name);
			svg.selectAll("path.chord")
			.filter(function(d) {
				return d.source.index != i && d.target.index != i;
			})
			.transition()
			.style("opacity", opacity);
		};
	}
}

function hide() {
	if( $('#hide_checkbox').is(':checked') ) {
		hideUnrelated = true;
		restart();
	} else {
		hideUnrelated = false;
		restart();
	}
}

function filterChange(event, ui) {
	similarityThreshold = ui.value;
	restart();
}

function chartChange(value) {
	chart = value;
	restart();
}
function programmeFilterTrigger(value){
    if(progrmmeFilter == "all") {
        progrmmeFilter = value;
    }else{
        progrmmeFilter = "all";
    }
    restart();
}

function getAmountLinks(n) {
	var linksAmount = 0;
	for(var j=0; j<linksArray.length; j++) {
		var link = linksArray[j];
		if( (link.source == n || link.target == n) && link.weight >= similarityThreshold/100.0 ) {
			linksAmount ++;
		}
	}
	return linksAmount;
}

function showInformation(language) {
	var url = "http://en.wikipedia.org/wiki/"+language+"_language";
	var n = nodesHash[language];
	$('#language_information').html(nodesArray[n].desc);
    $('.tier-legend').show();
}
