function recalculate() {
	let inputs = document.getElementById("main-form").elements;

	let width = parseInt(inputs["width"].value);
	let length = parseInt(inputs["leng"].value);
	let color = colorPrices[inputs["color"].value];
	let shelves = shelvesPrices[inputs["shelf"].value];
	let mount = mountPrices[inputs["mount"].value];
	let delivery = deliveryPrices[inputs["delivery"].value];

	let calculatedPrices = formula(width, length, color, shelves, mount, delivery);

	document.getElementById("price1").textContent = calculatedPrices.alderPrice;
	document.getElementById("price2").textContent = calculatedPrices.fraxinusPrice;
}

function send() {
	let mainInputs = document.getElementById("main-form").elements;
	let contactInputs = document.getElementById("contact-form").elements;

	let width = mainInputs["width"].value;
	let length = mainInputs["leng"].value;
	let color = mainInputs["color"].value;
	let shelves = mainInputs["shelf"].value;
	let mount = mainInputs["mount"].value;
	let delivery = mainInputs["delivery"].value;
	let telephone = contactInputs["telephone"].value;
	let address = contactInputs["address"].value;

	let payload = JSON.stringify({width, length, color, shelves, mount, delivery, telephone, address});

	fetch("https://awoodstore-mail-server-prod.herokuapp.com/", {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: payload
	}).then(res => {
		console.log("Request complete! response: ", res);
	});
}

recalculate();

var form = document.getElementById("main-form");
form.addEventListener("change", function() {
	recalculate();
});
