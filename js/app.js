/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the element with the id of "name1":
	- Replace the content with the following string "Tay-Tay"*/

document.getElementById("name1").innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the element with the id of "position2":
	- Replace the content with the following string "Project Manager"
	- Change the background color to red
*/

document.getElementById("position2").innerHTML = "Project Manager";
document.getElementById("position2").style.backgroundColor = "red";

/*3. Piko Taro

Find the element with the id of "alias3":
	- Replace the content with the following string "Concatenation"
	- Change the font size to 40
*/

document.getElementById("alias3").innerHTML = "Concatenation";
document.getElementById("alias3").style.fontSize = "40px";

/*4. Prince

Find the element with the class name of "profile": 
	- Replace the content with a verse from your favorite Prince song
	- Change the styles of the font-family to Sans Serif
*/

document.getElementsByClassName("profile")[0].innerHTML = "When you were mine I gave you all of my money Time after time You done me wrong It was just like a dream You let all my friends come over and meet And you were so strange You didn't have the decency to change the sheets";
document.getElementsByClassName("profile")[0].style.fontFamily = "Sans Serif";

/*5. Bruce Lee

Find the element with the class name of "profile":
	- Replace the content with a quote from the legend himself
*/

document.getElementsByClassName("profile")[1].innerHTML = "WATAH";

/*6. Samuel L Jackson

Find the element with the class name of "alias": 
	- Replace the content with your favorite character that Sammy portrayed
*/

document.getElementsByClassName("alias")[2].innerHTML =  "Neville Flynn";

/*7. Peter Griffin

Create a div element and give it an id of "name7":
	- Inside this div element, give it the contents of "Peter Griffin"
	- Append this div element to the element with id "nameParent"
*/
 
var divCreate = document.createElement("div");
divCreate.id = "name7"; 
divCreate.innerHTML = "Peter Griffin";
document.getElementById("nameParent").appendChild(divCreate)	

/*8. Tim Duncan

Create a div element give it an id of "alias8":
	- Inside this div element, give it the contents of "Old Man Riverwalk"
	- Append this div element to the element with id "aliasParent"

*/

var divCreate1 = document.createElement("div1");
divCreate1.id = "alias8";
divcreate1.id = "Old Man Riverwalk";
document.getElementById("aliasParent").appendChild(divCreate1)


//Final Boss
/*9. Without modifying the HTML file, create your own profile.*/

