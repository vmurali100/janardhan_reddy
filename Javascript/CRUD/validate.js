function validate(){
    var isValid = true
    var user = captureUser()

    for(a in user){
        if(a != "subjects" && a !== "email"){
            if(user[a]==""){
                isValid=false
            }
        }else if(a== "subjects"){
            if(user.subjects.length == 0){
                isValid=false
            }
        }else if (a == "email"){
            var pattern =/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            if(!pattern.test(user[a])){
                isValid=false
            }
        }
    }

    if(isValid){
        document.querySelector("#create").removeAttribute("disabled")
    }else{
        document.querySelector("#create").setAttribute("disabled",true)
    }
}