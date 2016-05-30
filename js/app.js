
//Dropdown menu
function menu_show(x){
	x.querySelector("#m1").style.display="block";
}
function menu_hide(x){
	x.style.display="none";
}

//Image gallery-display
function image_show(x) {
  x.querySelector('.image_strip_background').style.display = 'block';
	x.querySelector('.image_green_strip').style.display = 'block';
}

function image_hide(x) {
  x.querySelector('.image_strip_background').style.display = 'none';
	x.querySelector('.image_green_strip').style.display = 'none';
}

//Slider
document.addEventListener("DOMContentLoaded", function () {
	var next = document.querySelector('.top_button_gradient_right');
	var prev = document.querySelector('.top_button_gradient_left');
	var items = document.querySelectorAll(".slider > ul > li");
	var index = 0;

	items[index].classList.add("visible");

function ShowNextSlide(){
	items[index].classList.remove("visible");
  index++;

 if (index > items.length - 1) {
	index =0;
 	}
 	items[index].classList.add("visible");
	}

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

// Drop down form
function myFunction(element) {
		el=element.querySelector(".list_panel");
		if(el.style.display=="block")
		{
		el.style.display="none";
		}
		else{
		el.style.display="block";
	}
}

// Order
function sumUp()
{
	var elements=document.querySelectorAll(".value");
	var suma=0;

	for(i=0;i<elements.length;i++){
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
