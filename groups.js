
/* Mobile Navbar */

function myFunction() {

    var currentWidth = window.innerWidth;
    var desktopWidth = 999.9;

    var x = document.getElementById("myLinks");
    var y = document.getElementById("navbar-toggle");
    var z = document.getElementById("topNav");

    var a = document.getElementById("subAttractionsItems");
    var b = document.getElementById("subGroupsItems");
    var c = document.getElementById("subRestaurantItems");
    var d = document.getElementById("subContactUsItems");
    var e = document.getElementById("subHoursAndInfoItems");
    var f = document.getElementById("subLocationsItems");
    
    var g = document.getElementById("attractions-toggle");
    var h = document.getElementById("groups-toggle");
    var i = document.getElementById("restaurant-toggle");
    var j = document.getElementById("contact-toggle");
    var k = document.getElementById("hours-and-info-toggle");
    var l = document.getElementById("locations-toggle");

    if (x.style.display === "flex" && currentWidth < desktopWidth){
      x.style.display = "none";
      y.src = "jacksImages/white-menu-icon.jpg";
      y.style.margin = "-10px -10px 0px 0px";
      y.style.height = "60px";
      y.style.padding = "0px 0px 0px 0px";
      z.style.padding = "0px 0px 5px 0px";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
      f.style.display = "none";
    } else if (currentWidth < desktopWidth) {
      x.style.display = "flex";
      x.style.flexWrap = "wrap";
      x.style.justifyContent = "space-between";
      x.style.alignItems = "center";
      x.style.padding = "0px 0px 0px 0px";
      y.src = "jacksImages/white-x.png";
      y.style.height = "25px";
      y.style.margin = "0px 0px 0px -32.5px";
      y.style.padding = "10px 0px 0px 0px";
      z.style.padding = "0px 0px 0px 0px";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
      f.style.display = "none";
      g.style.transform = "rotate(0deg)";
      g.style.marginBottom = "0px";
      h.style.transform = "rotate(0deg)";
      i.style.transform = "rotate(0deg)";
      j.style.transform = "rotate(0deg)";
      k.style.transform = "rotate(0deg)";
      l.style.transform = "rotate(0deg)";
    }
    
  }

  function attractionsSubMenuFunction() {

    var currentWidth = window.innerWidth;
    var desktopWidth = 1000;

    var x = document.getElementById("subAttractionsItems");
    var y = document.getElementById("attractions-toggle");

    if (x.style.display === "block" && currentWidth < desktopWidth) {
      x.style.display = "none";
      y.style.transform = "rotate(0deg)";
      y.style.alignSelf = "center";
    } else if (x.style.display === "none" && currentWidth < desktopWidth) {
      x.style.display = "block";
      x.style.flexDirection = "column";
      x.style.padding = "0px 220px 0px 0px";
      y.style.transform = "rotate(180deg)";
      y.style.alignSelf = "flex-end";
    }
  }

  function groupsSubMenuFunction() {

    var currentWidth = window.innerWidth;
    var desktopWidth = 1000;

    var x = document.getElementById("subGroupsItems");
    var y = document.getElementById("groups-toggle");

    if (x.style.display === "block" && currentWidth < desktopWidth) {
      x.style.display = "none";
      y.style.transform = "rotate(0deg)";
      y.style.alignSelf = "center";
    } else if (x.style.display === "none" && currentWidth < desktopWidth) {
      x.style.display = "block";
      x.style.padding = "0px 220px 0px 0px";
      y.style.transform = "rotate(180deg)";
      y.style.alignSelf = "flex-end";
    }
  }

  function restaurantSubMenuFunction() {

    var currentWidth = window.innerWidth;
    var desktopWidth = 1000;

    var x = document.getElementById("subRestaurantItems");
    var y = document.getElementById("restaurant-toggle");

    if (x.style.display === "block" && currentWidth < desktopWidth) {
      x.style.display = "none";
      y.style.transform = "rotate(0deg)";
      y.style.alignSelf = "center";
    } else if (x.style.display === "none" && currentWidth < desktopWidth) {
      x.style.display = "block";
      x.style.padding = "0px 220px 0px 0px";
      y.style.transform = "rotate(180deg)";
      y.style.alignSelf = "flex-end";
    }
  }

  function contactUsSubMenuFunction() {

    var currentWidth = window.innerWidth;
    var desktopWidth = 1000;

    var x = document.getElementById("subContactUsItems");
    var y = document.getElementById("contact-toggle");

    if (x.style.display === "block" && currentWidth < desktopWidth) {
      x.style.display = "none";
      y.style.transform = "rotate(0deg)";
      y.style.alignSelf = "center";
    } else if (x.style.display === "none" && currentWidth < desktopWidth) {
      x.style.display = "block";
      x.style.padding = "0px 220px 0px 0px";
      y.style.transform = "rotate(180deg)";
      y.style.alignSelf = "flex-end";
    }
  }

  function hoursAndInfoSubMenuFunction() {

    var currentWidth = window.innerWidth;
    var desktopWidth = 1000;

    var x = document.getElementById("subHoursAndInfoItems");
    var y = document.getElementById("hours-and-info-toggle");

    if (x.style.display === "block" && currentWidth < desktopWidth) {
      x.style.display = "none";
      y.style.transform = "rotate(0deg)";
      y.style.alignSelf = "center";
    } else if (x.style.display === "none" && currentWidth < desktopWidth) {
      x.style.display = "block";
      x.style.padding = "0px 220px 0px 0px";
      y.style.transform = "rotate(180deg)";
      y.style.alignSelf = "flex-end";
    }
  }

  function locationsSubMenuFunction() {

    var currentWidth = window.innerWidth;
    var desktopWidth = 1000;
    
    var x = document.getElementById("subLocationsItems");
    var y = document.getElementById("locations-toggle");

    if (x.style.display === "block" && currentWidth < desktopWidth) {
      x.style.display = "none";
      y.style.transform = "rotate(0deg)";
      y.style.alignSelf = "center";
    } else if (x.style.display === "none" && currentWidth < desktopWidth) {
      x.style.display = "block";
      x.style.padding = "0px 50px 0px 0px";
      y.style.transform = "rotate(180deg)";
      y.style.alignSelf = "flex-end";
    }
  }

