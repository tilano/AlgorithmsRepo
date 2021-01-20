
export const maskify = (cc) => {
  if (cc.length >= 7) {
    return cc.split('').map((letter, idx) => (idx < cc.length - 4 && idx !== 0) ? '*' : letter).join('')
  } else {
    return cc
  }
}

export const getNumberCardinal = (n) => {
  const val = Number(n)
  if (Number.isInteger(val)) {
    var s = ["th", "st", "nd", "rd"],
      v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0])
  } else {
    return 'No es un numero entero'
  }
}


export const reversePolish = (newExpr) => {
  let expr = newExpr.split(" ");
  let stack = [];
  if (expr === '') {
    return 0;
  }

  for (let i = 0; i < expr.length; i++) {
    if (!isNaN(expr[i]) && isFinite(expr[i])) {
      stack.push(expr[i]);

    } else {
      let a = stack.pop();
      let b = stack.pop();
      if (expr[i] === "+") {
        stack.push(parseInt(a) + parseInt(b));
      } else if (expr[i] === "-") {
        stack.push(parseInt(b) - parseInt(a));
      } else if (expr[i] === "*") {
        stack.push(parseInt(a) * parseInt(b));
      } else if (expr[i] === "/") {
        stack.push(parseInt(b) / parseInt(a));
      } else if (expr[i] === "^") {
        stack.push(Math.pow(parseInt(b), parseInt(a)));
      }
    }
  }

  if (stack.length > 1) {
    return "ERROR";
  } else {
    return stack[0];
  }
}