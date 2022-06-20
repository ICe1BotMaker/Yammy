function calc() {
    var now = new Date();
    var currentYear = now.getFullYear();
    var birthYear = Number(document.querySelector("#y").value);
    var age;
     
    age = currentYear - birthYear + 1;
    document.querySelector("#result").innerHTML = "Your age is " + age + "."
    document.querySelector("#result").onclick = function() {
        location.href = "https://www.google.com/search?q=%EA%B5%AC%EA%B8%80+%EB%82%98%EC%9D%B4&ei=jlawYuXNGoe7mAWYnZDwBw&ved=0ahUKEwjlzPul87v4AhWHHaYKHZgOBH4Q4dUDCA4&uact=5&oq=%EA%B5%AC%EA%B8%80+%EB%82%98%EC%9D%B4&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgQIABBDMgQIABBDMgQIABBDOgcIABBHELADOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOhEILhCABBCxAxCDARDHARCjAjoECAAQA0oECEEYAEoECEYYAFC6GVjNImDXOGgDcAF4AIABe4gBtwiSAQMxLjmYAQCgAQHIAQrAAQE&sclient=gws-wiz";
    }
    console.log("console loged " + age);
}

function calc2() {
    document.querySelector("#result2").innerHTML = "https://www.youtube.com/results?search_query=" + document.querySelector("#y2").value;
    document.querySelector("#result2").onclick = function() {
        location.href = "https://www.youtube.com/results?search_query=" + document.querySelector("#y2").value;
    }
    console.log("console loged " + document.querySelector("#y2").value);
}

function calc3() {
    var num1 = document.querySelector("#y3").value;
    var num2 = document.querySelector("#y4").value;
    var result = document.querySelector("#result3");

    result.innerHTML = "";

    result.innerHTML += Number(num1) + Number(num2) + "<br>";
    result.innerHTML += Number(num1) - Number(num2) + "<br>";
    result.innerHTML += Number(num1) / Number(num2) + "<br>";
    result.innerHTML += Number(num1) % Number(num2) + "<br>";

    console.log( Number(num1) + Number(num2));
    console.log( Number(num1) - Number(num2));
    console.log( Number(num1) / Number(num2));
    console.log( Number(num1) % Number(num2));
}

function calc4() {
    var num1 = document.querySelector("#y5").value;
    var num2 = document.querySelector("#y6").value;
    var result = document.querySelector("#result4");

    var sp = num2.split(" ");
    if (Number(num1) == sp.length) {
        var sum = 0;
        for (let i = 0; i < sp.length; i++) {
            sum += Number(sp[i]);
        }
        var average = sum / Number(num1);
        result.innerHTML = average;
    } else {
        alert("The number and grades do not match.");
    }
}