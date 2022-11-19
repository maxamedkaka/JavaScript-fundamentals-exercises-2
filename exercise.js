// Good Luck! You got this 💪🏾
// Write your code here.

//1. Write a function called 'describeCountry' which takes three parameters: `country`,`population` and `capitalCity`. Based on this input, the function returns a string with this format:_'Somaliland has 3.5 million people and its captial city is Hargeisa'_

function describeCountry (country, population,capitalCity){
console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`)
}
describeCountry("Somaliland", 3.5, "Hargeisa")

//2. Call the function 3 times with input data for 3 different countries. store the return values in 3 different variables and log them to the console.

describeCountry("Ethiopia",100,"Addis-Ababa")
describeCountry("Russia",900,"Moscow")
describeCountry("UK",300,"London")


//3. The world population is 7900 million people. Create a function called `percentageOfWorld1` which recieves a `population` value and reutnrs the percentage of the world population that the given population represents. For example, _China has 1441 million people, so it's about 18.2% of the world population_
  // > **NOTE:** To calculate the percentage, divide the given `population` value by 7900 and then multiply by 100

function percentageOfWorld1 (population){
    console.log(`Somaliland has ${population}, so its about ${population/7900000000 * 100} of the world population`)
}
percentageOfWorld1(5000000)

  //4. Call `percentageOfWorld1` for 3 populations of countries of your choice, store the results into variables, and log them to the console

  function percentageOfWorld1 (population){
    console.log(`Nigeria has ${population}, so its about ${population/7900000000 * 100} of the world population`)
}
percentageOfWorld1(100000000)
function percentageOfWorld1 (population){
    console.log(`Japan has ${population}, so its about ${population/7900000000 * 100} of the world population`)
}
percentageOfWorld1(78000000)
function percentageOfWorld1 (population){
    console.log(`Sweden has ${population}, so its about ${population/7900000000 * 100} of the world population`)
}
percentageOfWorld1(23000000)


//## Introduction to arrays

//5. Create an array containing 4 population values of 4 countries of your choice and store it in a varaible called `population`

let population = [7,5,3,1]

//6. Create an array containing all the neighbouring countries of a country of your choice. Store the array into a varaible called `neighbours`

let neighbours = ["Somalia", "Ethiopia", "Djibouti", "Kenya"]

//7. Log to the console whether the array has 4 elements or not (true or false)

console.log(population.length)
console.log(neighbours.length)

//## Iteration: for loops

//8. Console log one by one the countries inside the `neighbours` array.

for (let i = 0; i< neighbours.length; i++){
    console.log(neighbours[i])
}

//9. Console log one by one the countries inside the `neighbours` array but this time in a reverse order.

for (let i = 3; i >=0; i--){
    console.log(neighbours[i])
}


//## Iteration: while loop

//10. Do exercise 8 & 9 using while loop

let m =0
while(m<= 3){
    console.log(neighbours[m])
    m++
}

let n =3
while(n>=0){
    console.log(neighbours[n])
    n--
}

