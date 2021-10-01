function logintohome(){
    var emailtext=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    
   
    
    if(emailtext!="" && password!=""){
    localStorage.setItem("emailid",email)
    localStorage.setItem("passwords",password)
    window.location.href="kindmeal.html"
    }
    if(password==""){
       
       var p=document.getElementById('ok')
        p.innerText="Password is incorrect!"
        p.style.color="red"
    
    }  
  }