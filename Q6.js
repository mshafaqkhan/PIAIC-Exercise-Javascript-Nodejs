//Stripping Names:
//Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//Make sure you use each character combination, "\t" and "\n", at least once.
//Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces
var person_name_1="David";
var person_name_2="Smith";
var person_name="\t"+person_name_1+" "+person_name_2+"\n"+"\t";
console.log("Name with spaces")
console.log(person_name)
console.log("Name without spaces at start and end")
console.log(person_name.trim())
console.log("Name without spaces")
person_name=person_name.trim()
person_name=person_name.replace(/\s+/g, '');
console.log(person_name)
