/**
 * getMinimum()
 * ------------------------------------------------------
 * Write a function called `getMinimum()` that takes 4 numbers as arguments
 * and returns the one with the lowest value.
 *
 **/


function getMinimum(m1, m2, m3, m4) {
	if (m1 < m2 && m1 < m3 && m1 < m4) {
		return m1;
	} else if (m2 < m3 && m2 < m4) {
		return m2;
	} else if (m3 < m4) {
		return m3;
	} else {
		return m4;
	}
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*



console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(4,8,4,20) === 4 )
console.assert( getMinimum(1000,-2,-99,50) === -99 )
console.assert( getMinimum(-1000,-2,-99,50) === -1000 )
console.assert( getMinimum(400,-11,4,-5) === -11 )
