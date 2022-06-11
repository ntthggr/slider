let indexValue = 1;
shwowImg(indexValue);
function btm_slide(e) {
	shwowImg((indexValue = e));
}
function side_slide(e) {
	shwowImg((indexValue += e));
}
function shwowImg(e) {
	let i;
	const img = document.querySelectorAll('img');
	const sliders = document.querySelectorAll('.btm-sliders span');
	if (e > img.length) {
		indexValue = 1;
	}
	if (e < 1) {
		indexValue = img.length;
	}
	for (i = 0; i < img.length; i++) {
		img[i].style.display = 'none';
	}
	for (i = 0; i < sliders.length; i++) {
		sliders[i].style.background = 'rgba(255, 255, 255, 0.1)';
	}
	img[indexValue - 1].style.display = 'block';
	sliders[indexValue - 1].style.background = 'white';
}
