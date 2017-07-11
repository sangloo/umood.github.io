// all this does is mouse tracking.

var eye;
var n_eye = document.querySelector(".eye");
var n_iris = n_eye.querySelector(".iris");
var size = n_eye.clientWidth;

(window.onresize = function () {
	eye = {
		x: n_eye.offsetLeft + size/2 ,
		y: n_eye.offsetTop + size/2
	};
})();

window.onmouseout = window.onmouseleave = function () {
	n_iris.setAttribute("class", "iris anim");
};

window.ontouchend = function (e) {
	if (e.touches.length == 0) window.onmouseout();
}

window.onmousemove = function (e) {
	n_iris.setAttribute("class", "iris");
	var m = {
		x: e.clientX - eye.x,
		y: e.clientY - eye.y
	};
	m.rx = 0 - m.y;
	m.ry = m.x;
	["rx", "ry"].forEach(function (r) {
		m[r] *= 0.1;
		m[r] = Math.max(-60, m[r]);
		m[r] = Math.min(60, m[r]);
	});
	n_iris.style.transform = "rotateX("+m.rx+"deg) rotateY("+m.ry+"deg) translateZ(180px) scale(0.6)";
}; 

window.ontouchmove = window.ontouchstart = function (e) {
	var touch = e.touches[0];
	window.onmousemove(touch);
};

/*classie*/


/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license*/
(function( window ){
	'use strict';
function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}

})( window );




/* the menu */


$( document ).ready(function() {
    

    
    $( "#menu-icon" ).click(function() {
        
        $( "#right-menu" ).addClass("animate-right");
        $( "#right-menu2" ).addClass("animate-right");
        $( "#left-menu" ).addClass("animate-left");;
        $( "#left-menu2" ).addClass("animate-left");
        
    });
    
    
});































































/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}

})( window );




















































/*classie elements*/

var hitarea = document.getElementById( 'hitarea' ),
    menu = document.getElementById( 'menu' ),
    rightmenu = document.getElementById( 'rightmenu' ),
    home = document.getElementById( 'home' ),
    fea = document.getElementById( 'fea' ),
    second = document.getElementById( 'second' ),
    description = document.getElementById( 'description' ),
    features = document.getElementById( 'features' ),
    contact = document.getElementById( 'contact' ),
    third = document.getElementById( 'third' ),
    
    img1 = document.getElementById( 'img1' ),
    img2 = document.getElementById( 'img2' ),
    img3 = document.getElementById( 'img3' ),
    img4 = document.getElementById( 'img4' ),
    img5 = document.getElementById( 'img5' ),
    img6 = document.getElementById( 'img6' ),
    img7 = document.getElementById( 'img7' ),
    img8 = document.getElementById( 'img8' ),
    img9 = document.getElementById( 'img9' ),
    
    text1 = document.getElementById( 'text1' ),
    text2 = document.getElementById( 'text2' ),
    text3 = document.getElementById( 'text3' ),
    text4 = document.getElementById( 'text4' ),
    text5 = document.getElementById( 'text5' ),
    text6 = document.getElementById( 'text6' ),
    text7 = document.getElementById( 'text7' ),
    text8 = document.getElementById( 'text8' ),
    text9 = document.getElementById( 'text9' ),
    
    number1 = document.getElementById( 'number1' ),
    number2 = document.getElementById( 'number2' ),
    number3 = document.getElementById( 'number3' ),
    number4 = document.getElementById( 'number4' ),
    number5 = document.getElementById( 'number5' ),
    number6 = document.getElementById( 'number6' ),
    number7 = document.getElementById( 'number7' ),
    number8 = document.getElementById( 'number8' ),
    number9 = document.getElementById( 'number9' ),
    
    first = document.getElementById( 'first' );




hitarea.onclick = function() {
	classie.toggle( first, 'firsthidden' );
    classie.toggle( this , 'hitareahidden');
};


menu.onclick = function() {
	classie.toggle( rightmenu, 'rightmenu' );
};

home.onclick =function(){
    classie.remove( first, 'firsthidden' );
    classie.remove( hitarea , 'hitareahidden');
    classie.remove(second, 'secondhidden');
    classie.remove(third, 'third');
    classie.toggle( rightmenu, 'rightmenu' );
}

fea.onclick = function() {
    classie.toggle( second, 'secondhidden');
}


description.onclick = function() {
    classie.add( first, 'firsthidden' );
    classie.add( hitarea , 'hitareahidden');
    classie.remove(second, 'secondhidden');
    classie.remove(third, 'third');
    classie.toggle( rightmenu, 'rightmenu' );
}

features.onclick = function() {
    classie.add( first, 'firsthidden' );
    classie.add( hitarea , 'hitareahidden');
    classie.add(second, 'secondhidden');
    classie.remove(third, 'third');
    classie.toggle( rightmenu, 'rightmenu' );
}

