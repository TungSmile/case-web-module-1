let canvas = document.getElementById("mycava");
let pen = canvas.getContext("2d");
let play = new Image(100, 100);
play.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/FF0084_circle.svg/1200px-FF0084_circle.svg.png';
let tho = new Image(100, 100);
tho.src = 'https://png.pngtree.com/png-clipart/20210512/ourmid/pngtree-rabbit-silhouette-cartoon-run-png-image_3266508.jpg';
let trau = new Image(100, 100);
trau.src = 'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-chinese-style-ink-painting-buffalo-image_1138692.jpg'

class Player {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.bullet = 3;
        this.score = 0;


    }

    draw() {
        pen.drawImage(this.img, this.x, this.y, 80, 80)
    }

    clean() {
        pen.clearRect(this.x, this.y, 80, 80)
    }
}

var hunt = new Player(20, 90, play)
play.onload = function () {
    hunt.draw();
}
hunt.draw()

document.onkeyup = function (event) {
    switch (event.keyCode) {
        case 87:
            if (hunt.y > 20) {
                hunt.clean();
                hunt.y -= 20;
                hunt.draw();
                break;
            }
            break;
        case 83:
            if (hunt.y < 620) {
                hunt.clean();
                hunt.y += 20;
                hunt.draw();
                break;
            }
            break;
        case 8:
            if (!arrow.reload) {
                arrow.y = hunt.y;
                arrow.x = hunt.x +110;
                arrow.reload = true;
                hunt.bullet--
                break;
            }
            break;
    }
}

class Rabbit {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.type = 2;
        this.huong = 1
    }

    draw() {
        pen.drawImage(this.img, this.x, this.y, 80, 80)
    }

    clean() {
        pen.clearRect(this.x, this.y, 80, 80)
    }

    run() {
        this.y += 10 * this.huong;
        if (this.y > canvas.height - 80 || this.y < 0)
            this.huong *= -1;
    }
}

var rabbit = new Rabbit(1400, 90, tho)
tho.onload = function () {
    rabbit.draw();
}
setInterval(loop,70)
function loop () {
    let data = JSON.parse(localStorage.getItem("data"));
    rabbit.clean();
    rabbit.run();
    rabbit.draw();
    if (hunt.bullet <= 0) {
        score();
        location.href='member.html';
    }
}


/*class Creep {
    constructor(x, y, img) {
        this.type = 1;
        this.x = x;
        this.y = y;
        this.img = img;

    }

    draw() {
        pen.drawImage(this.img, this.x, this.y, 80, 90);
    }

    clean() {
        pen.clearRect(this.x, this.y - 80, 80, 160);
    }

    run() {
        this.y +=Math.random()* 10;
    }
}

var b1 = new Creep(350, 80, trau);
var b2 = new Creep(500, 80, trau);
var b3 = new Creep(650, 80, trau);
var b4 = new Creep(800, 80, trau);

let arr = [b1, b2, b3, b4];

setInterval(moveb, 20)
function moveb() {
    for (let i = 0; i < arr.length; i++) {
        arr[i].clean();
        if (arr[i].y > 700) {
            arr[i].y = 80;
        }
        arr[i].draw();
        arr[i].run();
    }
}*/

class Bullet {
    constructor(player, img) {
        this.x = player.x + 110;
        this.y = player.y;
        this.reload = true;
        this.img = img;
    }

    draw() {
        pen.drawImage(this.img, this.x, this.y, 20, 20);
    }

    clean() {
        pen.clearRect(this.x, this.y, 20, 20);
    }

    run() {
        if (this.reload) {
            this.x += 10;
        }
        if (this.x > 1500) {
            this.reload = false;
        }
        if ((rabbit.x + 40) - (this.x + 10) <= 50 && (rabbit.y + 40) - (this.y + 10) <= 50) {
            this.reload = false;
            arrow.y = hunt.y;
            arrow.x = hunt.x +110;
            hunt.score+=1;
            this.clean();
            document.getElementById("score").innerHTML=hunt.score;
        }
    }
}

let arrow = new Bullet(hunt, play);


setInterval(function () {
    arrow.clean();
    arrow.run();
    arrow.draw();

}, 70)


// méo in đc :V
function score(){
    let data = JSON.parse(localStorage.getItem("data"));
    for (let i = 0; i < data.length; i++) {
        if(data[i].status){
            data[i].score=hunt.score;
            data[i].status=false;
            localStorage.setItem("data", JSON.stringify(data));
        }
    }
}



