var users = JSON.parse(localStorage.getItem("localUsers"));
if(users==null){
    users=[]
}
function createUser (){
    let newuser = captureUser();
    postDataToServer(newuser)
    // displayUsers(users)
    clearForm() //

    // Storing In Local Storage
    // localStorage.setItem("localUsers",JSON.stringify(users))
}

function postDataToServer(user){
    var postData = new XMLHttpRequest()
    postData.onreadystatechange=function(){
        if(postData.readyState == 4 && postData.status ==201){
            console.log("User Addedd Successfully")
        }
    }
    postData.open("POST","http://localhost:3000/users");
    postData.setRequestHeader("Content-Type","application/json");
    postData.send(JSON.stringify(user))
}

var checkBoxs = document.getElementsByName("subject")
var radioBtns = document.getElementsByName("gender")

function captureUser(){
    var user = {
        fName:document.getElementById("fName").value,
        lName:document.getElementById("lName").value,
        email:document.getElementById("email").value,
        dob:document.getElementById("dob").value,
        subjects:[],
        gender:""
    }
    user.dob = new Date(user.dob).toLocaleDateString()


    checkBoxs.forEach((cb)=>{
        if(cb.checked){
            user.subjects.push(cb.value)
        }
    })

    radioBtns.forEach((rb)=>{
        if(rb.checked){
            user.gender = rb.value
        }
    })

    return user
}

