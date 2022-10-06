var current_user = ['Ali','tim','Atta', 'Alex', 'John'];
var new_users=['Alam','bill', 'Emma','Tim', 'John',"marie"]

current_user = current_user.map(aa => aa.toUpperCase());
new_users=new_users.map(aa => aa.toUpperCase());


for(var i=0;i<new_users.length;i++)
{
    if(current_user.includes(new_users[i]))
    {
        console.log("The person will need to enter a new username")
    }
    else
    {
        console.log("username is available.")
    }
}

/*const uppercased = names.map(aa => aa.toUpperCase());
console.log(uppercased);


console.log(names);*/