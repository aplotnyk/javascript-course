//1.
/*  Reuse the function to convert Celsius to Fahrenheit made on exercise #2.
 But this time the celsius temperature should be informed in the input field below
 and the calculation done after pressing the button. */
 document.getElementById("convert").onclick = function extractCel() {
    var tempCel = parseFloat(document.getElementById("temp_celsius").value);
    if (isNaN(tempCel))
        alert("invalid temperature");
    else
        document.getElementById("temp_fahr").innerHTML = (9 * tempCel / 5) + 32;
}

//2.
/* Print in the list below the years when the World Cup of Soccer will happen from 2022 to 2050.
Remember that the World Cup happens every 4 years. */
document.getElementById("anos_copa").innerHTML = "";

var i = 2022;
while (i <= 2050)
{
    document.getElementById("anos_copa").innerHTML += "<li>" + i + "</li>";
    i += 4;
}

//3.
/* Use the input fields below to inform two grades and the number of absences of a student.
Follow the rules below to inform the result:

- Minimum 70% presence is required to be approved (total number of classes is 20)
- Minimum average of 6.5 is required to be approved
- If the student fails, we need to inform what was the reason (absences, insufficient grade or both.) */
document.getElementById("calculate").onclick = function calculate() {
    var gr1 = parseInt(document.getElementById("grade1").value);
    var gr2 = parseInt(document.getElementById("grade2").value);
    var abs = parseInt(document.getElementById("absences").value);

    if (isNaN(gr1) || isNaN(gr2) || isNaN(abs))
        alert("Fill all the fields!");
    else {
        if ((abs >= (20 * 0.3)) && (((gr1 + gr2) / 2) < 6.5)) 
            document.getElementById("result").innerHTML = "You failed: absence & grades"; 
        else if (abs >= (20 * 0.3)) 
            document.getElementById("result").innerHTML = "You failed: absence" 
        else if (((gr1 + gr2) / 2) < 6.5) 
            document.getElementById("result").innerHTML = "You failed: grades";
        else 
            document.getElementById("result").innerHTML = "You passed";
    }
}

//4.
/* See below the list of sales of an online course.
Fill the html table below with the sales and print the total amount of sales in the last line.
Don't include the sales that had a refund requested. */

var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
        
    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    }

];

var tb = document.getElementById("course_sales").innerHTML;

var i = 0;
var totNumb = 0;
var totSum = 0;
document.getElementById("course_sales").innerHTML = "";
while (i < sales.length)
{
    if (!sales[i].refundRequested)
    {
        document.getElementById("course_sales").innerHTML += 
        "<tr>"
        + "<td>" + sales[i].student + "</td>" 
        + "<td>" + sales[i].date + "</td>"
        + "<td>" + sales[i].amount.toString() + "</td>"
        + "</tr>";
        totNumb++;
        totSum += sales[i].amount;
    }
    i++;
}
document.querySelector("[colspan='2']").innerHTML = totNumb;
document.getElementById("total_sold").innerHTML = totSum;