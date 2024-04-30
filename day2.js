

// const firstnames=['Ajaya','Sauden']
// firstnames[2]='ram'
// console.log(firstnames)

//const days=['sunday','monday','tuesday']
// days[3]='Wednesday'
// console.log(days)
// days.push('wednesday')
// // console.log(days)
// days.pop()
// console.log(days)
// days.unshift('saturday')
// days.shift()     //methods = function inside class
//console.log(days.length)    //properties= variable inside class
// console.log(days.length)


// slice
// splice
// split

//const numbers=[1,2,3,4,5]

//slice---->used to create a copy of a portion of the array .
//It deoesn't modify the original array

//slice(start,end)---> where start index is inclusive and endindex is exclusive
// const newslicedarray=numbers.slice(1,4)
// console.log(numbers)
// console.log(newslicedarray)

//splice-->used to add or remove elements from an array by removing or replacing existing array and/or new features
//splice(start,delete,item)

// let splicednumbers=numbers.splice(2,1,10,11)
// console.log(splicednumbers)
// console.log(numbers)



//split---->used to split the string into array
// let text="I love java script"
// const newarray=text.split(" ")
// console.log(newarray)



// const person={
//   firstname:"ajaya",
//   address:"jhapa"
// }
// Object.freeze(person)

// person.firstname="haha"
// console.log(person)

// console.log(Object.keys(person))
// console.log(Object.values(person))



//conditions in Javascript

//const israining=true
// if (israining){
//   console.log("take umbrella")
// }else{
//   console.log("dont carry umberlla")
// }

//ternary operator

//const result=israining? "Carry umbrella":"Dont carry umbrella"

//short circuit evaluation
//const result=israining && "carry umbrella"||"dont carry"

// let isLoggedIn=false
// const firstname=isLoggedIn && "Authenticated"||"Not authorized"
// console.log(firstname)




// const temperature=30
// if (temperature > 30 ){
//  console.log("It is hotter")
// }else if(temperature>25 || temperature<=30){
//   console.log("It is pleasant")
// }else{
//   console.log("Its coldoutside")
// }



// nullish coelescing operator
//let age=null 
// if (age==null || age==undefined){
//   age="no age"
// }
// console.log(age)
// let result=age??"NO age"
// console.log(result)

















