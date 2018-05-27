const fs = require("fs");

//write out data
function done(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

//where we will store our commands
function evaluateCmd(userInput) {
 //parses the user input to understand which command was typed
  const userInputArray = userInput.split(" ");
  const command = userInputArray[0];

  switch (command) {
   case "echo":
    //we will add the functionality of echo next within the object commandLibrary
     commandLibrary.echo(userInputArray.slice(1).join(" "));
     break;

    case "cat":
    commandLibrary.cat(userInputArray.slice(1));
    break;

    case "head":
    commandLibrary.head(userInputArray.slice(1));
    break;

    case "tail":
    commandLibrary.tail(userInputArray.slice(1));
    break;

    default:
    commandLibrary.default(userInput);
    break;
 }
}

//where we will store the logic of our commands
const commandLibrary = {
  //add echo command
  "echo": function(userInput){
    done(userInput);
  },
  //add cat command
  "cat": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        done(data);
    });
  },
  //add head command
  "head": function(fullPath){
    const fileName = fullPath[0];
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) throw err;
      let stringData = JSON.stringify(data);
      stringData = stringData.split('\\n', 5);
      stringData.forEach(function(element, index){
        console.log(`${index + 1}: ${element}`);
        data = '';
        done(data);
      })
    });
  },
  //add tail command
  "tail": function(fullPath){
    const fileName = fullPath[0];
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) throw err;
      let stringData = JSON.stringify(data);
      stringData = stringData.split('\\n');
      if (stringData.length > 5) {
        stringData = stringData.slice(stringData.length - 5, stringData.length);
        stringData.forEach(function(element, index){
          console.log(`${index + 1}: ${element}`);
          data = '';
          done(data);
        });
      }
    });
  },
  //add error command
  "default": function(userInput){
    done(`Error: ${userInput} is not a command`);
  }
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;
