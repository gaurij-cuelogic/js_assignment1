function validation(email,firstname,lastname,password,address)
  { 
     if(email == "" || email == null)
      {
         alert("enter your email id");
         return false;
      }
      else
      {
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (email.match(reg))
        {
          return true;
        }
       else
       {
         alert("invalid email id");
         return false;  
        }
       
      }
      var firstname= document.getElementById("first").value;
      if(firstname==""||firstname==null)
      {
        return false;
      }
      var lastname= document.getElementById("last").value;
      if(lastname==""||lastname==null)
      {
        return false;
      }
      var password= document.getElementById("pwd").value;
      if(password==""||password==null)
      {
        return false;
      }
      var address= document.getElementById("address").value;
    
      if(address==""||address==null)
      {
        return false;
      }
      return true;
  }

   