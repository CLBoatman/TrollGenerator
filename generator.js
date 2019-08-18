// This is the main code to generate the character name //

// List of consonants
var con = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
// List of vowels
var vow = ["a", "e", "i", "o", "u"];

// Generate a name based on format and desired length;
function generateName(format, length){
	ret = "";
	switch (format) {
		case "alternating":
			for (let i = 0; i < length; i++){
				let src = i % 2 == 0 ? con : vow;
				let ind = Math.floor(Math.random() * src.length);
				ret += src[ind];
			}
			break;
	
		default:
			for (let i = 0; i < length; i++){
				let src = i % 3 == 1 ? vow : con;
				let ind = Math.floor(Math.random() * src.length);
				ret += src[ind];
			}
			break;
	}
	return ret;
}

function generator(){
	//Generate random length for name between 4 and 7
	let len = 4 + Math.floor(Math.random() * Math.floor(4));

	// Clears any previous generated name
	if (document.getElementById("name")) {
	document.getElementById("placeholder1").removeChild(document.getElementById("name"));
	}

	if (document.getElementById("name")) {
	document.getElementById("placeholder2").removeChild(document.getElementById("name"));
	}

	// Shows name in format CVCCVC
	var element = document.createElement("div");
	element.setAttribute("id", "name");
	element.appendChild(document.createTextNode(generateName('alternating', len)));
	document.getElementById("placeholder1").appendChild(element);

	// Shows name in format CVCVCV
	var element = document.createElement("div");
	element.setAttribute("id", "name");
	element.appendChild(document.createTextNode(generateName('default', 6)));
	document.getElementById("placeholder2").appendChild(element);
}