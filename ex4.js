//1.
/* An e-commerce website has two types of shipments:
When changing the type of shipment, update the information below:
Order Date, Exp. date of whenDelivery, Delivery Fee */

var shipments = 
{
    'standard': {
        'leadTime': 7,
        'fee': 2
    },
    'express': {
        'leadTime': 3,
        'fee': 4.5
    }
};

var currDate = new Date();
var isoDate = currDate.toISOString().substr(0, 10);
function    whenDelivery(delDelay)
{
    var delDate = new Date ();
    currDate.setDate(currDate.getDate() + delDelay);
    delDate = currDate.toISOString().substring(0, 10);
    return delDate;
}

document.getElementById("shipments").onchange = function() 
{
    var selected = document.getElementById("shipments").value;
    var leadTime = shipments[selected].leadTime;
    var fee = shipments[selected].fee;

    document.getElementById("order_date").innerHTML = isoDate;
    document.getElementById("delivery_date").innerHTML = new Date(whenDelivery(leadTime));
    document.getElementById("delivery_fee").innerHTML = Math.floor(fee).toFixed(2);
}

//2.
/* Update the product's name, price and image when changing the selected option. 
The price should be shown with 2 decimal places and should be preceded by the currency.
Use the object below to retrieve the product information:*/
var phones = 
{
    'iphone_se_red': {
        'name': 'iPhone SE 64GB Red',
        'price': '450',
        'currency': 'US$',
        'imageUrl': "js/mercicat4_660.jpg"
    },
    'iphone_11_black': {
        'name': 'iPhone 11 128GB Black',
        'price': '869',
        'currency': 'EUR',
        'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
    },
    'iphone_8_plus_silver': {
        'name': 'iPhone 8 Plus 64GB Silver',
        'price': '519',
        'currency': 'US$',
        'imageUrl': "https://cdn.myshoptet.com/usr/www.iphonarna.cz/user/shop/big/1625_apple-iphone-8-plus-64gb-silver.png?6387f80d"
    }
};

var phoneList = document.getElementsByName("product");

for (var i = 0; i < phoneList.length; i++)
{
    if (phoneList[i].checked)
    {
        document.getElementById("phone_image").src = phones[phoneList[i].value].imageUrl;
        document.getElementById("phone_name").src = phones[phoneList[i].value].name;
        document.getElementById("phone_price").src = phones[phoneList[i].value].currency + " " + parseFloat(phones[phoneList[i].value].price).toFixed(2);
    } 
    phoneList[i].onchange = function() 
    {
        for (var a = 0; a < phoneList.length; a++)
        {   
            if (phoneList[a].checked)
            {
                document.getElementById("phone_image").src = phones[phoneList[a].value].imageUrl;
                document.getElementById("phone_name").innerHTML = phones[phoneList[a].value].name;
                document.getElementById("phone_price").innerHTML = phones[phoneList[a].value].currency + " " + parseFloat(phones[phoneList[a].value].price).toFixed(2);
            }
        }
    }
}

//3.
/* Make the stopwatch below work.
The format is in hours, minutes, seconds and milliseconds */

var miliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

var timeInterval;

function stopTimer()
{
    window.clearInterval(timeInterval);
    timeInterval = null;
}

function resetTimer ()
{
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    window.clearInterval(timeInterval);
}

function runTimer()
{
    timeInterval = window.setInterval(function ()
    {
        miliseconds += 10;
        if (miliseconds >= 1000)
        {
            seconds++;
            miliseconds = 0;
        }
        if (seconds >= 60)
        {
            minutes++;
            seconds = 0;
        }
        if (minutes >= 60)
        {
            hours ++;
            minutes = 0;
        }
        document.getElementById("stopwatch").innerHTML = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + " " +
        (miliseconds < 100 ? (miliseconds < 10 ? "00" + miliseconds : "0" + miliseconds) : miliseconds);
   }, 10);    
}

 function startStop()
{
    if (timeInterval)
    {
        console.log("timer already running");
        stopTimer();
    }
    else
        runTimer();
}

document.getElementById("start_stop").onclick = function () {startStop()};
document.getElementById("reset").onclick = function()
{
    resetTimer();
    document.getElementById("stopwatch").innerHTML = "00:00:00 000";
}