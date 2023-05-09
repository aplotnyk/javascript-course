//1.
/* Create a function to convert Celsius to Fahrenheit.
Use it to convert the temperatures below: */

var ce1 = parseFloat(document.getElementById("celsius_1").innerHTML);
var ce2 = parseFloat(document.getElementById("celsius_2").innerHTML);
var ce3 = parseFloat(document.getElementById("celsius_3").innerHTML);

function conversion(ce)
{
    return (9 * ce / 5) + 32;
}
document.getElementById("fahr_1").innerHTML = conversion(ce1);
document.getElementById("fahr_2").innerHTML = conversion(ce2);
document.getElementById("fahr_3").innerHTML = conversion(ce3);

//2.
/* The array below is the classification of students in a contest.
It is ordered from lowest to highest grades. */
var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];

document.getElementById("best_students").innerHTML = classification.slice(-3);

//3.
/* Consider the object below:
a) Show the course title in the box below:
b) The main category is the first element of the categories array. Show it in the box below:
c) Create a method to calculate the percentage of 5 stars reviews
   rounded with no decimal places and show the result below:
*/
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}

function reviews(course)
{
    var totalrev = course['5_stars_reviews'] + course['4_stars_reviews'] + course['3_stars_reviews'] + course['2_stars_reviews'] + course['1_stars_reviews'];
    var result = (course['5_stars_reviews'] / totalrev) * 100;
    return Math.round(result);
}
document.getElementById("course_title").innerHTML = course.title;
document.getElementById("main_category").innerHTML = course.categories[0];
document.getElementById("reviews_5_stars").innerHTML = reviews(course).toString() + "%";

//4.
/* Do the following changes to the list:
Get the last item and place it at the beginning of the list.
Add two more items at the end of the list: Cheese and Eggs
 */

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];

shoppingList.unshift(shoppingList.pop());// .pop - removes the last element of the array and returns it; .unshift adds the element to rhe beginning of the array
shoppingList.push("Cheese", "Eggs");

console.log(shoppingList);