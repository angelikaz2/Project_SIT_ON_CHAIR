
var timeout	= 500;
var closetimer	= 0;
var ddmenuitem	= 0;
// open hidden layer
function mopen(id)
{
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);

}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose;

//img_gallery_display_none
function image_show(x) {
  x.querySelector('.image_strip_background').style.display = 'block';
	x.querySelector('.image_green_strip').style.display = 'block';
}

function image_hide(x) {
  x.querySelector('.image_strip_background').style.display = 'none';
	x.querySelector('.image_green_strip').style.display = 'none';
}


document.addEventListener("DOMContentLoaded", function () {
//***SLIDER***
var next = document.querySelector('.top_button_gradient_right');
//przycisk prev
var prev = document.querySelector('.top_button_gradient_left');
//elementy listy z obrazkami
var items = document.querySelectorAll(".slider > ul > li");
//aktualnie wyswietlany obrazel
var index = 0;

function ShowNextSlide(){
	items[index].classList.remove("visible");
  index++;

 if (index > items.length - 1) {
	index =0;
 }
 items[index].classList.add("visible");
}

//pokazujemy aktualny obrazek
items[index].classList.add("visible");

//event dla guzika prevP
prev.addEventListener("click", function(event) {
 items[index].classList.remove("visible");
 index--;

 if (index < 0) {
   index = 0;
 }

 items[index].classList.add("visible");

 });

next.addEventListener("click", function(event) {
ShowNextSlide();

});
setInterval(ShowNextSlide, 5000);
});