/* Arcade Add On */

var size = "0";
var time = "1";
var check = "0";

function arcadeCheck() {

  if (check == "0") {
    check = "1";
  } else if (check == "1"){
    check = "0";
  }

  rateCalc();
}

/* Group Rate Estimate by Headcount */

function rateCalc() {

  var result = document.getElementById('unlimited-rate-estimate-result');
    
    if (size == "1" && time == "1" && check == "0"){
      result.innerHTML = "$22 per person";
    } else if (size == "1" && time == "1" && check == "1"){
      result.innerHTML = "$30 per person ";
    } else if (size == "1" && time == "2" && check == "0"){
      result.innerHTML = "$26 per person";
    } else if (size == "1" && time == "2" && check == "1"){
      result.innerHTML = "$34 per person";
    } else if (size == "1" && time == "3" && check == "0"){
      result.innerHTML = "$29 per person";
    } else if (size == "1" && time == "3" && check == "1"){
      result.innerHTML = "$37 per person";
    } else if (size == "2" && time == "1" && check == "0"){
      result.innerHTML = "$18 per person";
    } else if (size == "2" && time == "1" && check == "1"){
      result.innerHTML = "$25 per person";
    } else if (size == "2" && time == "2" && check == "0"){
      result.innerHTML = "$22 per person";
    } else if (size == "2" && time == "2" && check == "1"){
      result.innerHTML = "$29 per person";
    } else if (size == "2" && time == "3" && check == "0"){
      result.innerHTML = "$25 per person";
    } else if (size == "2" && time == "3" && check == "1"){
      result.innerHTML = "$32 per person";
    } else if (size == "3" && time == "1" && check == "0"){
      result.innerHTML = "$15 per person";
    } else if (size == "3" && time == "1" && check == "1"){
      result.innerHTML = "$21 per person";
    } else if (size == "3" && time == "2" && check == "0"){
      result.innerHTML = "$18 per person";
    } else if (size == "3" && time == "2" && check == "1"){
      result.innerHTML = "$24 per person";
    } else if (size == "3" && time == "3" && check == "0"){
      result.innerHTML = "$20 per person";
    } else if (size == "3" && time == "3" && check == "1"){
      result.innerHTML = "$26 per person";
    } else if (size == "4" && time == "1" && check == "0"){
      result.innerHTML = "$13 per person";
    } else if (size == "4" && time == "1" && check == "1"){
      result.innerHTML = "$17 per person";
    } else if (size == "4" && time == "2" && check == "0"){
      result.innerHTML = "$16 per person";
    } else if (size == "4" && time == "2" && check == "1"){
      result.innerHTML = "$20 per person";
    } else if (size == "4" && time == "3" && check == "0"){
      result.innerHTML = "$18 per person";
    } else if (size == "4" && time == "3" && check == "1"){
      result.innerHTML = "$22 per person";
    }
}

