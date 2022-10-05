//Changing Guest List: You just heard that one of your guests can’t make the dinner,
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

var names=["Asim","Basit","Kashif"]
var na_guest="Basit" // not available Guest
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
