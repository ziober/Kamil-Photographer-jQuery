$(document).ready(function() {
  //alert("test");
  var szybkosc = 900; // szybkość zmiany slidera
  var automatycznaZmiana = true; //czy automatyczna zmiana
  var czasZmianySlajdu = 4000;

  //ustawiam pierwszy slide na aktywny
  $(".slide")
    .first()
    .addClass("active");

  //ukrywam wszystkie slide
  $(".slide").hide();

  //pokazuję aktywny slide
  $(".active").show();
  $("#next").click(function() {
    //alert("następny");
    //zmianiam nazwę klasy z active na oldActive
    $(".active")
      .removeClass("active")
      .addClass("oldActive");
    //sprawdzam slide nie jest przypadkiem ostatni
    if ($(".oldActive").is(":last-child")) {
      //jest ostatni to ustawiam klasę active na pierwszym elemencie\
      $(".slide")
        .first()
        .addClass("active");
    } else {
      //nie jest ostatni kolejnemu elementowi nadaję klasę active
      $(".oldActive")
        .next()
        .addClass("active");
    }
    //
    //usuwam zbędnego juz oldActive
    $(".oldActive").removeClass("oldActive");
    //chowamy slide
    $(".slide").fadeOut(szybkosc);
    //pokazuję aktywny
    $(".active").fadeIn(szybkosc);
  });
  $("#prev").click(poprzedniSlajd);

  if (automatycznaZmiana == true) {
    setInterval(nastepnySlajd, czasZmianySlajdu);
  }
  function nastepnySlajd() {
    $(".active")
      .removeClass("active")
      .addClass("oldActive");
    //sprawdzam slide nie jest przypadkiem ostatni
    if ($(".oldActive").is(":last-child")) {
      //jest ostatni to ustawiam klasę active na pierwszym elemencie\
      $(".slide")
        .first()
        .addClass("active");
    } else {
      //nie jest ostatni kolejnemu elementowi nadaję klasę active
      $(".oldActive")
        .next()
        .addClass("active");
    }
    //
    //usuwam zbędnego juz oldActive
    $(".oldActive").removeClass("oldActive");
    //chowamy slide
    $(".slide").fadeOut(szybkosc);
    //pokazuję aktywny
    $(".active").fadeIn(szybkosc);
  }

  function poprzedniSlajd() {
    $(".active")
      .removeClass("active")
      .addClass("oldActive");
    //sprawdzam slide nie jest przypadkiem ostatni
    if ($(".oldActive").is(":first-child")) {
      //jest ostatni to ustawiam klasę active na pierwszym elemencie\
      $(".slide")
        .last()
        .addClass("active");
    } else {
      //nie jest ostatni kolejnemu elementowi nadaję klasę active
      $(".oldActive")
        .prev()
        .addClass("active");
    }
    //
    //usuwam zbędnego juz oldActive
    $(".oldActive").removeClass("oldActive");
    //chowamy slide
    $(".slide").fadeOut(szybkosc);
    //pokazuję aktywny
    $(".active").fadeIn(szybkosc);
  }
});