function rateCalc5099() {

    var a = document.getElementById('size-50-99');
    var b = document.getElementById('size-100-199');
    var c = document.getElementById('size-200-399');
    var d = document.getElementById('size-400');

    a.classList.add("selected");
    b.classList.remove("selected");
    c.classList.remove("selected");
    d.classList.remove("selected");

    size = "1";

    rateCalc();
    
}

function rateCalc100199() {

    var a = document.getElementById('size-50-99');
    var b = document.getElementById('size-100-199');
    var c = document.getElementById('size-200-399');
    var d = document.getElementById('size-400');

    a.classList.remove("selected");
    b.classList.add("selected");
    c.classList.remove("selected");
    d.classList.remove("selected");

    size = "2";

    rateCalc();
}

function rateCalc200399() {

    var a = document.getElementById('size-50-99');
    var b = document.getElementById('size-100-199');
    var c = document.getElementById('size-200-399');
    var d = document.getElementById('size-400');

    a.classList.remove("selected");
    b.classList.remove("selected");
    c.classList.add("selected");
    d.classList.remove("selected");

    size = "3";

    rateCalc();
}

function rateCalc400() {

  var a = document.getElementById('size-50-99');
  var b = document.getElementById('size-100-199');
  var c = document.getElementById('size-200-399');
  var d = document.getElementById('size-400');

  a.classList.remove("selected");
  b.classList.remove("selected");
  c.classList.remove("selected");
  d.classList.add("selected");

  size = "4";

  rateCalc();
}

/* Group Rate Estimate by Time */

function rateCalc2() {
  
    var x = document.getElementById('hours-2');
    var y = document.getElementById('hours-3');
    var z = document.getElementById('hours-4');
  
    x.classList.add("selected");
    y.classList.remove("selected");
    z.classList.remove("selected");

    time = "1";

    rateCalc();
}
function rateCalc3() {
  
    var x = document.getElementById('hours-2');
    var y = document.getElementById('hours-3');
    var z = document.getElementById('hours-4');
  
    x.classList.remove("selected");
    y.classList.add("selected");
    z.classList.remove("selected");

    time = "2";

    rateCalc();
}
function rateCalc4() {
  
    var x = document.getElementById('hours-2');
    var y = document.getElementById('hours-3');
    var z = document.getElementById('hours-4');
  
    x.classList.remove("selected");
    y.classList.remove("selected");
    z.classList.add("selected");

    time = "3";

    rateCalc();
}

/* Cabana Add On */

var cabana = "0";

function cabanaCost() {

  var x = document.getElementById('unlimited-cabana-add-on');

  if (cabana == "1"){
    x.innerHTML = "+ $50";
  } else if (cabana == "2"){
    x.innerHTML = "+ $100";
  } else if (cabana == "3"){
    x.innerHTML = "+ $150";
  } else if (cabana == "4"){
    x.innerHTML = "+ $200";
  } else if (cabana == "0"){
    x.innerHTML = "";
  }
}

function subtractCabana(){

  var x = document.getElementById('cabana-count');

  if (cabana == "1"){
    x.innerHTML = "0";
    cabana = "0";
  } else if (cabana == "2"){
    x.innerHTML = "1";
    cabana = "1";
  } else if (cabana == "3"){
    x.innerHTML = "2";
    cabana = "2";
  } else if (cabana == "4"){
    x.innerHTML = "3";
    cabana = "3";
  }

  cabanaCost();
}

function addCabana(){

  var x = document.getElementById('cabana-count');

  if (cabana == "3"){
    x.innerHTML = "4";
    cabana = "4";
  } else if (cabana == "2"){
    x.innerHTML = "3";
    cabana = "3";
  } else if (cabana == "1"){
    x.innerHTML = "2";
    cabana = "2";
  } else if (cabana == "0"){
    x.innerHTML = "1";
    cabana = "1";
  }

  cabanaCost();
}