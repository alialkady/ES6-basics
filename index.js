/*
let const to write variables
*/
const name = "ali";
console.log(`my name is ${name}`);
function getBook(title , author){
    return{
        title,author
    };
};
var book = getBook('harry','jk');
console.log(book);

//store variable
var n = {
    na: "ali",
    age: 16
};
var myNme = n.na;
console.log(myNme);
//es6 store var
const list = {
    your: "shopping list",
    product :["milk", "cows"]
};
const {your,product} = list;
console.log(your,product);

//6s6 function
const sayLoc = () => {
    console.log("location");
};
sayLoc();
// that = this
const user =
      {
          na:"ali",
          ag: 16,
          sayName : function(){
          console.log("my name is"+this.na);
        const fullName = ()=>{
            console.log(`my name is ${this.na} and my age is ${this.ag}`)
            
        }   
        fullName();
         
      }

      };
          
      
user.sayName();

//forEach
const shoppingList = ["milk","cow", "banana"];

shoppingList.forEach((item,index)=>{
    console.log(`the index is ${index} and the product is ${item}`)
});
//map
const newList = shoppingList.map(item=>{
    return item +"new";
});
console.log(newList);
//filter
const filterList = shoppingList.filter((item)=> item ==="cow");
console.log(filterList);