contact.onclick = function() {
    classie.add( first, 'firsthidden' );
    classie.add( hitarea , 'hitareahidden');
    classie.add(second, 'secondhidden');
    classie.add(third, 'third');
    classie.toggle( rightmenu, 'rightmenu' );
}






number1.onclick = function() {
    
    
    classie.add(number1, 'numberactive');
    classie.remove(number2, 'numberactive');
    classie.remove(number3, 'numberactive');
    classie.remove(number4, 'numberactive');
    classie.remove(number5, 'numberactive');
    classie.remove(number6, 'numberactive');
    classie.remove(number7, 'numberactive');
    classie.remove(number8, 'numberactive');
    classie.remove(number9, 'numberactive');
    
    classie.add(img1, 'phoneactive');
    classie.remove(img2, 'phoneactive');
    classie.remove(img3, 'phoneactive');
    classie.remove(img4, 'phoneactive');
    classie.remove(img5, 'phoneactive');
    classie.remove(img6, 'phoneactive');
    classie.remove(img7, 'phoneactive');
    classie.remove(img8, 'phoneactive');
    classie.remove(img9, 'phoneactive');
    
    classie.add(text1, 'textactive');
    classie.remove(text2, 'textactive');
    classie.remove(text3, 'textactive');
    classie.remove(text4, 'textactive');
    classie.remove(text5, 'textactive');
    classie.remove(text6, 'textactive');
    classie.remove(text7, 'textactive');
    classie.remove(text8, 'textactive');
    classie.remove(text9, 'textactive');
}

number2.onclick = function() {
    
    
    classie.add(number2, 'numberactive');
    classie.remove(number1, 'numberactive');
    classie.remove(number3, 'numberactive');
    classie.remove(number4, 'numberactive');
    classie.remove(number5, 'numberactive');
    classie.remove(number6, 'numberactive');
    classie.remove(number7, 'numberactive');
    classie.remove(number8, 'numberactive');
    classie.remove(number9, 'numberactive');
    
    classie.add(img2, 'phoneactive');
    classie.remove(img3, 'phoneactive');
    classie.remove(img4, 'phoneactive');
    classie.remove(img5, 'phoneactive');
    classie.remove(img6, 'phoneactive');
    classie.remove(img7, 'phoneactive');
    classie.remove(img8, 'phoneactive');
    classie.remove(img9, 'phoneactive');
    
    classie.add(text2, 'textactive');
    classie.remove(text1, 'textactive');
    classie.remove(text3, 'textactive');
    classie.remove(text4, 'textactive');
    classie.remove(text5, 'textactive');
    classie.remove(text6, 'textactive');
    classie.remove(text7, 'textactive');
    classie.remove(text8, 'textactive');
    classie.remove(text9, 'textactive');
}

number3.onclick = function() {
    
    
    classie.add(number3, 'numberactive');
    classie.remove(number1, 'numberactive');
    classie.remove(number2, 'numberactive');
    classie.remove(number4, 'numberactive');
    classie.remove(number5, 'numberactive');
    classie.remove(number6, 'numberactive');
    classie.remove(number7, 'numberactive');
    classie.remove(number8, 'numberactive');
    classie.remove(number9, 'numberactive');
    
    classie.add(img3, 'phoneactive');
    classie.remove(img4, 'phoneactive');
    classie.remove(img5, 'phoneactive');
    classie.remove(img6, 'phoneactive');
    classie.remove(img7, 'phoneactive');
    classie.remove(img8, 'phoneactive');
    classie.remove(img9, 'phoneactive');
    
    classie.add(text3, 'textactive');
    classie.remove(text1, 'textactive');
    classie.remove(text2, 'textactive');
    classie.remove(text4, 'textactive');
    classie.remove(text5, 'textactive');
    classie.remove(text6, 'textactive');
    classie.remove(text7, 'textactive');
    classie.remove(text8, 'textactive');
    classie.remove(text9, 'textactive');
}






number4.onclick = function() {
    
    
    classie.add(number4, 'numberactive');
    classie.remove(number2, 'numberactive');
    classie.remove(number3, 'numberactive');
    classie.remove(number1, 'numberactive');
    classie.remove(number5, 'numberactive');
    classie.remove(number6, 'numberactive');
    classie.remove(number7, 'numberactive');
    classie.remove(number8, 'numberactive');
    classie.remove(number9, 'numberactive');
    
    classie.add(img4, 'phoneactive');
    classie.remove(img5, 'phoneactive');
    classie.remove(img6, 'phoneactive');
    classie.remove(img7, 'phoneactive');
    classie.remove(img8, 'phoneactive');
    classie.remove(img9, 'phoneactive');
    
    classie.add(text4, 'textactive');
    classie.remove(text2, 'textactive');
    classie.remove(text3, 'textactive');
    classie.remove(text1, 'textactive');
    classie.remove(text5, 'textactive');
    classie.remove(text6, 'textactive');
    classie.remove(text7, 'textactive');
    classie.remove(text8, 'textactive');
    classie.remove(text9, 'textactive');
}

