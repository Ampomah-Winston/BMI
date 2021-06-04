let x = [1,2,3,4,5]
let y = [6,7,8,9,1]
let out = x;

let arre = (arr1,arr2) => {
	for(x2 of arr2){
			if(!arr1.includes(x2)){
				out.push(x2)
			}
		}
		return out;
}