/**
 * justOneString()
 * ------------------------------------------------------
 * Using logical operators, write a function called `justOneString()`
 * that accepts two arguments and will return true if either input is a string,
 * but returns false if both arguments or neither are strings
 *
 **/

function justOneString(p1, p2) {
	if (typeof p1 === "string" && typeof p2 !== "string") {
		return true;
	} else if (typeof p2 === "string" && typeof p1 !== "string") {
		return true;
    } else {
    	return false;
    }
}
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert(justOneString('a', 5) === true)
console.assert(justOneString(6, 'dotron') === true)
console.assert(justOneString('peanut', 'butter') === false)
console.assert(justOneString(8, true) === false)
