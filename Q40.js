function make_album(a_name, a_title,no_track)
{
    if(no_track == undefined)
    return(a_name+" "+a_title)
    else
    return(a_name+" "+a_title+" "+no_track)
}

var new_data=make_album("ABC","DEF")
console.log(new_data)
var new_data=make_album("AAA","MMM",3)
console.log(new_data)
var new_data=make_album("AC","DC",0)
console.log(new_data)