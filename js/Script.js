
var css = document.styleSheets;
var testo = 0;

function scriviCookie(nomeCookie,valoreCookie,durataCookie){
  var scadenza = new Date();
  var adesso = new Date();
  scadenza.setTime(adesso.getTime() + (parseInt(durataCookie) * 60000));
  document.cookie = nomeCookie + '=' + escape(valoreCookie) + '; expires=' + scadenza.toGMTString() + '; path=/';
}

function cancellaCookie(nomeCookie){
  scriviCookie(nomeCookie,'',-1);
}

function leggiCookie(nomeCookie)
{
  if (document.cookie.length > 0)
  {
    var inizio = document.cookie.indexOf(nomeCookie + "=");
    if (inizio != -1)
    {
      inizio = inizio + nomeCookie.length + 1;
      var fine = document.cookie.indexOf(";",inizio);
      if (fine == -1) fine = document.cookie.length;
      return unescape(document.cookie.substring(inizio,fine));
    }else{
       return "";
    }
  }
  return "";
}

function verificaCookie(nomeCookie)
{
  var verifica = (document.cookie.indexOf(nomeCookie) != -1) ? true : false;
  return verifica;
}

window.onload = function(){
  var verificaTema = verificaCookie("temaChiaro");
  if (verificaCookie("temaChiaro")){
    css[2].disabled = true;
    css[3].disabled = false;
  }else if(verificaCookie("temaScuro")){
    css[3].disabled = true;
    css[2].disabled = false;
  }
}

$('#info').click( function(){
  window.location.href='Info.html';
});

$('#home').click( function(){
  window.location.href='index.html';
});

$('#contattami').click( function(){
  window.location.href='Contattami.html';
});

$('#Scuro').click( function(){
  //document.styleSheets[2].href = "../css/StyleDark.css";
  css[3].disabled = true;
  css[2].disabled = false;
  cancellaCookie("temaScuro");
  scriviCookie("temaScuro","scuro",60);
  cancellaCookie("temaChiaro");
});

$('#Chiaro').click( function(){
  //document.styleSheets[2].href = "../css/StyleDark.css";
  css[2].disabled = true;
  css[3].disabled = false;
  cancellaCookie("temaChiaro");
  scriviCookie("temaChiaro","chiaro",60);
  cancellaCookie("temaScuro");
});

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
