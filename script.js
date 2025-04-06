// Script.jss

const imageInput =
	document.getElementById(
		"imageInput"
	);
const previewImage =
	document.getElementById(
		"previewImage"
	);
const brightnessRange =
	document.getElementById(
		"brightness"
	);
const saturationRange =
	document.getElementById(
		"saturation"
	);
const InversionRange =
	document.getElementById(
		"Inversion"
	);
const OpacityRange =
	document.getElementById("Opacity");
const contrastRange =
	document.getElementById("contrast");
const grayscaleRange =
	document.getElementById(
		"grayscale"
	);
const blurRange =
	document.getElementById("blur");
const sepiaRange =
	document.getElementById("sepia");
const hueRange =
	document.getElementById("hue");
const resetButton =
	document.getElementById("reset");
const saveButton =
	document.getElementById("save");


	function hideShow(){
		var div=document.querySelector('.nav1');
	var display=0;
		if(display==0){
			div.style.display='block';
			display=1;
		}else{
			div.style.display='none';
			display=0;
		}
	}

let currentImage = null;

imageInput.addEventListener(
	"change",
	(e) => {
		const file = e.target.files[0];
		if (file) {
			const reader =
				new FileReader();
			reader.onload = (event) => {
				currentImage =
					new Image();
				currentImage.src =
					event.target.result;
				currentImage.onload =
					() => {
						previewImage.src =
							currentImage.src;
						resetFilters();
					};};
			reader.readAsDataURL(file);
		}
	});

brightnessRange.addEventListener(
	"input",
	() => {
		applyFilters();
	});
saturationRange.addEventListener(
	"input",
	() => {
		applyFilters();
	});
InversionRange.addEventListener(
	"input",
	() => {
		applyFilters();
	});
OpacityRange.addEventListener(
	"input",
	() => {
		applyFilters();
	});

contrastRange.addEventListener(
	"input",
	() => {
		applyFilters();
	});

grayscaleRange.addEventListener(
	"input",
	() => {
		applyFilters();
	});

blurRange.addEventListener(
	"input",
	() => {
		applyFilters();
	});

sepiaRange.addEventListener(
	"input",
	() => {
		applyFilters();
	});

hueRange.addEventListener(
	"input",
	() => {
		applyFilters();
	});

resetButton.addEventListener(
	"click",
	() => {
		resetFilters();
	});

saveButton.addEventListener(
	"click",
	() => {
		saveEditedImage();
	});
	let rotate=0,flipHorizontal=1,flipVertical=1;

function applyFilters() {
	if (currentImage) {
		const brightnessValue =
			brightnessRange.value;
		const saturationValue =
			saturationRange.value;
		const InversionValue =
			InversionRange.value;
		const OpacityValue =
			OpacityRange.value;
		const contrastValue =
			contrastRange.value;
		const grayscaleValue =
			grayscaleRange.value;
		const blurValue =
			blurRange.value;
		const sepiaValue =
			sepiaRange.value;
		const hueValue = hueRange.value;

		const filterValue = `brightness(${brightnessValue}%)
		                    invert(${InversionValue}%)
							saturate(${saturationValue}%)
							opacity(${OpacityValue}%)
							contrast(${contrastValue}%) 
							grayscale(${grayscaleValue}%) 
							blur(${blurValue}px) 
							sepia(${sepiaValue}%) 
							hue-rotate(${hueValue}deg)`;
		previewImage.style.transform=`rotate(${rotate}deg) scale(${flipHorizontal} , ${flipVertical})`;
		previewImage.style.filter =
			filterValue;
		
	}}

function resetFilters() {
	if (currentImage) {
		brightnessRange.value = 100;
		contrastRange.value = 100;
		saturationRange.value = 100;
		InversionRange.value=0;
		OpacityRange.value=100;
		grayscaleRange.value = 0;
		blurRange.value = 0;
		sepiaRange.value = 0;
		hueRange.value = 0;
		rotate=0;
		flipHorizontal=1;
		flipVertical=1;
		previewImage.style.transform="none";
		previewImage.style.filter =
			"none";
	}}

function saveEditedImage() {
	if (currentImage) {
		const canvas =
			document.createElement(
				"canvas"
			);
		canvas.width =
			currentImage.width;
		canvas.height =
			currentImage.height;
		const context =
			canvas.getContext("2d");
		context.filter =
			previewImage.style.filter;
		context.drawImage(
			currentImage,
			0,
			0,
			canvas.width,
			canvas.height
		);

		const link =
			document.createElement("a");
		link.href = canvas.toDataURL(
			"image/jpeg"
		);
		link.download =
			"edited_image.jpg";
		link.click();
	}}
	var div=document.querySelector('.light');
	var div1=document.querySelector('.saturation');
	var div2=document.querySelector('.opacity');
	var div3=document.querySelector('.sepia');
	var div4=document.querySelector('.hue');
	var div5=document.querySelector('.crop');
	var div6=document.querySelectorAll('.crop button');
	function show(){
	var display=0;
		if(display==0){
			div.style.display='block';
			div1.style.display='none';
			div2.style.display='none';
			div3.style.display='none';
			div4.style.display='none';
			div5.style.display='none';
			display=1;
		}else{
			div.style.display='none';
			display=0;
		}
	}
	function visible(){
	var display=0;
		if(display==0){
			div1.style.display='block';
			div.style.display='none';
			div2.style.display='none';
			div3.style.display='none';
			div4.style.display='none';
			div5.style.display='none';
			display=1;
		}else{
			div1.style.display='none';
			display=0;
		}
	}
	function design(){
	var display=0;
		if(display==0){
			div2.style.display='block';
			div1.style.display='none';
			div.style.display='none';
			div3.style.display='none';
			div4.style.display='none';
			div5.style.display='none';
			display=1;
		}else{
			div2.style.display='none';
			display=0;
		}
	}
	function showed(){
	var display=0;
		if(display==0){
			div3.style.display='block';
			div1.style.display='none';
			div2.style.display='none';
			div.style.display='none';
			div4.style.display='none';
			div5.style.display='none';
			display=1;
		}else{
			div3.style.display='none';
			display=0;
		}
	}
	function kk(){
	 var display=0;
		if(display==0){
			div4.style.display='block';
			div1.style.display='none';
			div2.style.display='none';
			div3.style.display='none';
			div.style.display='none';
			div5.style.display='none';
			display=1;
		}else{
			div4.style.display='none';
			display=0;
		}
	}
	function cut(){
		var display=0;
			if(display==0){
				div5.style.display='block';
				div.style.display='none';
				div1.style.display='none';
				div2.style.display='none';
				div3.style.display='none';
				div4.style.display='none';
				display=1;
			}else{
				div5.style.display='none';
				display=0;
			}
		}

		div6.forEach(options =>{
			options.addEventListener("click",() =>{
				if(options.id==="left"){
					rotate -=90;
				}else if(options.id==="right"){
					rotate +=90;
				}else if (options.id==="flipr") {
					flipHorizontal = flipHorizontal === 1 ? -1:1;
				}else if (options.id==="flipl") {
					flipVertical = flipVertical === 1 ? -1:1;
				}else{
					var image = document.getElementById('previewImage');
					var myCropper = new Cropper(image,{
						aspectRatio:0,
						viewMode:0,
						initialAspectRatio: NaN,
						
					});
						

			}
				applyFilters();
			});
			resetFilters();
		});
