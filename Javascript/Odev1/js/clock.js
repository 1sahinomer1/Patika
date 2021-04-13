function showName() {
  var name = prompt("What is your name");
  document.getElementById("myName").innerText = name;
}
showName();
let days = [
  "pazar",
  "pazartesi",
  "salı",
  "çarşamba",
  "perşembe",
  "cuma",
  "cumartesi",
];
function showTime() {
  var date = new Date();
  document.getElementById("myClock").innerText =
    date.toLocaleTimeString() + days[date.getDay()];
  setTimeout(showTime, 1000);
}
showTime();
