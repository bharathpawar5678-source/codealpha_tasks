let display = document.getElementById("display");

function appendValue(value) {
  let lastChar = display.value.slice(-1);

  // prevent double operators
  if ("+-*/".includes(value) && "+-*/".includes(lastChar)) {
    return;
  }

  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value;
    let result = eval(expression);

    display.value = result;

    addToHistory(expression + " = " + result);
  } catch {
    display.value = "Error";
  }
}

function addToHistory(entry) {
  let historyList = document.getElementById("historyList");
  let li = document.createElement("li");
  li.textContent = entry;
  historyList.appendChild(li);
}

// Keyboard support
document.addEventListener("keydown", function (e) {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});