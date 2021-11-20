let header =document.getElementById("header-container");
header.style.backgroundColor = "green";

document.querySelector(".emergency-tasks").style.backgroundColor = "LightSalmon";

document.querySelector(".no-emergency-tasks").style.backgroundColor =  "#F0E68C	";

//essa é a forma correta de fazer.
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselectorall_loop_p

document.querySelectorAll(".no-emergency-tasks h3")[0].style.backgroundColor = "black";

document.querySelectorAll(".no-emergency-tasks h3")[1].style.backgroundColor = "black";

document.querySelector("#footer-container").style.backgroundColor = "black";