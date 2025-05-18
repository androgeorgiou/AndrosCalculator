let output = document.getElementById('output');

function append(value) {
  output.value += value;
}

function clearAll() {
  output.value = '';
}

function deleteLast() {
  output.value = output.value.slice(0, -1);
}

function toggleSign() {
  if (output.value) {
    if (output.value.startsWith('-')) {
      output.value = output.value.slice(1);
    } else {
      output.value = '-' + output.value;
    }
  }
}

function power() {
  output.value += '**';
}

function sqrt() {
  try {
    const val = eval(output.value);
    if (val < 0) {
      output.value = "Σφάλμα: √ αρνητικού!";
    } else {
      output.value = Math.sqrt(val);
    }
  } catch {
    output.value = "Σφάλμα!";
  }
}

function factorial() {
  try {
    const val = parseInt(eval(output.value));
    if (val < 0 || val > 452 || isNaN(val)) {
      output.value = "Σφάλμα στο fct";
      return;
    }
    let result = 1;
    for (let i = 2; i <= val; i++) {
      result *= i;
    }
    output.value = result;
  } catch {
    output.value = "Σφάλμα!";
  }
}

function randomNumber() {
  output.value = Math.floor(Math.random() * 101);
}

function calculate() {
  try {
    const x = output.value;
    const result = new Function('return ' + x)();
    if (!isFinite(result)) throw new Error();
    output.value = result;
  } catch {
    output.value = "Σφάλμα στον υπολογισμό!";
  }
}
