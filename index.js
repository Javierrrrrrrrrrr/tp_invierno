function convertir() {
	num = document.getElementById("dato").value;
	console.log("DATO: " + num);

	var seleo = document.getElementById("baseo");
	var itemo = seleo.options[seleo.selectedIndex].value;
	console.log("ORIGEN: " + itemo);

	var seled = document.getElementById("based");
	var itemd = seled.options[seled.selectedIndex].value;
	console.log("DESTINO: " + itemd);

	result = parseInt(num, itemo).toString(itemd);
	console.log("RESULTADO = " + result);

	document.getElementById("resultado").innerHTML = result;

}
