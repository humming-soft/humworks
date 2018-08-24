<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Humworks - Holistic Unified Modeling Workspace</title>

    <link href='https://fonts.googleapis.com/css?family=Exo+2:400,800,600' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Play:400,700' rel='stylesheet' type='text/css'>
    <link href="../assets/css/icons/icomoon/styles.css" rel="stylesheet" type="text/css">
    <link href="../assets/css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="../assets/css/core.css" rel="stylesheet" type="text/css">
    <link href="../assets/css/components.css" rel="stylesheet" type="text/css">
    <link href="../assets/css/colors.css" rel="stylesheet" type="text/css">
    <link href="../assets/css/style.css" rel="stylesheet" type="text/css">
    <link href="../assets/css/animate.css" rel="stylesheet" type="text/css">

    <script type="text/javascript" src="../assets/js/core/libraries/jquery.min.js"></script>
    <script type="text/javascript" src="../assets/js/core/libraries/bootstrap.min.js"></script>
    <script type="text/javascript" src="../assets/js/plugins/loaders/blockui.min.js"></script>

    <script type="text/javascript" src="../assets/js/plugins/notifications/pnotify.min.js"></script>
    <script type="text/javascript" src="../assets/js/plugins/notifications/noty.min.js"></script>

</head>

<body>
<div class="navbar navbar-inverse">
    <div class="navbar-header">
        <a class="navbar-brand" href="index.php"><img src="../assets/images/logo.png" alt=""></a>

        <ul class="nav navbar-nav pull-right visible-xs-block">
            <li><a data-toggle="collapse" data-target="#navbar-mobile"><i class="icon-tree5"></i></a></li>
        </ul>
    </div>
</div>
<div class="page-container login-container animated fadeIn" style="margin-top: 100px;">
    <div class="page-content">
        <div class="content-wrapper">
            <div class="content">
                <form action="index.php" method="post">
                    <div class="panel panel-body login-form">

                        <div class="text-center">
                            <div class="thumb thumb-rounded-alt">
                                <img src="../assets/images/hw_logo_83x83.jpg" alt="">
                            </div>
                            <h5 class="content-group">Login to your account <small class="display-block">Enter your Humworks credentials</small></h5>
                        </div>

                        <div class="form-group has-feedback has-feedback-left">
                            <input type="text" class="form-control" name="user_name" placeholder="Username">
                            <div class="form-control-feedback">
                                <i class="icon-user text-muted"></i>
                            </div>
                        </div>

                        <div class="form-group has-feedback has-feedback-left">
                            <input type="password" class="form-control" name="user_password" placeholder="Password">
                            <div class="form-control-feedback">
                                <i class="icon-lock2 text-muted"></i>
                            </div>
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block">Sign in <i class="icon-circle-right2 position-right"></i></button>
                        </div>

                        <div class="text-center">
                            <a href="login_password_recover.html">Forgot password?</a>
                        </div>
                    </div>
                </form>
                <div class="footer text-muted">
                    &copy; 2017-2018. <a href="#">Hummingsoft Sdn. Bhd.</a>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    var loginStatus = '<?php echo isset($_GET["login"]) ?  $_GET["login"] : ""; ?>';
    $(function(){
        if(loginStatus == "tdDgsj90GHSg$jkn"){
            noty({
                width: 200,
                text: 'Invalid Username or Password.',
                type: 'error',
                dismissQueue: true,
                timeout: 4000,
                layout: 'bottom',
            });
            return false;
        }else if(loginStatus == "tdDgsj80GHSg$jkn"){
            noty({
                width: 200,
                text: 'Successfully logged out.',
                type: 'success',
                dismissQueue: true,
                timeout: 4000,
                layout: 'bottom',
            });
            return false;
        }
    });
</script>
</body>
</html>
