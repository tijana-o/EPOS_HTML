function required()
{
var empt = document.forms["form1"]["text1"].value;
var empt2 = document.forms["form1"]["text2"].value;
var empt3 = document.forms["form1"]["text3"].value;
if (empt == "")
{
alert("Molimo Vas napišete Vaše ime.");
return false;
}
else if (empt2 == ""){
alert("Molimo Vas da napišete Vaše utiske.");
return false;
}
else if (empt3 == ""){
alert("Molimo Vas da unesete Vaš e-mail.");
return false;
}
else
{
alert('Hvala Vam na povratnoj reakciji! Vaše utiske ćemo iskoristiti kako bismo unapredili naš kvalitet i Vaš doživljaj!');
return true; 
}
}
