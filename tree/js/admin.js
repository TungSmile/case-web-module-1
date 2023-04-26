window.showwithadmin()


function showwithadmin() {
    let data = JSON.parse(localStorage.getItem("data"));
    let print = "<table><tr><td>ID</td><td>Pass</td><td>Score</td><td>Role</td><td colspan='2'>Setting</td></tr>";
    for (let i = 0; i < data.length; i++) {
        print += "<tr><td>" + data[i].id + "</td><td>" + data[i].pass + "</td><td>" + data[i].score + "</td>" +
            "<td>" + data[i].role + "</td>" + "<td><button onclick='setmem("+i+")'>Set</button></td>" +
            "<td><button onclick='del("+i+")'>Delete</button></td>"

    }
    document.getElementById("show").innerHTML = print;
}

function del(index){
    let data = JSON.parse(localStorage.getItem("data"));
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    showwithadmin()
}
function setmem(index){
    let data = JSON.parse(localStorage.getItem("data"));
    let setpass=document.getElementById("pass").value;
    let setscore=document.getElementById("score").value;
    let setrole=document.getElementById("role").value;
    alert(pass)
    if(setpass!=="")
        data[index].pass=setpass;
    if(setpass!=="")
        data[index].score=setscore;
    if(setpass!=="")
        data[index].role=setrole;
    localStorage.setItem("data", JSON.stringify(data));
    showwithadmin()
}