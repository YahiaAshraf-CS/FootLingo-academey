let button= document.getElementById("button");
button.addEventListener("click",function(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let option = document.getElementById("option").value;
    if(name=="" || email=="" || age=="" || phone=="" || option==""){
        alert("Please fill all the fields");
        return;
    }
    else{
        alert("Name: "+name+"\nEmail: "+email+"\nAge: "+age+"\nPhone: "+phone+"\nOption: "+option);}
    
})



