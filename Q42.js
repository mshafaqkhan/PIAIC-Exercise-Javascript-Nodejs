function make_great(val)
{
    val = val.map(i => 'Great ' + i);
    return val
}
function show_magicians(val)
{
    console.log(val)
}


var mag_name=["David","Cooper","Field"]
var new_mag_name=make_great(mag_name)
show_magicians(new_mag_name)