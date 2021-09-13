/*

Known bugs:

1. following opening a submenu and closing the menu without closing the 
submenu upon opening the menu again the submenu will be closed but the arrow will be
rotated as if the submenu is open

Fixed but the arrow sits 5-10px too low
Look at changes made to styling when arrow is flipped

2. closing menu and then expanding to desktop width leaves display as none
fixed

3. Using the hover script messes up the dropdown in mobile menu

4. Using mobile and then going back to desktop width drops desktop menu to bottom of 
container div for submenu

*/

/* Mobile Navbar */

function myFunction() {
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

    if (x.style.display === "flex") {
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
    } else {
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
    var x = document.getElementById("subAttractionsItems");
    var y = document.getElementById("attractions-toggle");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.transform = "rotate(0deg)";
      y.style.alignSelf = "center";
    } else {
      x.style.display = "block";
      x.style.flexDirection = "column";
      x.style.padding = "0px 220px 0px 0px";
      y.style.transform = "rotate(180deg)";
      y.style.alignSelf = "flex-end";
    }
  }

  function groupsSubMenuFunction() {
    var x = document.getElementById("subGroupsItems");
    var y = document.getElementById("groups-toggle");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.transform = "rotate(0deg)";
      y.style.alignSelf = "center";
    } else {
      x.style.display = "block";
      x.style.padding = "0px 220px 0px 0px";
      y.style.transform = "rotate(180deg)";
      y.style.alignSelf = "flex-end";
    }
  }

  function restaurantSubMenuFunction() {
    var x = document.getElementById("subRestaurantItems");
    var y = document.getElementById("restaurant-toggle");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.transform = "rotate(0deg)";
      y.style.alignSelf = "center";
    } else {
      x.style.display = "block";
      x.style.padding = "0px 220px 0px 0px";
      y.style.transform = "rotate(180deg)";
      y.style.alignSelf = "flex-end";
    }
  }

  function contactUsSubMenuFunction() {
    var x = document.getElementById("subContactUsItems");
    var y = document.getElementById("contact-toggle");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.transform = "rotate(0deg)";
      y.style.alignSelf = "center";
    } else {
      x.style.display = "block";
      x.style.padding = "0px 220px 0px 0px";
      y.style.transform = "rotate(180deg)";
      y.style.alignSelf = "flex-end";
    }
  }

  function hoursAndInfoSubMenuFunction() {
    var x = document.getElementById("subHoursAndInfoItems");
    var y = document.getElementById("hours-and-info-toggle");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.transform = "rotate(0deg)";
      y.style.alignSelf = "center";
    } else {
      x.style.display = "block";
      x.style.padding = "0px 220px 0px 0px";
      y.style.transform = "rotate(180deg)";
      y.style.alignSelf = "flex-end";
    }
  }

  function locationsSubMenuFunction() {
    var x = document.getElementById("subLocationsItems");
    var y = document.getElementById("locations-toggle");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.transform = "rotate(0deg)";
      y.style.alignSelf = "center";
    } else {
      x.style.display = "block";
      x.style.padding = "0px 50px 0px 0px";
      y.style.transform = "rotate(180deg)";
      y.style.alignSelf = "flex-end";
    }
  }

/*Header scroll*/
/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var x = window.innerWidth;
  var y = 899.9;
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 && x > y)  {
    document.getElementById("topNav").className = "scrolled-topnav";
    document.getElementById("logo").className = "scrolled-logo";
  } else {
    document.getElementById("topNav").className = "topnav";
    document.getElementById("logo").className = "header-logo";
  }
}
*/
/*Slides*/

var slideIndex1 = 0;
showSlides1();

function showSlides1() {
    var i;
    var slides = document.getElementsByClassName("birthdays-container");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) { slideIndex1 = 1 }
    slides[slideIndex1 - 1].style.display = "block";
    setTimeout(showSlides1, 3000); // Change image every 3 seconds
}

var slideIndex2 = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("groups-container");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) { slideIndex2 = 1 }
  slides[slideIndex2 - 1].style.display = "block";
  setTimeout(showSlides2, 6000); // Change image every 6 seconds
}