let x = 7, y = 8, z = 6
let result

//AND: BOTH SHOULD BE TRUE THEN THE RESULT IS TRUE - &&
result = x < y && x < z 
console.log(result)

//OR: ATLEAST ONE IS TRUE THEN THE RESULT IS TRUE - ||
result = x < y || x < z
console.log(result)

//NOT: CONVERTS FALSE INTO TRUE OR TRUE INTO FALSE (REVERSE THE VALUE) - !
let n =  !result
console.log(n)