var index
function editUser (i){
    index=i
    document.getElementById("create").style.display="none"
    document.getElementById("update").style.display="block"

    document.getElementById("fName").value=users[i].fName
    document.getElementById("lName").value=users[i].lName
    document.getElementById("email").value=users[i].email
    document.getElementById("dob").valueAsDate= new Date(users[i].dob)
    
    radioBtns.forEach((rb)=>{
        if(rb.value == users[i].gender){
            rb.checked = true
        }
    })

    checkBoxs.forEach(cb=>{
        users[i].subjects.forEach(sub=>{
            cb.checked = false
            if(cb.value == sub){
                cb.checked = true
            }
        })
    })
}

function updateUser(){
    var user = captureUser()
    // users[index]=user
    // displayUsers(users)
    // localStorage.setItem("localUsers",JSON.stringify(users))
    // clearForm()
    var postData = new XMLHttpRequest()
    postData.onreadystatechange=function(){
        if(postData.readyState == 4 && postData.status ==201){
            getDataFromServer()
        }
    }
    postData.open("PUT","http://localhost:3000/users/"+users[index].id,user);
    postData.setRequestHeader("Content-Type","application/json")
    postData.send(JSON.stringify(user))
}