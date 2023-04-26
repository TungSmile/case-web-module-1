window.sort()
window.showwithmember()

function sort() {
    let data = JSON.parse(localStorage.getItem("data"));
    for (let i = 0; i < data.length - 1; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i].score < data[j].score) {
                let temp = data[i];
                data[i] = data[j];
                data[j] = temp;
            }
        }
    }
    localStorage.setItem("data", JSON.stringify(data));
}
function showwithmember() {
    let data = JSON.parse(localStorage.getItem("data"));
    let print = "<table><th>ScoreBoard</th>";
    for (let i = 0; i < data.length; i++) {
        print += "<tr><td>" + data[i].id + "</td><td>" + data[i].score + "</td></tr>"
    }
    document.getElementById("show").innerHTML = print;
}
