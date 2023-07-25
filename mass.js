var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

option_from = inputType.value;
option_to   = resultType.value;


function myResult(){




	option_from = inputType.value;
	option_to = resultType.value;



	if(option_from === "miligram" && option_to==="kilogram"){
		result.value = Number(input.value) * 0.000001;
	}else if(option_from === "miligram" && option_to==="gram"){

		result.value = Number(input.value) * 0.001;

	}else if(option_from === "miligram" && option_to==="miligram"){
		result.value = input.value
	}



	if(option_from === "gram" && option_to==="miligram"){
		result.value = Number(input.value) * 1000;
	}else if(option_from === "gram" && option_to==="kilogram"){
		result.value = Number(input.value) * 0.000001;
	}else if(option_from === "gram" && option_to==="gram"){
		result.value = input.value
	}

	if(option_from === "kilogram" && option_to==="gram"){
		result.value = Number(input.value) * 1000;
	}else if(option_from === "kilogram" && option_to==="miligram"){
		result.value = Number(input.value) * 1000000;
	}else if(option_from === "kilogram" && option_to==="kilogram"){
		result.value = input.value
	}
	





}
