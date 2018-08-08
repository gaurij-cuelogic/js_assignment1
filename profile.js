function profile()
{
 var get_index =localStorage.getItem("unique_index");
  var x=localStorage.getItem("testJSON"); 
  var obj= JSON.parse(x);
 var disp_email =  obj[get_index].p_email;
 document.getElementById("email").innerHTML = disp_email;
 var disp_firstname =  obj[get_index].p_firstname;
 document.getElementById("first").value = disp_firstname;
 console.log(disp_firstname);
 disp_lastname =  obj[get_index].p_lastname;
 document.getElementById("last").value = disp_lastname;
 disp_gender =  obj[get_index].p_gender;
 document.getElementById("gender").value = disp_gender;
 disp_address =  obj[get_index].p_address;
 document.getElementById("address").value = disp_address;
 disp_img =  obj[get_index].p_img;
 document.getElementById("image").src = disp_img;
//alert(disp_img);
//document.getElementById("img").innerHTML = reader.readAsDataURL(disp_img);  
}