//Seeing the World: Think of at least five places in the world you’d like to visit.
console.log("-------------------")
var places=["London","Sydney","Dubai","New York","Paris"]
var main_places=places.slice()
console.log("--- Orignal order ---")
for (var i=0;i<places.length;i++)
{
    console.log(places[i])
}
console.log("--- Alphabetical order ---")
main_places.sort()
for (var i=0;i<main_places.length;i++)
{
    console.log(main_places[i])
}
console.log("--- Orignal order ---")
for (var i=0;i<places.length;i++)
{
    console.log(places[i])
}
console.log("--- Reverse Alphabetical order ---")
main_places.reverse()
for (var i=0;i<main_places.length;i++)
{
    console.log(main_places[i])
}
console.log("--- Orignal order ---")
for (var i=0;i<places.length;i++)
{
    console.log(places[i])
}
console.log("--- Reverse Orignal order ---")
places.reverse()
for (var i=0;i<places.length;i++)
{
    console.log(places[i])
}
console.log("--- Again Reverse = Orignal order ---")
places.reverse()
for (var i=0;i<places.length;i++)
{
    console.log(places[i])
}
console.log("--- Sorted Orignal order ---")
places.sort()
for (var i=0;i<places.length;i++)
{
    console.log(places[i])
}
console.log("--- Reverse Sorted Orignal order ---")
places.reverse()
for (var i=0;i<places.length;i++)
{
    console.log(places[i])
}