
var picWidth = 390,
currentSlide = 0,
divScrl, liBtns, picsLen, go2slide, nextSlide, prvSlide;
var mywindow=new Array("window-home","window-about","window-galery","window-contact","window-boyebad","window-darman","window-pusidegy","window-mesvak","window-map");

window.onload=function(){
	
	document.getElementById('header').style.opacity='0.2';
	
	document.getElementById('bg-footer').style.opacity='0.2';
	
	divScrl = document.getElementsByClassName('banner').item(0).getElementsByClassName('scroll').item(0);
	
	liBtns = document.getElementsByClassName('banner').item(0).getElementsByClassName('btn').item(0).getElementsByTagName('li');
	
	picsLen = liBtns.length;

	go2slide = function (n){
		if(n>=picsLen) n=0;
		if(n<0) n=picsLen-1;
		
		divScrl.style.left = -n*picWidth + 'px';
		currentSlide=n;
	};
	
	nextSlide = function (){
		go2slide(currentSlide+1)
	};
	prvSlide = function (){
		go2slide(currentSlide-1)
	};

	for(var i=0;i<picsLen;i++){
		(function(j){
			liBtns.item(j).onclick=function(){
				go2slide(j);
			}
		})(i);
	}
	
	setInterval(nextSlide,3000);
	
}


function display(y)
{	
	switch(y)
	{
		case 1: 
			x='window-home';
			break;
		case 2:
			x='window-about';
			break;
		case 3:
			x='window-galery';
			break;
		case 4:
			x='window-contact';
			break;
		case 5:
			x='window-boyebad';
			break;
		case 6:
			x='window-darman';
			break;
		case 7:
			x='window-pusidegy';
			break;
		case 8:
			x='window-mesvak';
			break;
		case 9:
			x='window-map';
			break;
	}

	resetWindow(x);	
}

function resetWindow(x)
{
	/* FOR HOME PAGE */
	document.getElementById('homepage').style.opacity='0';
	document.getElementById('header').style.opacity='1';
	document.getElementById('bg-footer').style.opacity='1';
	document.getElementById('homepage').style.zIndex='-1';
	
	for(i=0;i<9;i++)
	{
		document.getElementById(mywindow[i]).style.opacity='0';	
		document.getElementById(mywindow[i]).style.visibility='hidden';/*for IE*/
		document.getElementById(mywindow[i]).style.height='0px';
	}

	displayResult(x);
		
}

function displayResult(x)
{
	document.getElementById(x).style.opacity='1';
	document.getElementById(x).style.height='420px';
	document.getElementById(x).style.visibility='visible';/*for IE*/
	document.getElementById('header').style.opacity='0.2';
	document.getElementById('bg-footer').style.opacity='0.2';
}

function winclose(x)
{
	document.getElementById(x).style.height='0px';
	document.getElementById(x).style.opacity='0';
	document.getElementById(x).style.visibility='hidden';/*for IE*/
	document.getElementById('header').style.opacity='1';
	document.getElementById('bg-footer').style.opacity='1';

}

function displayImage(z)
{
	document.getElementById('img1').style.opacity='0';
	document.getElementById('img2').style.opacity='0'; 
	document.getElementById('img3').style.opacity='0'; 
	document.getElementById('img4').style.opacity='0'; 
	document.getElementById(z).style.opacity='1';
}
