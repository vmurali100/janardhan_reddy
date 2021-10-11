function displayUsers(users){
    document.querySelector("tbody").innerHTML = ""
    users.forEach(function (user,i){
        var myTr = document.createElement("tr")

        // var td1 = document.createElement("td")
        // td1.innerHTML = user.fName
        // var td2 = document.createElement("td");
        // td2.innerHTML = user.lName
        // var td3 = document.createElement("td");
        // td3.innerHTML = user.email

        for(a in user){
            var td = document.createElement("td")
            td.innerHTML = user[a]
            myTr.appendChild(td)

        }
        var td4 = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.innerHTML="EDIT"
        editBtn.setAttribute("onclick","editUser("+i+")")
        td4.appendChild(editBtn)
        var td5 = document.createElement("td");
        var deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("onclick","deleteUser("+i +")")
        deleteBtn.innerHTML="DELETE"
        td5.appendChild(deleteBtn)

        // myTr.appendChild(td1)
        // myTr.appendChild(td2)
        // myTr.appendChild(td3)
        myTr.appendChild(td4)
        myTr.appendChild(td5)

        document.querySelector("tbody").appendChild(myTr)
    })
}

function clearForm(){
  document.getElementById("fName").value=""
  document.getElementById("lName").value=""
  document.getElementById("email").value=""
  document.getElementById("dob").value=""

  checkBoxs.forEach(cb=>{
      cb.checked=false
  })
  radioBtns.forEach(rb=>{
      rb.checked=false
  })

}
function getDataFromServer(){
    var postData = new XMLHttpRequest()
    postData.onreadystatechange=function(){
        if(postData.readyState == 4 && postData.status ==200){
            users=JSON.parse(postData.response)
            displayUsers(users)
        }
    }
    postData.open("GET","http://localhost:3000/users");
    postData.send()
}

getDataFromServer()