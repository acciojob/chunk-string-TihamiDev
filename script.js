function stringChop(str, size) {
	if(str == null){
	    return [];
	}
  // your code here
	let result = [];
	for (let i = 0; i < str.length; i+=size) {
		// let chunk = i+size;
		
		let chunked = str.slice(i,i+size);
		result.push(chunked);
	}
	return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
