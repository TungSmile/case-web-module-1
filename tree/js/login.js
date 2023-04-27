let data = JSON.parse(localStorage.getItem("data"));
if (data === null) {
    data = [];
}
const admin = 2;
const member = 1;
class User {
    constructor(id, pass) {
        this.id = id;
        this.pass = pass;
        this.score = 0;
        this.role = member;
        this.status=false;
    }
}

//login check trùng + check quyền
function login() {
    let id = document.getElementById("inputid").value;
    let pass = document.getElementById("inputpass").value;
    if (id === "" && pass === "") {
        alert("Chưa điền đủ Id/Pass ");
    }
    for (let i = 0; i < data.length; i++) {
        if (id === data[i].id && pass === data[i].pass) {
            if (data[i].role === 1) {
                data[i].status=true;
                localStorage.setItem("data", JSON.stringify(data));
                location.href = 'game.html';

            } else {
                location.href = 'admin.html';

            }
        }
    }
}

//check trùng nếu trúng trả= return , ko thì mới chạy tiếp đến nhập
function register() {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data === null) {
        data = [];
    }
    let id = document.getElementById("id").value;
    let pass = document.getElementById("pass").value;
    for (let i = 0; i < data.length; i++) {
        if (id === data[i].id) {
            alert("trùng id nhập lại")
            return
        }
    }
    let usernew = new User(id, pass);
    data.push(usernew);
    localStorage.setItem("data", JSON.stringify(data));
    location.href = 'login.html'
}
