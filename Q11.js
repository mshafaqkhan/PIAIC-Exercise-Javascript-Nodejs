//Names: Store the names of a few of your friends in a array called names.
//Print each person’s name by accessing each element in the list, one at a time.

var names=[]
names.push("Ali","Bilal","Charlie","David","Emma")
//without for loop
console.log("\n-Without for loop-\n")
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
console.log(names[4])

//with for loop
console.log("\n-With for loop-\n")
for (var i=0;i<names.length;i++)
{
    console.log(names[i])
}