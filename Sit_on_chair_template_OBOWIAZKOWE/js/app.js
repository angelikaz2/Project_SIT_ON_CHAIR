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
		console.log("dupa");
	}
}

// close layer when click-out
document.onclick = mclose;

//img_gallery_display_none
function image_show() {
  document.querySelector('.image_strip_background').style.display = 'block';
	document.querySelector('.image_green_strip').style.display = 'block';
}

function image_hide() {
  document.querySelector('.image_strip_background').style.display = 'none';
	document.querySelector('.image_green_strip').style.display = 'none';
}
