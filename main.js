var fs = require('fs');
const font = {
    "A": ["G1 Y-5", "G1 Z-2", "G1 Y5 X1.5", "G1 Y-5 X1.5", "G1 Z2", "G1 X-1.5 Y2", "G1 Z-2", "G1 X-2", "G1 Z2", "G1 Y3 X3.5"],
    "B": ["G1 Z-2", "G1 Y-5", "G1 Y1 X3", "G1 Y0.5", "G1 Y1 X-3", "G1 Y1 X3", "G1 Y0.5", "G1 Y1 X-3", "G1 Z2", "G1 X3"],
    "C": ["G1 X3", "G1 Z-2", "G1 X-3 Y-2", "G1 Y-1", "G1 X3 Y-2", "G1 Z2", "G1 Y5"],
    "D": ["G1 Z-2", "G1 Y-5", "G1 Y1.5 X3", "G1 Y2", "G1 Y1.5 X-3", "G1 Z2", "G1 X3"],
    "E": ["G1 Z-2", "G1 Y-5", "G1 X3", "G1 Z2", "G1 Y2.5", "G1 Z-2", "G1 X-3", "G1 Z2", "G1 Y2.5", "G1 Z-2", "G1 X3", "G1 Z2"],
    "F": ["G1 Z-2", "G1 Y-5", "G1 Z2", "G1 X3 Y2.5", "G1 Z-2", "G1 X-3", "G1 Z2", "G1 Y2.5", "G1 Z-2", "G1 X3", "G1 Z2"],
    "G": ["G1 X3", "G1 Z-2", "G1 X-2", "G1 X-1 Y-1", "G1 Y-2", "G1 X1 Y-1", "G1 X2 ", "G1 Y1", "G1 X-1", "G1 Z2", "G1 X1 Y3"],
    "H": ["G1 Z-2", "G1 Y-5", "G1 Z2", "G1 X3", "G1 Z-2", "G1 Y5", "G1 Z2", "G1 Y-2.5", "G1 Z-2", "G1 X-3", "G1 Z2", "G1 X3 Y2.5"],
    "I": ["G1 X1.5", "G1 Z-2", "G1 Y-5", "G1 Z2", "G1 X1.5 Y5"],
    "J": ["G1 X2", "G1 Z-2", "G1 Y-5", "G1 X-1", "G1 X-1 Y1", "G1 Z2", "G1 X3 Y4"],
    "K": ["G1 Z-2", "G1 Y-5", "G1 Z2", "G1 Y2.5", "G1 Z-2", "G1 X3 Y-2.5", "G1 Z2", "G1 Y5", "G1 Z-2", "G1 X-3 Y-2.5", "G1 Z2", "G1 X3 Y2.5"],
    "L": ["G1 Z-2", "G1 Y-5", "G1 X3", "G1 Z2", "G1 Y5"],
    "M": ["G1 Y-5", "G1 Z-2", "G1 Y5", "G1 Y-5 X1.5", "G1 Y5 X1.5", "G1 Y-5", "G1 Z2", "G1 Y5"],
    "N": ["G1 Y-5", "G1 Z-2", "G1 Y5", "G1 Y-5 X3", "G1 Y5", "G1 Z2"],
    "O": ["G1 Y-1", "G1 Z-2", "G1 Y-3", "G1 Y-1 X1", "G1 X1", "G1 Y1 X1", "G1 Y3", "G1 Y1 X-1", "G1 X-1", "G1 X-1 Y-1", "G1 Z2", "G1 X3 Y1"],
    "P": ["G1 Y-5", "G1 Z-2", "G1 Y5", "G1 Y-1.25 X3", "G1 Y-0.5", "G1 Y-1.25 X-3", "G1 Z2", "G1 X3 Y3"],
    "Q": ["G1 Y-1", "G1 Z-2", "G1 Y-3", "G1 Y-1 X1", "G1 X1", "G1 Y1 X1", "G1 Y3", "G1 Y1 X-1", "G1 X-1", "G1 X-1 Y-1", "G1 Z2", "G1 X2 Y-3", "G1 Z-2", "G1 X1 Y-1", "G1 Z2", "G1 Y5"],
    "R": ["G1 Y-5", "G1 Z-2", "G1 Y5", "G1 Y-1.25 X3", "G1 Y-1.25 X-3", "G1 Y-2.5 X3", "G1 Z2", "G1 Y5"],
    "S": ["G1 X3", "G1 Z-2", "G1 X-2", "G1 X-1 Y-0.75", "G1 Y-1", "G1 X1 Y-0.75", "G1 X1", "G1 X1 Y-0.75", "G1 Y-1", "G1 Y-0.75 X-1", "G1 X-2", "G1 Z2", "G1 X3 Y5"],
    "T": ["G1 Z-2", "G1 X3", "G1 Z2", "G1 X-1.5", "G1 Z-2", "G1 Y-5", "G1 Z2", "G1 X1.5 Y5"],
    "U": ["G1 Z-2", "G1 Y-4", "G1 Y-1 X1", "G1 X1", "G1 Y1 X1", "G1 Y4", "G1 Z2"],
    "V": ["G1 Z-2", "G1 X1.5 Y-5", "G1 X1.5 Y5", "G1 Z2"],
    "W": ["G1 Z-2", "G1 X0.75 Y-5", "G1 X0.75 Y5", "G1 X0.75 Y-5", "G1 X0.75 Y5", "G1 Z2"],
    "X": ["G1 Z-2", "G1 X3 Y-5", "G1 Z2", "G1 Y5", "G1 Z-2", "G1 X-3 Y-5", "G1 Z2", "G1 X3.5 Y5"],
    "Y": ["G1 Z-2", "G1 X1.5 Y-2", "G1 X1.5 Y2", "G1 Z2", "G1 X-1.5 Y-2", "G1 Z-2", "G1 Y-3", "G1 Z2", "G1 Y5 X1.5"],
    "Z": ["G1 Z-2", "G1 X3", "G1 X-3 Y-5", "G1 X3", "G1 Z2", "G1 Y5"],
    " ": ["G1 X3"],
    "?": ["G1 Y-1", "G1 Z-2", "G1 X1 Y1", "G1 X1", "G1 X1 Y-1", "G1 X-1 Y-1", "G1 X-1", "G1 X-1 Y-1", "G1 X1 Y-1", "G1 X1", "G1 X1 Y1", "G1 Z2", "G1 X-1.25 Y-1.5", "G1 Z-2", "G1 X-0.5", "G1 Y-0.5", "G1 X0.5", "G1 Y0.5", "G1 Z2", "G1 X1.25 Y4.5"],
    "SPACE": ["G1 X1"]
};

