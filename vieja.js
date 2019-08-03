function convertirV() {
	num = document.getElementById("dato").value;
	console.log("DATO: " + num);

	var seleo = document.getElementById("baseo");
	var itemo = seleo.options[seleo.selectedIndex].value;
	console.log("ORIGEN: " + itemo);

	var seled = document.getElementById("based");
	var itemd = seled.options[seled.selectedIndex].value;
	console.log("DESTINO: " + itemd);

	result = 0;
	numeros = "0123456789ABCDEF";

	// Convertimos cualquier base a base-10
	if ( itemo != 10 ) {
		base = itemo;
		for(i=0; i<num.length; i++) {
			car = num.charAt(num.length - i - 1);
			r = car * Math.pow(base, i) ;
			result = result + r;
			console.log("CARACTER: " + car);
		}
	} else {
		result = num;
	}

	// Convertimos dew Base-10 a la base solicitada
	if ( itemd != 10 ) {
		base = itemd;
		salida = "";
		while ( result != 0 ) {
			resto = result % base;
			result = Math.trunc(result / base);
			salida = numeros.charAt(resto) + salida;
		}
	} else {
		salida = result;
	}



	console.log("RESULTADO = " + salida);

	document.getElementById("resultado").innerHTML = salida;

}