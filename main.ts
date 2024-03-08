let car: string ='subaru';
//Test 1: Equality comparison (True)
console.log("Is car == `subaru` ? I predict True.");
console.log(car == `subaru`); //True


//Test 2:  Strict Equality comparison (True)
console.log("Is car === `subaru` ? I predict True.");
console.log(car === `subaru`);//True



//Test 3:  Strict Inequality comparison (false)
console.log("Is car !=`subaru` ? I predict false.");
console.log(car != `subaru`);//false




//Test 4:  Strict inequality comparison (false)
console.log("Is car !==`subaru` ? I predict false.");
console.log(car !== `subaru`);//false


//Test 5:  less than comparison (false)
console.log("Is car < `subaru` ? I predict false.");
console.log(car < `subaru`);//false (lexicographic comparison)


//Test 6:  Greater  than comparison (false)
console.log("Is car > `subaru` ? I predict false.");
console.log(car > `subaru`);//false (lexicographic comparison)



//Test 7: Less than or equal comparison (True)
console.log("Is car <= `subaru` ? I predict True.");
console.log(car <= `subaru`);//True


//Test 8: Greater than or equal comparison (True)
console.log("Is car >= `subaru` ? I predict True.");
console.log(car >= `subaru`);//True


//Test 9: Checking truthiness (True)
console.log("Is car ? `subaru` ? I predict True.");
console.log(car); //True (non-empty string is truthy )


//Test 10: Checking falsiness (false)
console.log("Is !car ? `subaru` ? I predict True.");
console.log(!car); //false (negation of a truthy value )









































