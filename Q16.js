//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.

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
