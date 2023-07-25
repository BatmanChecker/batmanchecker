
'<script src="https://google.com/recaptcha/api.js"></script>',
;
error_reporting(0);
session_start();
session_destroy();

$page_title = 'Giris Yap';


<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Lase Check size en iyi deneyimi sunmak için yapılmış bir platformdur. Dilediğiniz kişinin bilgilerini tek bir tıkla listeler ve size de bu keyfin hayranlığını sunmak isteriz.">
    <meta name="keywords" content="worlwide,automation">
    <meta name="author" content="l3r0y">

    <title></title>
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,700,800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="../assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../assets/plugins/font-awesome/css/all.min.css" rel="stylesheet">
    <link href="../assets/plugins/perfectscroll/perfect-scrollbar.css" rel="stylesheet">
    <link href="../assets/plugins/pace/pace.css" rel="stylesheet">
    <link rel="shortcur icon" href="../assets/icon/favicon-32x32.ico">

    <script src="https://google.com/recaptcha/api.js"></script>

    <link href="../assets/css/main.min.css" rel="stylesheet">
    <link href="../assets/css/custom.css" rel="stylesheet">

    <style>
        body {
            background-image: linear-gradient(-225deg, #000000 50%, #000000 50%);
        }

        .authent-text p {
            color: #fff;
        }

        .card {
            box-shadow: 1px 2px 29px 10px rgb(255, 22, 10, 0.5);
            background: rgba(255, 22, 22, 0.1);
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top: 3px solid rgba(255, 22, 22, 0.5);
            border-left: 3px solid rgba(255, 22, 22, 0.5);
            border-right: 3px solid rgba(255, 22, 22, 0.5);
            backdrop-filter: blur(5px);
        }


        .MadeustLogo {
            margin-right: 0;
            width: auto;
            height: 70px;
            margin: 25px auto;
            display: block;
            text-align: center;
            font-size: 20px;
            font-weight: 500;
        }

        #key:focus {
            background-color: red;
        }
         
        p {text-align: center;
           color: #fff;
           width: auto;
           font-size: 18px; 
        } 

        a {text-align: center;
           color: #fff;
           width: auto;
           font-size: 11px; 
        } 
    
        svg {text-align: center;
             width: auto;
             font-size: 18px; 
        } 
    
    
    </style>
</head>
body class="login-page">
	
    <!--BAŞLANGIC-->
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-12 col-lg-4">
                <div style="z-index: 5 !important; " class="card login-box-container">
                    <div class="card-body">
                        <img style="height: 150px;" alt="image" src="https://media.tenor.com/mFmmxJNuSxYAAAAd/batman.gif" class="MadeustLogo">
                        <center>
