var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");
for (item of btn) {
  item.addEventListener("click", (e) => {
    btnText = e.target.innerText;

    if (btnText == "×") {
      btnText = "*";
    }

    if (btnText == "÷") {
      btnText = "/";
    }
    screen.value += btnText;
  });
}

function pow() {
  screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

function pi() {
  screen.value = 3.14159265359;
}

function e() {
  screen.value = 2.71828182846;
}

function fact() {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  screen.value = f;
}

function backSpace() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}
