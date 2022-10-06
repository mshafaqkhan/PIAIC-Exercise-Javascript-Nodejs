var user_name=["Eric","Nasir","Qasim","admin","Zia"]
for(var i=0;i<user_name.length;i++)
{
    if(user_name[i]=="admin")
    {
        console.log("Hello admin, would you like to see a status report?")
    }
    else
    {
        console.log("Hello "+ user_name[i]+", thank you for logging in again.")
    }
}