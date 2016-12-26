// Array of first half of band name 
var firstBand = [
    "Rancid", "Insane", "Black", "Iron",
    "Holy", "Rabid", "Bloody", "Satan's",
    "Bastard", "Forsaken", "Hell's",         
    "Forbidden", "Dark", "Frantic", "Devil's",
    "Evil", "Inner", "Bleeding", "Guilty",
    "Witch's", "Heavy", "Illegal", "Fallen",
    "Sinister", "Crazy", "Troubled"];

// Array of second half of band name 
var lastBand = [
    "Empire", "Fury", "Rage", "Zombies", "Sin", 
    "Warriors", "Angels", "Death", "Anarchy",
    "Henchmen", "Kill", "Vengeance", 
    "Tendencies", "Magic", "Soldier", "Gods",
    "Goblin", "Spawn", "Temple", "Realm", 
    "Hate", "Slaves", "Thorn", "Abyss",
    "Fire", "Secrets"];
    
// Array of alphabet 
var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Function to generate band name based on user name entry 
function generate() {

    // Assign first name input to variable 
   var firstN = document.getElementById("firstName").value;
   
   // Assign first letter of first name to variable 
   var firstLet = firstN.charAt(0).toUpperCase();
   
   // Assign last name input to variable 
   var lastN = document.getElementById("lastName").value;
   
   // Assign first letter of last name to variable 
   var lastLet = lastN.charAt(0).toUpperCase();
   
   // Cycle through alphabet array to see what position first letter in first name is located 
   var x = 0;
   while(firstLet != alpha[x]) {
       x++
   };
   // Select corresponding first band name from array 
   var firstB = firstBand[x];

   // Cycle through alphabet array to see what position first letter in last name is located 
   var y = 0;
   while(lastLet != alpha[y]) {
       y++
   };
   // Select corresponding last band name from array 
   var lastB = lastBand[y];
   
   // Display band name
   var bandN = document.getElementById("bandName");
   bandN.innerHTML = firstB + " " + lastB;
}

function random() {
    // Generate random value for first entry 
    var firstB = firstBand[Math.floor(Math.random() * firstBand.length)];
    
    // Generate random value for last entry
    var lastB = lastBand[Math.floor(Math.random() * lastBand.length)];
   
   // Display band name
   var bandN = document.getElementById("bandName");
   bandN.innerHTML = firstB + " " + lastB;
}