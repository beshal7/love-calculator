// console.log("hello world");
// // alert("thik xa");
// let response = prompt("what is your name?")
// alert("hello" + response);
// let output = document.querySelector("#output");
// console.log(output);
// output.innerText = "0%";
// output.innerText = response;

let yourname = document.querySelector("#yourName");
let theirname = document.querySelector("#theirName");
let output = document.querySelector("#output");
let singlepeople = ['rupesh', 'shyam', 'hari']

function calculate() {
    let name1 = yourName.value;
    let name2 = theirName.value;
    let lovepercent = parseInt(Math.random() * 100)
    if (name1.length == 0 || name2.length == 0) {
        output.innerText = "name chai kolley rakhdinxa?"
    }
    else {

        if (singlepeople.includes(name1.toLowerCase())) {

            output.innerText = "sorry yr"

        }
        else {

            output.innerText = name1 + " " + name2 + " are " + lovepercent + " % gay"


        }
        yourName.value = " "
        theirName.value = " "
    }


}