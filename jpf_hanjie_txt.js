"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Tutorial Case

   Author: Francisco Reyes
   Date:   11/25/2024

   Global Variables
   ================
   
   puzzleCells
      References the TD cells within the Hanjie table grid.
   
   cellBackground
      Stores the current background color of the puzzle
      cells during the mouseover event.
      
      
   Function List
   =============

   init()
      Run when the web page is loaded; displays puzzle 1
      and loads the event handlers for the web page buttons.
      
   setupPuzzle()
      Sets up a new puzzle, adding the event handlers for
      every puzzle cell.      

   swapPuzzle(e)
      Swaps one puzzle for another based on the button being clicked
      by the user. Confirms the change before swapping in the
      new puzzle.

   setBackground(e)
      Sets the background color of the puzzle cells during the mousedown
      event

   extendBackground(e)
      Extends the background color of the original puzzle cell during
      the mouseenter event.
      
   endBackground()
      Ends the action of extending the cell backgrounds in response to the
      mouseup event.

   drawPuzzle(hint, rating, puzzle)
      Returns a text string of the HTML code to
      display a hanjie Web table based on the contents of
      multi-dimensional array, puzzle.
	
*/

// run the init() function when page loads 

Window.onload = init;

// global variable to store the array of all the puzzle's cells and the current background color of the cells
let puzzlecells
let cell setbackground
// defintion of the init() function
       function init() {  
// Insert the title for the puzzle game
document.getElementById("puzzelTitle").innerHTML = "puzzle 1"
function drawPuzzle(hint, rating, puzzle) {
   // Insert the HTML code for the first puzzle table
   Document.getElementById("puzzel").innerHTML = drawpuzzle (puzzle1Hint, puzzle1rating, puzzle1);

   //add event handlers for the green puzzle buttons
   let puzzle buttons = document.getElementBYClassName("puzzles");
   for(let i = 0; i < puzzelButtons.length; 1++) {
      // add the onclick event handler to each puzzle button in the array
      puzzelButtons[i].oneclick
  } //end of the init() function

   /* Initial HTML String for the Hanjie Puzzle */
   var htmlString = "";
function swapPuzzle
   /* puzzle is a multidimensional array containing the
      Hanjie puzzle layout. Marked cells are indicated by
      the # character. Empty cells are indicated by an
      empty text string. First, determine the number of rows
      and columns in the puzzle */

   var totalRows = puzzle.length;
   var totalCols = puzzle[0].length;
switch(puzzleId) {
case"puzzle":
   document.geftElementById("puzzle").innerHTML =drawpuzzle(puzzle1hint, puzzle1rating,
      puzzle1);
   break;
case"puzzle2":
   document.getElementBYId ("puzzle").innerHTML =drawpuzzle(puzzle3hint, puzzle3rating, puzzle3);
   break;
   /* Loop through the rows to create the rowCount array
      containing the totals for each row in the puzzle */

   var rowCount = [];
   var spaceCount;
   for (var i = 0; i < totalRows; i++) {
      rowCount[i]="";
      spaceCount = 0;

      for (var j = 0; j < totalCols; j++) {
         if (puzzle[i][j] === "#") {
            spaceCount++;
            if (j === totalCols-1) {
               rowCount[i] += spaceCount + "&nbsp;&nbsp;";
            }
         } else {
            if (spaceCount > 0) {
               rowCount[i] += spaceCount + "&nbsp;&nbsp;";
               spaceCount = 0;
            } 
         }    
      }

   }
function setbackground
cellbackground = "rgb(101, 101, 101)";
e.target.style.backgroundColor = cellbackground;
   /* Loop through the columns to create the colCount array
      containing the totals for each column in the puzzle */

for(let i =0; i <puzzlecells.length; i++){

   var colCount = [];
   for (var j = 0; j < totalCols; j++) {
      let filled = document.queryselectorall("table#hanjieGrid td.")
      colCount[j]="";
      spaceCount = 0;

      for (var i = 0; i < totalRows; i++) {
         if (filled[i][j] === "#") {
            spaceCount++;
            if (i === totalRows-1) {
               colCount[j] += spaceCount + "<br />";
            }
         } else {
            if (spaceCount > 0) {
               colCount[j] += spaceCount + "<br />";
               spaceCount = 0;
            } 
         }    
      }

   }

   /* Create a Web table with the id, hanjieGrid, containing
      headers with the row and column totals.
      Each marked cell has the class name, marked; each
      empty cell has the class name, empty */


   htmlString = "<table id='hanjieGrid'>";
   htmlString += "<caption>" + hint + " (" + rating + ")</caption>";
   htmlString += "<tr><th></th>";

   for (var j = 0; j < totalCols; j++) {
      htmlString += "<th class='cols'>" + colCount[j] + "</th>";
   }
   htmlString += "</tr>";

   for (var i = 0; i < totalRows; i++) {
      htmlString += "<tr><th class='rows'>&nbsp;" + rowCount[i]+"</th>";

      for (var j = 0; j<totalCols; j++) {
         if (puzzle[i][j] === "#") {
            htmlString += "<td  class='filled'></td>";
         }
         else {
            htmlString += "<td class='empty'></td>";
         }
      }

      htmlString += "</tr>";
   }

   htmlString += "</table>";

   return htmlString;
}