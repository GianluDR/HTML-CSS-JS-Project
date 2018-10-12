
$('#info').click( function(){
  window.location.href='Info.html';
});

$('#home').click( function(){
  window.location.href='Index.html';
});

$('#contattami').click( function(){
  window.location.href='Contattami.html';
});

var testo = 0;

$('#increaseButton').click( function() {
  var $bar = $('#progressBar');
  var $barParent = $bar.parent();
  var perc = ~~($bar.width() * 100 / $barParent.width());
  if(perc<100) $bar.css({ width : (perc+15.25) +"%" });
});

$('#increaseButton').click( function(){
  if(testo<7){
    switch(testo){
      case 0:
        document.getElementById("zero").style.display = 'none';
        document.getElementById("primo").style.display = 'block';
        break;
      case 1:
        document.getElementById("primo").style.display = 'none';
        document.getElementById("secondo").style.display = 'block';
        break;
      case 2:
        document.getElementById("secondo").style.display = 'none';
        document.getElementById("terzo").style.display = 'block';
        break;
      case 3:
        document.getElementById("terzo").style.display = 'none';
        document.getElementById("quarto").style.display = 'block';
        break;
      case 4:
        document.getElementById("quarto").style.display = 'none';
        document.getElementById("quinto").style.display = 'block';
        break;
      case 5:
        document.getElementById("quinto").style.display = 'none';
        document.getElementById("sesto").style.display = 'block';
        break;
      case 6:
        document.getElementById("sesto").style.display = 'none';
        document.getElementById("settimo").style.display = 'block';
        break;
    }
    testo++;
  }
});

$("#decreaseButton").click( function() {
  var $bar = $('#progressBar');
  var $barParent = $bar.parent();
  var perc = ~~($bar.width() * 100 / $barParent.width());
  if(perc>0) $bar.css({ width : (perc-15.5) +"%" });
});

$("#decreaseButton").click( function() {
  if(testo>0){
    switch(testo){
      case 1:
        document.getElementById("zero").style.display = 'block';
        document.getElementById("primo").style.display = 'none';
        break;
      case 2:
        document.getElementById("primo").style.display = 'block';
        document.getElementById("secondo").style.display = 'none';
        break;
      case 3:
        document.getElementById("secondo").style.display = 'block';
        document.getElementById("terzo").style.display = 'none';
        break;
      case 4:
        document.getElementById("terzo").style.display = 'block';
        document.getElementById("quarto").style.display = 'none';
        break;
      case 5:
        document.getElementById("quarto").style.display = 'block';
        document.getElementById("quinto").style.display = 'none';
        break;
      case 6:
        document.getElementById("quinto").style.display = 'block';
        document.getElementById("sesto").style.display = 'none';
        break;
      case 7:
        document.getElementById("sesto").style.display = 'block';
        document.getElementById("settimo").style.display = 'none';
        break;
    }
    testo--;
  }
});

setTimeout( function() {
  document.getElementById('progressBar').style.width = '0px';
},0);

var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-red";
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(showDivs, 3000);
}
