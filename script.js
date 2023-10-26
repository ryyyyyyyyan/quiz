document.getElementById("bt").addEventListener("click", clicked);
function clicked() {
  let i1 = document.getElementById("i1").value;
  let i2 = document.getElementById("i2").value;
  let i3 = document.getElementById("i3").value;
  let i4 = document.getElementById("i4").value;
  let mark = 0;
  if (
    i1.toLowerCase() ==
    "                                                                                                                                                                                                                                                                                                                                                                                                               "
  ) {
    mark = mark + 25;
    document.getElementById("o1").innerHTML = "CORRECT";
  } else {
    document.getElementById("o1").innerHTML = "INCORRECT";
  }
  if (i2.toLowerCase() == "samsung") {
    mark = mark + 25;
    document.getElementById("o2").innerHTML = "CORRECT";
  } else {
    document.getElementById("o2").innerHTML = "INCORRECT";
  }
  if (i3.toLowerCase() == "nevada") {
    mark = mark + 25;
    document.getElementById("o3").innerHTML = "CORRECT";
  } else {
    document.getElementById("o3").innerHTML = "INCORRECT";
  }
  if (i4.toLowerCase() == "new york city" || i4.toLowerCase() == "nyc") {
    mark = mark + 25;
    document.getElementById("o4").innerHTML = "CORRECT";
  } else {
    document.getElementById("o4").innerHTML = "INCORRECT";
  }
  document.getElementById("o").innerHTML = mark;
  if (mark == 100) {
    document.getElementById("c").innerHTML = "Fantastic!";
  }
  if (mark == 75) {
    document.getElementById("c").innerHTML = "Great job!";
  }
  if (mark == 50) {
    document.getElementById("c").innerHTML = "Not bad!";
  }
  if (mark == 25) {
    document.getElementById("c").innerHTML = "Try harder!";
  }
  if (mark == 0) {
    document.getElementById("c").innerHTML = "How!";
  }
}