number5.onclick = function() {
    
    
    classie.add(number5, 'numberactive');
    classie.remove(number2, 'numberactive');
    classie.remove(number3, 'numberactive');
    classie.remove(number4, 'numberactive');
    classie.remove(number1, 'numberactive');
    classie.remove(number6, 'numberactive');
    classie.remove(number7, 'numberactive');
    classie.remove(number8, 'numberactive');
    classie.remove(number9, 'numberactive');
    
    classie.add(img5, 'phoneactive');
    classie.remove(img6, 'phoneactive');
    classie.remove(img7, 'phoneactive');
    classie.remove(img8, 'phoneactive');
    classie.remove(img9, 'phoneactive');
    
    classie.add(text5, 'textactive');
    classie.remove(text2, 'textactive');
    classie.remove(text3, 'textactive');
    classie.remove(text4, 'textactive');
    classie.remove(text1, 'textactive');
    classie.remove(text6, 'textactive');
    classie.remove(text7, 'textactive');
    classie.remove(text8, 'textactive');
    classie.remove(text9, 'textactive');
}

number6.onclick = function() {
    
    
    classie.add(number6, 'numberactive');
    classie.remove(number2, 'numberactive');
    classie.remove(number3, 'numberactive');
    classie.remove(number4, 'numberactive');
    classie.remove(number5, 'numberactive');
    classie.remove(number1, 'numberactive');
    classie.remove(number7, 'numberactive');
    classie.remove(number8, 'numberactive');
    classie.remove(number9, 'numberactive');
    
    classie.add(img6, 'phoneactive');
    classie.remove(img7, 'phoneactive');
    classie.remove(img8, 'phoneactive');
    classie.remove(img9, 'phoneactive');
    
    classie.add(text6, 'textactive');
    classie.remove(text2, 'textactive');
    classie.remove(text3, 'textactive');
    classie.remove(text4, 'textactive');
    classie.remove(text5, 'textactive');
    classie.remove(text1, 'textactive');
    classie.remove(text7, 'textactive');
    classie.remove(text8, 'textactive');
    classie.remove(text9, 'textactive');
}

number7.onclick = function() {
    
    
    classie.add(number7, 'numberactive');
    classie.remove(number2, 'numberactive');
    classie.remove(number3, 'numberactive');
    classie.remove(number4, 'numberactive');
    classie.remove(number5, 'numberactive');
    classie.remove(number6, 'numberactive');
    classie.remove(number1, 'numberactive');
    classie.remove(number8, 'numberactive');
    classie.remove(number9, 'numberactive');
    
    classie.add(img7, 'phoneactive');
    classie.remove(img8, 'phoneactive');
    classie.remove(img9, 'phoneactive');
    
    classie.add(text7, 'textactive');
    classie.remove(text2, 'textactive');
    classie.remove(text3, 'textactive');
    classie.remove(text4, 'textactive');
    classie.remove(text5, 'textactive');
    classie.remove(text6, 'textactive');
    classie.remove(text1, 'textactive');
    classie.remove(text8, 'textactive');
    classie.remove(text9, 'textactive');
}

number8.onclick = function() {
    
    
    classie.add(number8, 'numberactive');
    classie.remove(number2, 'numberactive');
    classie.remove(number3, 'numberactive');
    classie.remove(number4, 'numberactive');
    classie.remove(number5, 'numberactive');
    classie.remove(number6, 'numberactive');
    classie.remove(number7, 'numberactive');
    classie.remove(number1, 'numberactive');
    classie.remove(number9, 'numberactive');
    
    classie.add(img8, 'phoneactive');
    classie.remove(img9, 'phoneactive');
    
    classie.add(text8, 'textactive');
    classie.remove(text2, 'textactive');
    classie.remove(text3, 'textactive');
    classie.remove(text4, 'textactive');
    classie.remove(text5, 'textactive');
    classie.remove(text6, 'textactive');
    classie.remove(text7, 'textactive');
    classie.remove(text1, 'textactive');
    classie.remove(text9, 'textactive');
}

number9.onclick = function() {
    
    
    classie.add(number9, 'numberactive');
    classie.remove(number2, 'numberactive');
    classie.remove(number3, 'numberactive');
    classie.remove(number4, 'numberactive');
    classie.remove(number5, 'numberactive');
    classie.remove(number6, 'numberactive');
    classie.remove(number7, 'numberactive');
    classie.remove(number8, 'numberactive');
    classie.remove(number1, 'numberactive');
    
    classie.add(img9, 'phoneactive');
    
    classie.add(text9, 'textactive');
    classie.remove(text2, 'textactive');
    classie.remove(text3, 'textactive');
    classie.remove(text4, 'textactive');
    classie.remove(text5, 'textactive');
    classie.remove(text6, 'textactive');
    classie.remove(text7, 'textactive');
    classie.remove(text8, 'textactive');
    classie.remove(text1, 'textactive');
}














