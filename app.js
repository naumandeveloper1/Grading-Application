let obtainmarks, percent, grad, remark;
//onclick function write here for calculate the result
function calculate() {
    //input section
    let math = parseInt(document.querySelector("#math").value);
    let computer = parseInt(document.querySelector("#computer").value);
    let urdu = parseInt(document.querySelector("#urdu").value);
    let english = parseInt(document.querySelector("#english").value);
    let economics = parseInt(document.querySelector("#economics").value);
    //result section
    let obtainmarkst = document.querySelector(".obtainmarkst");
    let obtainmarksn = document.querySelector(".obtainmarksn");
    let percentagen = document.querySelector(".percentagen");
    let remarkt = document.querySelector(".remarkt");
    console.log(computer);
    //if else for condition
    if (math == NaN || computer == NaN || urdu == NaN || english == NaN || economics == NaN) {
        alert("enter some value in your field")
    }
    else {
        // if ()
        obtainmarks = math + computer + urdu + english + economics;
        obtainmarksn.innerText = obtainmarks;
        percent = parseInt(obtainmarks / 500 * 100);
        percentagen.innerText = percent;
        if (math > 40 && computer > 40 && urdu > 40 && english > 40 && economics > 40) {
            remarkt.innerHTML = `<span style="color: green;">${pass()}</span>`
        }
        else {
            remarkt.innerHTML = `<span style="color: red;">${fail()}</span>`
        }
        grade(percent);
    }
    print();


}
let pass = function message() {
    return "Pass";

}
let fail = function message() {
    return "Fail";

}
let grade = (number) => {
    //grade showing location select
    let gradet = document.querySelector(".gradet");
    if (number >= 95) {
        gradet.innerText = "A+"
    }
    else if (number >= 90) {
        gradet.innerText = "A"
    }
    else if (number >= 80) {
        gradet.innerText = "B"
    }
    else if (number >= 70) {
        gradet.innerText = "C"
    }
    else if (number >= 60) {
        gradet.innerText = "D"
    }
    else if (number >= 40) {
        gradet.innerText = "E"
    }
    else {
        gradet.innerText = "F"
    }
}
let print = () => {
    let print = document.querySelector(".printresult");
    print.addEventListener("click", () => {
        document.body.setAttribute("onbeforeprint", "beforeprint()");

    })
}
let beforeprint = () => {
    let confirmprint = confirm("Can you want to print this page.")
    if (confirmprint) {
        console.log("print this page");
    }
    else {
        window.close();
        console.log("this page is not print");
    }
}
