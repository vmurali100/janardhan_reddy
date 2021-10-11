function deleteUser (i){
    // var latestUsers = users.filter(function (user,index){
    //     return i != index
    // })
    // localStorage.setItem("localUsers",JSON.stringify(latestUsers))
    // displayUsers(latestUsers)

    var postData = new XMLHttpRequest()
    postData.onreadystatechange=function(){
        if(postData.readyState == 4 && postData.status ==201){
            getDataFromServer()
        }
    }
    postData.open("DELETE","http://localhost:3000/users/"+users[i].id);
    postData.send()
}