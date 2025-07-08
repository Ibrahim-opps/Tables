let number = prompt("Enter a number to show its multiplication table:");
    let length = prompt("Enter the length of the multiplication table:");
    number = Number(number);
    length = Number(length);
    for (let i = 1; i <= length; i++) {
      document.write(number + " x " + i + " = " + (number * i) + "<br>");
    }