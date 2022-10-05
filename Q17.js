//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.

var names=["Asim","Basit","Kashif"]
var na_guest="Asim" // not available Guest
//names.push("Ali","Bilal","Kashif")   for array push 

console.log("Guest List as per Q14")
for (var i=0;i<names.length;i++)
{
    console.log(names[i]+", You are cordially invited to join for dinner at Marriot. Your presence is requested from 7 pm today for an enjoyable evening.")
}

for (var i=0;i<names.length;i++)
{
   if(names[i]==na_guest)
   {
       console.log("\n\""+names[i]+"\""+" can’t make it.\n")
       names[i]="Mateen" // new member added
   }
}
console.log("Guest List updated")
for (var i=0;i<names.length;i++)
{
    console.log(names[i]+", You are cordially invited to join for dinner at Marriot. Your presence is requested from 7 pm today for an enjoyable evening.")
}

console.log("\nHi Friends I found a bigger dinner Table\n")

names.splice(0,0,"Tim") //insertion at start
names.splice((names.length/2),0,"David") //insertion at middle
names.push("Hamza")
console.log("New Guest List")
for (var i=0;i<names.length;i++)
{
    console.log(names[i]+", You are cordially invited to join for dinner at Marriot. Your presence is requested from 7 pm today for an enjoyable evening.")
}

console.log("\nI can invite only two people for dinner.\n")

for (var i=names.length-1;i>1;i--)
{
    console.log(names.pop() + " I am sorry I can’t invite you to dinner")
}

console.log("\nFinal Guest List")
for (var i=0;i<names.length;i++)
{
    console.log(names[i]+", You are cordially invited to join for dinner at Marriot. Your presence is requested from 7 pm today for an enjoyable evening.")
}

console.log("\nLast Two Guests.\n")

for (var i=names.length-1;i>-1;i--)
{
    console.log(names.pop() + " Removed")    
    if(names.length==0)
    {
        console.log("\n List Is Empty\n")
    }
}
