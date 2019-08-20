// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT
function addNew() {
        var newName = prompt('What name would you like to add?')
        roster.push(newName)
}


// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

function remove() {
        var remName = prompt('What name would you like to remove?')
        var index = roster.indexOf(remName);
if (index > -1) {
  roster.splice(index, 1);
}
}

// DISPLAY ROSTER

// Create a function called display that prints out the roster to the console.
function display() {
        console.log(roster);
}

// Start by asking if they want to use the web app

// var name = []

var start = prompt('Would you like to start the web app? y/n')
var request = 'empty';


if(start === 'y'){
        while (request !== 'quit') {
                request = prompt('Please select an action: add, remove, disply or quit')
                if (request === 'add') {
                        addNew()
                } else if(request === 'remove'){
                        remove()
                } else if (request === 'display') {
                        display()
                } else{
                        alert('Not recognized')
                }
        }
} alert('Thank you for using our web app. Have a nice day')
