function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Azaria"&&password=="AZARIA")
{
    alert("AZARIA IS A REALLY GOOD BOY")
    return false;
}
if(username=="Yeabtsega"&&password=="YEABTSEGA")
{
    alert("Yeabtsega is a naughty naughty boy")
    return false;
}
else
{
    alert("login failed")
}

}