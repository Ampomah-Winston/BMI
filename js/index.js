function isNumber(){
	let val_wei = document.getElementById("weight").value;
	let val_hei = document.getElementById("height").value;
	let xx = document.getElementById("resultCheck");

	let val = BMI(val_wei,val_hei);
	
	document.getElementById("result").innerText = val;
	xx.innerText = BMI_Actuator(Number(val));
}

let BMI = (w,h) =>{
	bmi = w / Math.pow(h,2)
	bmi = Math.round(bmi)
	if(bmi === "NaN"){
		bmi = 0;
	}
	return bmi
}

let BMI_Actuator = (a) =>{	
	const min = 18.5;
	const max = 24.9;
	if(a <= 18.5){
		return "Underweight"
	}else if(a >= 18.5 && a <= 24.9){
		return "Normal"
	}else if(a >= 24.9){
		return "Overweight"
	}else{
		return "wait..."
	}
}