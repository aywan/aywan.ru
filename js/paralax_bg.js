'use strict';
window.onload = function() {
	console.log("Loaded");
	
	var f = function(k,d,o) {
        return o+d*k;
    };
		
	var bg = document.getElementById("background");
	var bg1 = document.getElementById("bg1");
	var bg2 = document.getElementById("bg2");
	var bg3 = document.getElementById("bg3");
	
	var sW = bg.offsetWidth/2;
	var sH = bg.offsetHeight/2;
		
	window.onresize = function() {
		sW = bg.offsetWidth / 2;
		sH = bg.offsetHeight / 2
	};
			

    window.onmousemove = function(e) {
        let dX = (sW - e.x) / sW;
        let dY = (sH - e.y) / sH;
		
		bg1.style.transform="translate("+f(6,dX,0)+"px,"+f(6,dY,0)+"px)";
		bg2.style.transform="translate("+f(12,dX,0)+"px,"+f(12,dY,0)+"px)";
		bg3.style.transform="translate(0px,"+f(18,Math.max(dY,1),0)+"px)";
    };


};
