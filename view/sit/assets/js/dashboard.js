var Dashboard = function() {
       var _lineLoader = function(){
           $('#plate_vector_map').load('assets/svg/plate_vector_map.svg',function(){
               // vector_track
               var json = [
                   {"vector_track":"legend_v_track_1","vector_status":"3","url":""},
                   {"vector_track":"legend_v_track_2","vector_status":"2","url":""},
                   {"vector_track":"legend_v_track_3","vector_status":"1","url":""},
                   {"vector_track":"legend_v_track_4","vector_status":"0","url":""},

                   {"vector_track":"psds_track_01","vector_status":"3","url":""},
                   {"vector_track":"psds_track_02","vector_status":"1","url":""},
                   {"vector_track":"psds_track_03","vector_status":"1","url":""},
                   {"vector_track":"psds_track_04","vector_status":"1","url":""},
                   {"vector_track":"psds_track_05","vector_status":"2","url":""},
                   {"vector_track":"psds_track_06","vector_status":"2","url":""},
                   {"vector_track":"psds_track_07","vector_status":"2","url":""},
                   {"vector_track":"psds_track_08","vector_status":"3","url":""},
                   {"vector_track":"psds_track_09","vector_status":"3","url":""},
                   {"vector_track":"psds_track_10","vector_status":"3","url":""},
                   {"vector_track":"psds_track_11","vector_status":"3","url":""},
                   {"vector_track":"psds_track_12","vector_status":"3","url":""},
                   {"vector_track":"psds_track_13","vector_status":"2","url":""},
                   {"vector_track":"psds_track_14","vector_status":"1","url":""},
                   {"vector_track":"psds_track_15","vector_status":"1","url":""},
                   {"vector_track":"psds_track_16","vector_status":"1","url":""},
                   {"vector_track":"psds_track_16_1","vector_status":"0","url":""},
                   {"vector_track":"psds_track_16_2","vector_status":"0","url":""},
                   {"vector_track":"psds_track_16_3","vector_status":"0","url":""},
                   {"vector_track":"psds_track_16_4","vector_status":"0","url":""},
                   {"vector_track":"psds_track_16_5","vector_status":"0","url":""},
                   {"vector_track":"psds_track_16_6","vector_status":"0","url":""},
                   {"vector_track":"psds_track_16_7","vector_status":"0","url":""},
                   {"vector_track":"psds_track_16_8","vector_status":"0","url":""},
                   {"vector_track":"psds_track_16_9","vector_status":"0","url":""},
                   {"vector_track":"psds_track_17","vector_status":"1","url":""},
                   {"vector_track":"psds_track_18","vector_status":"1","url":""},
                   {"vector_track":"psds_track_19","vector_status":"1","url":""},
                   {"vector_track":"psds_track_20","vector_status":"1","url":""},
                   {"vector_track":"psds_track_21","vector_status":"1","url":""},
                   {"vector_track":"psds_track_22","vector_status":"1","url":""},
                   {"vector_track":"psds_track_23","vector_status":"1","url":""},
                   {"vector_track":"psds_track_24","vector_status":"0","url":""},
                   {"vector_track":"psds_track_25","vector_status":"0","url":""},
                   {"vector_track":"psds_track_26","vector_status":"1","url":""},
                   {"vector_track":"psds_track_27","vector_status":"3","url":""},
                   {"vector_track":"psds_track_28","vector_status":"0","url":""},
                   {"vector_track":"psds_track_29","vector_status":"3","url":""},
                   {"vector_track":"psds_track_30","vector_status":"0","url":""},
                   {"vector_track":"psds_track_31","vector_status":"1","url":""},
                   {"vector_track":"psds_track_32","vector_status":"3","url":""},
                   {"vector_track":"psds_track_33","vector_status":"1","url":""},
                   {"vector_track":"psds_track_34","vector_status":"2","url":""},
                   {"vector_track":"psds_track_35","vector_status":"1","url":""},
                   {"vector_track":"psds_track_36","vector_status":"0","url":""},
                   {"vector_track":"psds_track_37","vector_status":"1","url":""},
                   {"vector_track":"psds_track_38","vector_status":"2","url":""},
                   {"vector_track":"psds_track_38","vector_status":"3","url":""},
                   {"vector_track":"psds_track_39","vector_status":"1","url":""},
                   {"vector_track":"psds_track_40","vector_status":"3","url":""},
                   {"vector_track":"psds_track_41","vector_status":"4","url":""},
                   {"vector_track":"psds_track_42","vector_status":"4","url":""},
                   {"vector_track":"psds_track_43","vector_status":"4","url":""},
                   {"vector_track":"psds_track_44","vector_status":"2","url":""}


               ];
               for (i = 0; i < json.length; i++) {
                   var b = json[i];
                   vector_track_name = b.vector_track;
                   vector_track_status = b.vector_status;
                   vector_track_url = b.url;
                   if (vector_track_status==0) {/*blank*/
                       $('#'+vector_track_name).css({'stroke':'#4c4c4c','stroke-width':'10'});
                   } else if (vector_track_status==1) {/*on schedule*/
                       $('#'+vector_track_name).css({'stroke':'#00ff55','stroke-width':'10'});
                   } else if (vector_track_status==2) {/*behind late*/
                       $('#'+vector_track_name).css({'stroke':'#ff0055','stroke-width':'10'});
                   } else if (vector_track_status==4) {/*behind late*/
                       $('#'+vector_track_name).css({'stroke':'blue','fill':'green','stroke-width':'10'});
                   } else if (vector_track_status==3) {/*critical*/
                       blink('#'+vector_track_name, -1, 500);
                       function blink(elem, times, speed) {
                           if (times > 0 || times < 0) {
                               if ($(elem).fadeTo( 500, 0.33 ))
                                   $(elem).fadeTo( 500, 1);
                               else
                                   $(elem).fadeTo( 500, 0.33 );
                           }
                           clearTimeout(function () {
                               blink(elem, times, speed);
                           });

                           if (times > 0 || times < 0) {
                               setTimeout(function () {
                                   blink(elem, times, speed);
                               }, speed);
                               times -= .5;
                           }
                       }
                       $('#'+vector_track_name).toggle('pulsate').css({'stroke-width':'10','stroke':'#ff0055'});
                   };
               }

               var json = [
                   {"vector_station":"legend_v_station_1","vector_status":"3"},
                   {"vector_station":"legend_v_station_2","vector_status":"2"},
                   {"vector_station":"legend_v_station_3","vector_status":"4"},
                   {"vector_station":"legend_v_station_4","vector_status":"0"},

                   {"vector_station":"legend_v_station_5","vector_status":"0"},
                   {"vector_station":"legend_v_station_6","vector_status":"3"},
                   {"vector_station":"legend_v_station_7","vector_status":"2"},
                   {"vector_station":"legend_v_station_8","vector_status":"1"},
                   {"vector_station":"legend_v_station_9","vector_status":"4"},

                   {"vector_station":"v_station_1","vector_status":"4"},
                   {"vector_station":"v_station_2","vector_status":"0"},
                   {"vector_station":"v_station_3","vector_status":"0"},
                   {"vector_station":"v_station_4","vector_status":"2"},
                   {"vector_station":"v_station_5","vector_status":"4"},
                   {"vector_station":"v_station_6","vector_status":"4"},
                   {"vector_station":"v_station_7","vector_status":"1"},
                   {"vector_station":"v_station_8","vector_status":"3"},
                   {"vector_station":"v_station_9","vector_status":"2"},
                   {"vector_station":"v_station_10","vector_status":"3"},
                   {"vector_station":"v_station_11","vector_status":"2"},
                   {"vector_station":"v_station_12","vector_status":"3"},
                   {"vector_station":"v_station_13","vector_status":"1"},
                   {"vector_station":"v_station_14","vector_status":"4"},
                   {"vector_station":"v_station_15","vector_status":"4"},
                   {"vector_station":"v_station_16","vector_status":"4"},
                   {"vector_station":"v_station_17","vector_status":"1"},
                   {"vector_station":"v_station_18","vector_status":"2"},
                   {"vector_station":"v_station_19","vector_status":"0"},
                   {"vector_station":"v_station_20","vector_status":"0"},
                   {"vector_station":"v_station_21","vector_status":"1"},
                   {"vector_station":"v_station_22","vector_status":"1"},
                   {"vector_station":"v_station_23","vector_status":"1"},
                   {"vector_station":"v_station_24","vector_status":"1"},
                   {"vector_station":"v_station_25","vector_status":"1"},
                   {"vector_station":"v_station_26","vector_status":"1"},
                   {"vector_station":"v_station_27","vector_status":"1"},
                   {"vector_station":"v_station_28","vector_status":"1"},
                   {"vector_station":"v_station_29","vector_status":"1"},
                   {"vector_station":"v_station_30","vector_status":"1"},
                   {"vector_station":"v_station_31","vector_status":"2"},
                   {"vector_station":"v_station_32","vector_status":"3"},
                   {"vector_station":"v_station_33","vector_status":"0"},
                   {"vector_station":"v_station_34","vector_status":"0"},
                   {"vector_station":"v_station_35","vector_status":"1"},
                   {"vector_station":"v_station_36","vector_status":"2"},
                   {"vector_station":"v_station_37","vector_status":"3"},
                   {"vector_station":"v_station_38","vector_status":"1"},
                   {"vector_station":"v_station_99","vector_status":"0"},
                   {"vector_station":"v_station_98","vector_status":"4"},
                   {"vector_station":"v_station_97","vector_status":"2"},
                   {"vector_station":"v_station_96","vector_status":"3"},
                   {"vector_station":"v_station_95","vector_status":"4"}
               ];
               for (i = 0; i < json.length; i++) {
                   var b = json[i];
                   vector_station_name = b.vector_station;
                   vector_station_status = b.vector_status;
                   if (vector_station_status==0) {/*blank*/
                       $('#'+vector_station_name).css({'fill':'#ffffff','stroke':'#222222','stroke-width':'5'});
                   } else if (vector_station_status==1) {/*on schedule*/
                       $('#'+vector_station_name).css({'fill':'#ffffff','stroke':'#f50','stroke-width':'5'});
                   } else if (vector_station_status==2) {/*behind late*/
                       $('#'+vector_station_name).css({'fill':'#ffffff','stroke':'#f05','stroke-width':'5'});
                   } else if (vector_station_status==3) {/*behind late*/
                       blink('#'+vector_station_name, -1, 500);
                       function blink(elem, times, speed) {
                           if (times > 0 || times < 0) {
                               if ($(elem).fadeTo( 500, 0.33 ))
                                   $(elem).fadeTo( 500, 1);
                               else
                                   $(elem).fadeTo( 500, 0.33 );
                           }
                           clearTimeout(function () {
                               blink(elem, times, speed);
                           });

                           if (times > 0 || times < 0) {
                               setTimeout(function () {
                                   blink(elem, times, speed);
                               }, speed);
                               times -= .5;
                           }
                       }
                       $('#'+vector_station_name).toggle('pulsate').css({'fill':'#ffffff','stroke':'#ff0055',});

                   } else if (vector_station_status==4) { /*green*/
                       $('#'+vector_station_name).css({'fill':'#ffffff','stroke':'#0f5','stroke-width':'5'});

                   };
               }

               var json = [
                   {"vector_depot":"legend_v_depot_1","vector_status":"3"},
                   {"vector_depot":"legend_v_depot_2","vector_status":"2"},
                   {"vector_depot":"legend_v_depot_3","vector_status":"1"},
                   {"vector_depot":"legend_v_depot_4","vector_status":"0"},
                   {"vector_depot":"v_depot_1","vector_status":"0"}
               ];
               for (i = 0; i < json.length; i++) {
                   var b = json[i];
                   vector_depot_name = b.vector_depot;
                   vector_depot_status = b.vector_status;
                   if (vector_depot_status==0) {/*blank*/
                       $('#'+vector_depot_name).css({'fill':'#ffffff','stroke':'#222222',});
                   } else if (vector_depot_status==1) {/*on schedule*/
                       $('#'+vector_depot_name).css({'fill':'#ffffff','stroke':'#00ff55'});
                   } else if (vector_depot_status==2) {/*behind late*/
                       $('#'+vector_depot_name).css({'fill':'#ffffff','stroke':'#ff0055'});
                   } else if (vector_depot_status==3) {/*critical*/
                       blink('#'+vector_depot_name, -1, 500);
                       function blink(elem, times, speed) {
                           if (times > 0 || times < 0) {
                               if ($(elem).fadeTo( 500, 0.33 ))
                                   $(elem).fadeTo( 500, 1);
                               else
                                   $(elem).fadeTo( 500, 0.33 );
                           }
                           clearTimeout(function () {
                               blink(elem, times, speed);
                           });

                           if (times > 0 || times < 0) {
                               setTimeout(function () {
                                   blink(elem, times, speed);
                               }, speed);
                               times -= .5;
                           }
                       }
                       $('#'+vector_depot_name).toggle('pulsate').css({'fill':'#ffffff','stroke':'#ff0055'});
                   };
               }

           });
        };
    var _activePage = function(element){
        element.addClass("active");
    };
    return {
        init: function() {
            _lineLoader();
            _activePage($(".nav .dashboard"));
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    Dashboard.init();
});
