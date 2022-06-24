//Smooth Scroll
SmoothScroll({
   // Scrolling Core
   animationTime    : 400, // [ms]
   stepSize         : 100, // [px]

   // Acceleration
   accelerationDelta : 50,  // 50
   accelerationMax   : 3,   // 3

   // Keyboard Settings
   keyboardSupport   : true,  // option
   arrowScroll       : 50,    // [px]

   // Pulse (less tweakable)
   // ratio of "tail" to "acceleration"
   pulseAlgorithm   : true,
   pulseScale       : 4,
   pulseNormalize   : 1,

   // Other
   touchpadSupport   : false, // ignore touchpad by default
   fixedBackground   : true, 
   excluded          : ''    
});


// Change style of navbar on scroll
window.onscroll = function() {
 myFunction()
};

function myFunction() {
 var navbar = document.getElementById("myNavbar");
 if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
   navbar.className = "w3-navbar" + " w3-card-2" + " w3-animate-top" + " w3-white";
 } else {
   navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
 }
}
