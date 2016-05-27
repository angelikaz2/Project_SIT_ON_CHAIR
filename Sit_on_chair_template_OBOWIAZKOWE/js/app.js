
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


// drop down form
// * When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
function myFunction(element) {
    //element.getElementsByClassName("list_panel").classList.toggle("show");
		el=element.querySelector(".list_panel");
		if(el.style.display=="block")
		{
		el.style.display="none";
		}
		else{
		el.style.display="block";
	}
}


function sumUp()
{
var elements=document.querySelectorAll(".value");
var suma=0;

for(i=0;i<elements.length;i++){
	console.log(elements[i]);
	attvalue=elements[i].getAttribute("price");
	if(attvalue===null){
		attvalue=0;
	}
	suma=suma+parseInt(attvalue);
}
return suma;
}

function addToCart(element)
{
var category=element.getAttribute("category");
var price=element.getAttribute("price");
var element_text=element.innerHTML;
if(category=="model"){
text_slot=document.querySelector(".title");
price_slot=document.querySelector(".title.value");
	text_slot.innerHTML=element_text;
	price_slot.innerHTML=price;
	price_slot.setAttribute("price",price);
}
if(category=="color"){
text_slot=document.querySelector(".color");
price_slot=document.querySelector(".color.value");
	text_slot.innerHTML=element_text;
	price_slot.innerHTML=price;
	price_slot.setAttribute("price",price);
}
if(category=="pattern"){
text_slot=document.querySelector(".pattern");
price_slot=document.querySelector(".pattern.value");
	text_slot.innerHTML=element_text;
	price_slot.innerHTML=price;
	price_slot.setAttribute("price",price);
}
if(category=="transport"){
	text_slot=document.querySelector(".transport");
	price_slot=document.querySelector(".transport.value");
	if(element.checked){
		text_slot.innerHTML="Transport";
		price_slot.innerHTML=price;
		price_slot.setAttribute("price",price);
	}
	else{
		text_slot.innerHTML="bez transportu";
		price_slot.innerHTML=0;
		price_slot.setAttribute("price",0);
	}

}

suma=sumUp();
document.querySelector(".sum").innerHTML=suma;

}
