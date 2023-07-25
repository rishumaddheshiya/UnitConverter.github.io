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




	if(option_from === "KB" && option_to==="MB"){
		
		result.value = Number(input.value) * 0.0009765625;
	}else if(option_from === "KB" && option_to==="GB"){

		
		result.value = Number(input.value) * 0.000000953674316;

	}else if(option_from === "KB" && option_to==="KB"){
		
		result.value = input.value
	}



	if(option_from === "MB" && option_to==="KB"){
		
		result.value = Number(input.value) * 1024;
	}else if(option_from === "MB" && option_to==="GB"){
		
		result.value = Number(input.value) * 0.0009765625;
	}else if(option_from === "MB" && option_to==="MB"){
		
		result.value = input.value
	}

	if(option_from === "GB" && option_to==="MB"){
 
		result.value = Number(input.value) * 1024;
	}else if(option_from === "GB" && option_to==="KB"){
		
		result.value = Number(input.value) * 1048576;
	}else if(option_from === "GB" && option_to==="GB"){
		 
		result.value = input.value
	}
	





}
