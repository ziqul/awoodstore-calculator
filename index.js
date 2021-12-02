colorPrices = [
	200,
	300,
	400,
	500,
]

shelvesPrices = [
	200,
	300,
	400,
]

mountPrices = [
	200,
	300,
]

deliveryPrices = [
	200,
	300,
	400,
	500,
]

function recalculate() {
	let inputs = document.getElementById("main-form").elements;

	let width = parseInt(inputs["width"].value);
	let length = parseInt(inputs["leng"].value);
	let color = colorPrices[inputs["color"].value];
	let shelves = shelvesPrices[inputs["shelf"].value];
	let mount = mountPrices[inputs["mount"].value];
	let delivery = deliveryPrices[inputs["delivery"].value];

	let alderPrice = width + length + color + shelves + mount + delivery;
	let fraxinusPrice = width + length + color + shelves + mount + delivery + 200;

	document.getElementById("price1").textContent = alderPrice;
	document.getElementById("price2").textContent = fraxinusPrice;
}

function send() {
	let inputs = document.getElementById("main-form").elements;
}

recalculate();

var form = document.getElementById("main-form");
form.addEventListener("change", function() {
	recalculate();
});
