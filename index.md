<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Bootstrap CSS file -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <!-- Font Awesome CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="public/hStyle.css">
  <script src="public/jquery-3.5.1.js"></script>
</head>

<body onresize="getHeight()">

  <!--navigation bar-->
  <nav class="navbar navbar-expand-md sticky-top" id="navbar-custom">
    <a href="index.html" class="navbar-brand">
      <img src="public/logo.png" height="28" alt="Lorien Legacies">
    </a>
    <button type="button" class="navbar-toggler btn-outline-secondary" data-toggle="collapse" data-target="#navbarCollapse">
      <span class="fa fa-bars"></span>
    </button>

    <!--collapsible navigation bar for mobile devices-->
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav" id="navbarLinks">
        <a href="index.html" class="nav-item nav-link">Home</a>
        <a href="Characters.html" class="nav-item nav-link">Character List</a>
        <a href="Books.html" class="nav-item nav-link">Books in the Series</a>
        <a href="Quiz.html" class="nav-item nav-link">Find Out Your Legacy</a>
      </div>
    </div>
  </nav>

  <div class="container-fluid homeHeader" id="homeHeader">
    <video id="headerVid" autoplay muted loop>
      <source src="public/backgroundvid.mp4" type="video/mp4">
    </video>
  </div>

  <div class="vidOverlay" id="vidOverlay">
    <div class="row h-100 row-no-padding justify-content-center align-items-center">
      <div class="col-lg-8">
        <h1 id="homeTitle"><span style="font-size:50%">THE</span><br>Lorien Legacies</h1>
      </div>
    </div>

    <!-- the home content is placed within the header overlay for smooth
    opacity and scrolling effects -->
    <div class="container-fluid homeContent" id="homeContent">
      <div class="row row-no-padding justify-content-center align-items-center">
        <div class="col-lg-12 subtitle" id="subtitle">
          <h1>Three of us are dead</h1>
          <h1 id="num4">I am Number Four.</h1>
        </div>
      </div>

      <!--contains images which are links to other pages on the website -->
      <div class="col-lg-12">
        <div class="container links">
          <div class="row row-no-padding justify-content-center">
            <div class="col-lg-4 col-md-4 text-center" id="characters">
              <a href="Characters.html">
                <img class="rounded" src="public/cBckg.png" id="c">
              </a>
              <a href="Characters.html">
                <div class="centered" id="cText">CHARACTERS</div>
              </a>
            </div>

            <div class="col-lg-4 col-md-4 text-center" id="books">
              <a href="Books.html">
                <img class="rounded" src="public/7dfe177e1ca67906404b92df3ea05db5.jpg" id="b">
              </a>
              <a href="Books.html">
                <div class="centered" id="bText">BOOKS</div>
              </a>
            </div>

            <div class="col-lg-4 col-md-4 text-center" id="quiz">
              <a href="Quiz.html">
                <img class="rounded" src="public/lorien legacies.jpg" id="q">
              </a>
              <a href="Quiz.html">
                <div class="centered" id="qText">LEGACY</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>






  <!-- linked personal and Boostrap js files -->
  <script src="public/hFuncs.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>
