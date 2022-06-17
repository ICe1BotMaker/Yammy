let cartnum = 0;
let includecart = [];

function cartin(type) {
    let cartlist = document.getElementById("list");
    cartnum = cartnum + 1;
    includecart.push(type);

    /*cartlist.textContent = "";
    for (let i = 1; i < includecart.length; i++) {
        cartlist.textContent += includecart[i];
    }*/

    let cartcontent = document.getElementById("cartnum");
    cartcontent.textContent = cartnum;
}

function review(type) {
    if (type == "1") {
        let reviewt = document.getElementById("1-1");
        let reviewd = document.getElementById("1-d");

        reviewt.textContent = '닫기';
        reviewd.style.display = 'inline-block';

        reviewt.onclick = function(event) {
            review_c("1");
        }
    } else if (type == "2") {
        let reviewt = document.getElementById("2-1");
        let reviewd = document.getElementById("2-d");

        reviewt.textContent = '닫기';
        reviewd.style.display = 'inline-block';

        reviewt.onclick = function(event) {
            review_c("2");
        }
    } else if (type == "3") {
        let reviewt = document.getElementById("3-1");
        let reviewd = document.getElementById("3-d");

        reviewt.textContent = '닫기';
        reviewd.style.display = 'inline-block';

        reviewt.onclick = function(event) {
            review_c("3");
        }
    } else if (type == "4") {
        let reviewt = document.getElementById("4-1");
        let reviewd = document.getElementById("4-d");

        reviewt.textContent = '닫기';
        reviewd.style.display = 'inline-block';

        reviewt.onclick = function(event) {
            review_c("4");
        }
    }
}

function review_c(type) {
    if (type == "1") {
        let reviewt = document.getElementById("1-1");
        let reviewd = document.getElementById("1-d");

        reviewt.textContent = '구매후기';
        reviewd.style.display = 'none';

        reviewt.onclick = function(event) {
            review("1");
        }
    } else if (type == "2") {
        let reviewt = document.getElementById("2-1");
        let reviewd = document.getElementById("2-d");

        reviewt.textContent = '구매후기';
        reviewd.style.display = 'none';

        reviewt.onclick = function(event) {
            review("2");
        }
    } else if (type == "3") {
        let reviewt = document.getElementById("3-1");
        let reviewd = document.getElementById("3-d");

        reviewt.textContent = '구매후기';
        reviewd.style.display = 'none';

        reviewt.onclick = function(event) {
            review("3");
        }
    } else if (type == "4") {
        let reviewt = document.getElementById("4-1");
        let reviewd = document.getElementById("4-d");

        reviewt.textContent = '구매후기';
        reviewd.style.display = 'none';

        reviewt.onclick = function(event) {
            review("4");
        }
    }
}

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

let checkdata = {
    "date": "",
    "check_num": 0,
}

function check(type) {
    let check_1 = document.getElementById("check_1");
    let check_2 = document.getElementById("check_2");
    let check_3 = document.getElementById("check_3");
    let check_4 = document.getElementById("check_4");
    let check_5 = document.getElementById("check_5");

    if ((checkdata.date).split(" ")[2] == day) {
        alert("이미 출석체크를 하였습니다. 내일 다시시도해주세요.");
    } else if (type == "1") {
        check_1.textContent = day;
        checkdata.check_num += 1;
        checkdata.date = `${year} ${month} ${day}`;
    } else if (type == "2") {
        check_2.textContent = day;
        checkdata.check_num += 1;
        checkdata.date = `${year} ${month} ${day}`;
    } else if (type == "3") {
        check_3.textContent = day;
        checkdata.check_num += 1;
        checkdata.date = `${year} ${month} ${day}`;
    } else if (type == "4") {
        check_4.textContent = day;
        checkdata.check_num += 1;
        checkdata.date = `${year} ${month} ${day}`;
    } else if (type == "5") {
        check_5.textContent = day;
        checkdata.check_num += 1;
        checkdata.date = `${year} ${month} ${day}`;
    }
}

window.onload = function() {
    let cartcontent = document.getElementById("cartnum");
    cartcontent.textContent = cartnum;

    let cartlist = document.getElementById("list");
}