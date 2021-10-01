// function signup(e) {

//     e.preventDefault();

//     let myForm =document.getElementById('myForm');
//     let name = myForm.name.value;
//     let Mobile = myForm.Mobile.value;
//     let email = myForm.email.value;
//     let password = myForm.password.value;
    

//     if(localStorage.getItem('users')===null){
//         localStorage.setItem('users',JSON.stringify([]));
        
//     }
  

    
//     let user={
//         name:name,
//         Mobile: Mobile,
//         email:email,
//         password:password
//     };
    
    
//     let arr=JSON.parse(localStorage.getItem('users'));

//     arr.push(user);

//     localStorage.setItem('users',JSON.stringify(arr));
//     window.location.href ="kindmeal.html"
    
//      //console.log(users);

//     //console.log("data:",name,email,password);

    



// }






function register(){
    var emailtext=document.getElementById("form").value;
    var password=document.getElementById("form1").value;
    
   
    
    if(emailtext!="" && password!=""){
    localStorage.setItem("emailid",form)
    localStorage.setItem("passwords",form1)
    window.location.href="thanks.html"
    }
    if(password==""){
       
       var p=document.getElementById('pt')
        p.innerText="Fill all blocks!"
        p.style.color="red"
    
    }  
}
