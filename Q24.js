//Tests for equality and inequality with strings
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
car = 'audi';
console.log("Is car != 'subaru'? I predict False.")
console.log(car == 'subaru')

//Tests using the lower case function
car = 'Subaru';
console.log("Is car == 'Subaru'? I predict True.")
console.log(car == 'Subaru')
car = 'subaru';
console.log("Is car != 'Subaru'? I predict False.")
console.log(car == 'Subaru')

//Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
car=5
console.log("Is car == 5? I predict True.")
console.log(car == 5)
car=5
console.log("Is car != 5? I predict False.")
console.log(car != 5)
car=4
console.log("Is car >= 5? I predict False.")
console.log(car >= 5)
car=4
console.log("Is car <= 5? I predict True.")
console.log(car <= 5)
car=4
console.log("Is car > 5? I predict False.")
console.log(car > 5)
car=4
console.log("Is car < 5? I predict True.")
console.log(car < 5)

//Tests using "and" and "or" operators

let car1=5
let car2=12
console.log("Is car1 > 5 and car2>10? I predict True.")
console.log(car1>5 && car2>10)
console.log("Is car1 > 5 or car2>10? I predict True.")
console.log(car1>5 || car2>10)

//Test whether an item is in a array
let ch ='C'
let main_array=['A','B','C','D']
console.log("Is ch in array? I predict True.")
console.log(main_array.includes(ch))

//Test whether an item is not in a array
ch ='X'
console.log("Is ch not in array? I predict Fasle.")
console.log(main_array.includes(ch))


