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
    document.getElementById("answer").innerHTML = "While industrial waste is indeed a contributor to plastic pollution, fishing gear actually accounts for the greatest amount. It is estimated that “around 640,000 to 800,000 tons of fishing gear is lost annually world wide, and account for 10% of all plastic pollution and perhaps as much as 70% of all macroplastics when estimated by weight in our ocean.";
    modal.style.display = "block";
}
btn2.onclick = function () {
    document.getElementById("answer").innerHTML = "While consumer plastics are indeed a contributor to plastic pollution, fishing gear actually accounts for the greatest amount. It is estimated that “around 640,000 to 800,000 tons of fishing gear is lost annually world wide, and account for 10% of all plastic pollution and perhaps as much as 70% of all macroplastics when estimated by weight in our ocean.";
    modal.style.display = "block";
}
btn3.onclick = function () {
    document.getElementById("answer").innerHTML = "Correct! It is estimated that “around 640,000 to 800,000 tons of fishing gear is lost annually world wide, and account for 10% of all plastic pollution and perhaps as much as 70% of all macroplastics when estimated by weight in our ocean."
    modal.style.display = "block";
}
btn4.onclick = function () {
    document.getElementById("answer").innerHTML = "While restaurant takeout is indeed a contributor to plastic pollution, fishing gear actually accounts for the greatest amount. It is estimated that “around 640,000 to 800,000 tons of fishing gear is lost annually world wide, and account for 10% of all plastic pollution and perhaps as much as 70% of all macroplastics when estimated by weight in our ocean.";
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    window.location.href = '../pages/home.html';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        window.location.href = '../pages/home.html';
    }
}