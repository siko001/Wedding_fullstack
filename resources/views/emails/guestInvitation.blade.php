<!DOCTYPE html>
<html>

<head>
    <title>Wedding Invitation Invitation</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montez&display=swap');

        .styled-font {
            font-family: 'Montez', cursive;
            font-size: 2rem;
        }

        .normal-font {
            font-family: 'Open Sans', Arial, sans-serif;
        }

        * {
            margin: 0;
            border: 0;
        }

        .body-before {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }

        .body {
            font-size: 1.5rem;
            padding: 0.5rem 0.75rem;
            background-color: pink;
            text-align: center;
            height: 100%;
            width: 100%;
            margin: 10px 0;
        }

        .text {
            text-align: center;
            width: 70%;
            margin: 0 auto;
        }

        @media screen and (max-width:750px) {
            .text {
                width: 90%;
            }
        }
    </style>
</head>

<body>
    <div class="body-before">
        <div class="body">
            <h1 class="styled-font">🌹 Hi, {{ $name }} </h1>
            <br>
            <h3 class="normal-font">Have you heard the wonderful news? 💞 We're getting married 🥂💍, and you're
                cordially invited! 💌<br><br>
            </h3>
            <h5 class="normal-font text">Please join us in celebrating this joyous occasion by visiting our wedding
                website 🌐. You can access it <a href="http://localhost:5173" target="_blank">here</a> or simply go to
                "https://localhost:5173". It's filled with all the lovely details about our upcoming wedding. 💘<br>
                Please find your personal wedding invitation in the RSVP section of our website. Enter your name and the
                same email address you received this message on ({{ $email }}) to confirm your attendance. 🙏<br>
                Kindly let us know your decision no later than the 14th of February. Your presence would mean the world
                to us! 📆<br>
                Sending you all our love, <br><br></h5>
            <h2 class="styled-font">Karina and Neil 💕</h2>

        </div>
    </div>
</body>

</html>
