// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function () {
    document.getElementById("answer").innerHTML = "Not Quite! At least 8 million tons of plastic end up in our oceans every year, and make up 80% of all marine debris from surface waters to deep-sea sediments. Click anywhere to continue. - https://www.iucn.org/resources/issues-briefs/marine-plastics";
    modal.style.display = "block";
}
btn2.onclick = function () {
    document.getElementById("answer").innerHTML = "Not Quite! At least 8 million tons of plastic end up in our oceans every year, and make up 80% of all marine debris from surface waters to deep-sea sediments. Click anywhere to continue. - https://www.iucn.org/resources/issues-briefs/marine-plastics";
    modal.style.display = "block";
}
btn3.onclick = function () {
    document.getElementById("answer").innerHTML = "Correct! At least 8 million tons of plastic end up in our oceans every year, and make up 80% of all marine debris from surface waters to deep-sea sediments. Click anywhere to continue. - https://www.iucn.org/resources/issues-briefs/marine-plastics";
    modal.style.display = "block";
}
btn4.onclick = function () {
    document.getElementById("answer").innerHTML = "Not Quite! At least 8 million tons of plastic end up in our oceans every year, and make up 80% of all marine debris from surface waters to deep-sea sediments. Click anywhere to continue. - https://www.iucn.org/resources/issues-briefs/marine-plastics";
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    window.location.href = '../project1/pages/home.html';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        window.location.href = '../project1/pages/home.html';
    }
}