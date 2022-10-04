//Name Cases: Store a person’s name in a variable, and then print that person’s name 
//in lowercase, uppercase, and titlecase.

var person_name="daViD maRk";
console.log("Normal Case : ",person_name)                 //Normal Case

var LC_name=person_name.toLowerCase()  //To Lower case
console.log("Lower  Case : ",LC_name) 

var UC_name=person_name.toUpperCase()   //To Upper case
console.log("Upper  Case : ",UC_name) 

//To Title case
var name=person_name.toLowerCase() 
name=name.split(' ')
for (var i = 0; i < name.length; i++)
{
    name[i]=name[i].charAt(0).toUpperCase()+name[i].slice(1);
}
var TC_name=name.join(' ')

console.log("Title  Case : ",TC_name) 





