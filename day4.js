//Higher order function
//filter
//forEach
//map
//Reduce
//function jun cha next function ma as a argument janxa

// function hello(firstname,callback){
//   console.log(firstname)
//   callback()
// }

// function goodbye(){
//   console.log("Goodbye")
// }
// hello("Ajaya",goodbye)

//higher order function is a function that accepts one or more function(callback)

// const fruits=['apple','banana','cherry']

// fruits.forEach(function(fruit){
//   console.log(fruit)

// })

// const numbers=[1,2,3,4,5]
// const squarednumbers=[]
// numbers.forEach(function(number){
//   //console.log(number**2)
//   squarednumbers.push(number**2)

// })
// console.log(squarednumbers)

//for each best for loop only not to modify //no return

//map
// const numbers=[1,2,3,4,5]
// const squarednumbers=[]
// numbers.forEach(function(number){
//   //console.log(number**2)
//   squarednumbers.push(number**2)

// })
// console.log(squarednumbers)

// const squarenumbers=numbers.map(function(number){
//  return number**2
// })
// console.log(squarenumbers)

// const users=[
//   {
//     id : 1,
//     firstname : "Ajaya",
//     lastname:"sauden",
//     address:"Jhapa"
//   },
//   {
//     id:2,
//     firstname:"Ram",
//     lastname:"Limbu",
//     address:"Kathmandu"
//   },
//   {
//     id:3,
//     firstname:"Krishna",
//     lastname:"Rawol",
//     address:"Pyuthan"
//   }
// ]
// // users.forEach((user)=>{
// //   console.log(user.firstname+user.lastname)}
// // )


// const result=users.map((user)=>{
//   return {
//     ...user,
//     fullname:user.firstname+" "+user.lastname
//   }
// })
// console.log(result)

// const numbers2=[1,2,3,4]
// names=["A","B","C","D"]

// var numbers=numbers2.map((number,index)=>{
//   return{
//     id:number,
//     name:names[index]
//   }
// }
// )
// console.log(numbers)

// const numbers=[1,2,3,4,5,6]
// const output=numbers.filter((test)=>
// {
//   return test%2==0
// })
// console.log(output)

// const books=[
//   {
//   title:"Mahabir Pun",
//   Author:"Mahabir Pun",
//   year:2023
//   },
//   {
//     title:"Think llike a monk",
//     Author:"Jay Shety",
//     year:2020
//   },
//   {
//     title:"Book3",
//     Author:"author3",
//     year:2020
//   },
//   {
//     title:"Book4",
//     Author:"author4",
//     year:2022
//   },
//   {
//     title:"Book5",
//     Author:"author5",
//     year:2001
//   },
//   {
//     title:"Book6",
//     Author:"author6",
//     year:1998
//   },
//   {
//     title:"Book7",
//     Author:"author7",
//     year:2001
//   },
//   {
//     title:"Book8",
//     Author:"author8",
//     year:1998
//   }

// ]
// const data=books.filter((book)=>
// {
//   return book.year>2000
// })
// console.log(data)

// const author=books.filter((writer)=>
// {
//   return writer.Author=="Mahabir Pun"
// })
// console.log(author)


// const files=["apple.js","script.js","cat.css","index.html","song.mp3"]

// const out=files.filter((file)=>
// {
//   return file.endsWith(".js")
// })
// console.log(out)

// const data=[null,undefined,1,2,3,"apple"]
// const filtered=data.filter((item)=>
// {
//   return item!=null && item!== undefined
// })
// console.log(filtered)


//reduce 
// const numbers=[1,2,3,4,5]
// const output=numbers.reduce(function(accumulator,currentproduct)
// {
//   return accumulator+ currentproduct
// },0)
// console.log(output)


// const cartitems=[
//   {
//     name:"shampoo",
//     quantity:20,
//     price:100
//   },
//     {
//     name:"butter",
//     quantity:2,
//     price:1001
//     },
//     {
//     name:"biscuit",
//     quantity:1,
//     price:10
//     },
//     {
//     name:"gas",
//     quantity:2,
//     price:4000
//     },
//     {
//     name:"paper",
//     quantity:20,
//     price:100
//   }
// ]

//total quantity total amount of product

// const total=cartitems.reduce(function(accumulator,currentproduct)
// {
//  accumulator.totalprice+=(currentproduct.quantity*currentproduct.price)
//  accumulator.totalquantity+=currentproduct.quantity
//  return accumulator
// },{totalprice:0, totalquantity:0}
// )
// console.log(total)

const people=[
  {
    name:"Ajaya",age:22
  },
  {
    name:"Bijay",age:24
  },
  {
    name:"Ram",age:215
  },
  {
    name:"Aj",age:22
  }
]

const same=people.reduce(function(accumulator,person)
{
  const age =person.age
  const name=person.name
  if(!accumulator[age]){
    accumulator[age]=[]
  }
  accumulator[age].push(person)
  return accumulator

},{})
console.log(same)