const startC = 10; //Sets the Column in which to start in mm from X0 (Left border)
const startR = 200; //Sets the Row to Start from in mm from Y0 (Bottom Border)
const travelHeight = 10; //Sets the Travel-height of the pen
const headHeigth = 5;   //Offset of the head from the bed
const fileName = "generated/toBeFairPart1.gcode"; //Specifies the name for the Output-file

var letterLength = 0; //Counts the length of the current row in mm
var charCount = 0;  //The amount of chars in the text
var curChar = 0;    //The index of the current char

//Deletes the file if it exists and opens a stream to write to it
if (fs.existsSync(fileName)) {
    console.log("filename already in use! Deleting file...");
    try {
        fs.unlinkSync(fileName);
    } catch (err) {
        console.log("There was an error deleting the file! \n" + err);
    }
}
var stream = fs.createWriteStream(fileName, {
    flags: 'a'
});

//The main magic:
function writeGCode(text) {
    appendToFile("M117 Printer-mode"); //Print the text "Printer-mode" onto the 3D-Printer's screen
    appendToFile("G28"); //Move the Print-Head to it's origin (X0,Y0,Z0)
    appendToFile("G91"); //Set to relative Positioning. From now on all moving Coordinates will be relative positioned instead of absolute
    appendToFile("G1 Z" + (travelHeight + headHeigth)); //Lifts the Pen to it's Travel-height and add the head-height
    appendToFile("G1 Y" + startR + " X" + startC); //Positions the Pen above the Starting-point
    appendToFile("G1 Z-" + (travelHeight - 2)); //Lowers The pen so it barely doesn't touch the paper

    //Splits the input-text by char and goes trough it char-by-char
    var split = text.split("");
    
    charCount = split.length;

    split.forEach(function (e) {
        appendToFile("M117 " + (curChar + 1) + "/" + charCount + " " + Math.round((curChar/charCount)*100) + "%"); //Print the Progress
        var temp = e.toUpperCase(); //Tis is only Temorary

        //appendToFile(";START \"" + temp + "\""); //Writes a comment into the file. Makes debugging easier
        //If the Current char is in the Font-object, append it's gcode-snippet to the result-file
        if (font[temp] && temp != "\n") {
            font[temp].forEach(function (el) {
                appendToFile(el);
            });
            //If The char is not on the Font-object nor a Line-break add a ?-Symbol to show that this can't be printed.
            //This is a failsafe of some sorts and should never happen
        } else if (temp != "\n") {
            font["?"].forEach(function (el) {
                appendToFile(el);
            });
        }

        //If the current char isn't a line-break, make some space and increase the letter-length
        if (temp != "\n") {
            appendToFile(font["SPACE"]); //Make spme space between the letters
            letterLength += 4; //Increase the current Letter-length by the With of a letter and a space.
        }

       
        //appendToFile(";END\"" + temp + "\""); //This is another comment for debugging the gcode

        //If the letter-length is long enough or if the current char is a Line-break. Go to the next line
        if (letterLength >= (startC + 128) || temp == "\n") {
            appendToFile(";Line-Break"); //Again, comment for debugging gcode
            appendToFile("G1 Z" + travelHeight); //Move the pen to Travel-height
            appendToFile("G1 Y-6 X-" + letterLength); //Go back the same distance you already wrote
            appendToFile("G1 Z-" + travelHeight); //Lower the Pen
            letterLength = 0; //Set the letterlength to the beginning, so it can start again
        }
        
        curChar++;
    });

    appendToFile("G1 Z" + travelHeight + " \nG90"); //After finishing all the text, move the Pen to it's travel-height and set all movement back to absolute
}

//This functions appends text to the output-file
//It will do more in the future
function appendToFile(str) {
    if (str != undefined) {
        stream.write(str + " \n");
    }
}

writeGCode("To be fair you have to have\na very high IQ to under\nstand Rick and Morty The\nhumor is extremely subtle\nand without a solid grasp\nof theoretical physics most\nof the jokes will go over a\ntypical viewers head Theres\nalso Ricks nihilistic out\nlook which is deftly woven\ninto his characterisation\nhis personal philosophy\ndraws heavily from\nNarodnaya Volya literature\nfor instance The fans under\nstand this stuff they have\nthe intellectual capacity\nto truly appreciate the\ndepths of these jokes to\nrealize that theyre not\njust funny they say some\nthing deep about LIFE As a\nconsequence people who\ndislike Rick and Morty");
stream.end(); //don't forget to close the stream :D