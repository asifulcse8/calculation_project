function generateTable(){
    var num1 = Number (document.getElementById("number1").value);
    var num2 = Number (document.getElementById("number2").value);
    var sum = "";
    sub = "";
    mul = "";
    div = "";
    mod = "";

    sum = parseInt(num1 + num2);
    sub = parseInt(num1 - num2);
    mul = parseInt(num1 * num2);
    div = parseFloat(num1 / num2).toFixed(2);
    mod = parseInt(num1 % num2);

    document.getElementById("result1").innerHTML = (`${num1} + ${num2} = ${sum}`);
    document.getElementById("result2").innerHTML = (`${num1} - ${num2} = ${sub}`);
    document.getElementById("result3").innerHTML = (`${num1} * ${num2} = ${mul}`);
    document.getElementById("result4").innerHTML = (`${num1} / ${num2} = ${div}`);
    document.getElementById("result5").innerHTML = (`${num1} % ${num2} = ${mod}`);
}