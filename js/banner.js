
var picWidth = 390,
currentSlide = 0,
divScrl, liBtns, picsLen, go2slide, nextSlide, prvSlide;

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
	if (y==1)
		x='window-home';
	else if(y==2)
		x='window-about';
	else if(y==3)
		x='window-galery';
	else if(y==4)
		x='window-contact';
	else if(y==5)
		x='window-boyebad';
	else if(y==6)
		x='window-darman';
	else if(y==7)
		x='window-pusidegy';
	else if(y==8)
		x='window-mesvak';
		
	resetWindow(x);	
}

function resetWindow(x)
{
	/* FOR HOME PAGE */
	document.getElementById('homepage').style.opacity='0';
	document.getElementById('header').style.opacity='1';
	document.getElementById('bg-footer').style.opacity='1';
	document.getElementById('homepage').style.zIndex='-1';
	
	document.getElementById('window-home').style.opacity='0';
	document.getElementById('window-about').style.opacity='0';
	document.getElementById('window-galery').style.opacity='0';
	document.getElementById('window-contact').style.opacity='0';
	document.getElementById('window-boyebad').style.opacity='0';
	document.getElementById('window-darman').style.opacity='0';
	document.getElementById('window-pusidegy').style.opacity='0';
	document.getElementById('window-mesvak').style.opacity='0';
	/* FOR IF */
/*	filter:alpha(opacity=80);*/
	document.getElementById('window-home').style.visibility='hidden';
	document.getElementById('window-about').style.visibility='hidden';
	document.getElementById('window-galery').style.visibility='hidden';
	document.getElementById('window-contact').style.visibility='hidden';
	document.getElementById('window-boyebad').style.visibility='hidden';
	document.getElementById('window-darman').style.visibility='hidden';
	document.getElementById('window-pusidegy').style.visibility='hidden';
	document.getElementById('window-mesvak').style.visibility='hidden';
	/**/
	document.getElementById('window-home').style.height='0px';
	document.getElementById('window-about').style.height='0px';
	document.getElementById('window-galery').style.height='0px';
	document.getElementById('window-contact').style.height='0px';
	document.getElementById('window-boyebad').style.height='0px';
	document.getElementById('window-darman').style.height='0px';
	document.getElementById('window-pusidegy').style.height='0px';
	document.getElementById('window-mesvak').style.height='0px';

/*	document.getElementById('window-home').style.marginTop='0px';
	document.getElementById('window-about').style.marginTop='0px';
	document.getElementById('window-galery').style.marginTop='0px';
	document.getElementById('window-contact').style.marginTop='0px';
	document.getElementById('window-boyebad').style.marginTop='0px';
	document.getElementById('window-darman').style.marginTop='0px';
	document.getElementById('window-pusidegy').style.marginTop='0px';
	document.getElementById('window-mesvak').style.marginTop='0px';*/
	
	displayResult(x);
		
}

function displayResult(x)
{
	document.getElementById(x).style.opacity='1';
	document.getElementById(x).style.height='420px';
/*	document.getElementById(x).style.marginTop='10px';*/
	document.getElementById(x).style.visibility='visible';/*for IE*/
	document.getElementById('header').style.opacity='0.2';
	document.getElementById('bg-footer').style.opacity='0.2';
}

function winclose(x)
{
	document.getElementById(x).style.height='0px';
/*	document.getElementById(x).style.marginTop='0px';*/
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
