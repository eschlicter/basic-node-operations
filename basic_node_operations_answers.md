Questions
>Run the commands sort, wc and uniq on the commands.js file. Explain how they work and what the output was.

`sort` prints out all the lines of code in sorted order (alphabetically).
```
Emilys-iMac:basic-node-operations emilyschlicter$ sort bash.js


  commands.evaluateCmd(userInput);
  userInput = userInput.toString().trim();
 //evaluateCmd is a function which will be implemented in commands.js
// The stdin 'data' event triggers after a user types in a line
//prompt the user for input
const commands = require("./commands.js");
process.stdin.on('data', (userInput) => {
process.stdout.write('prompt > ');
});
```
`wc` stands for word count. It prints the counts for newline, word, and byte.
```
Emilys-iMac:basic-node-operations emilyschlicter$ wc bash.js
      11      44     366 bash.js
```

`uniq` sorts each line and only returns unique lines. If there is a duplicate, it is not displayed.

```
Emilys-iMac:basic-node-operations emilyschlicter$ uniq bash.js
const commands = require("./commands.js");

//prompt the user for input
process.stdout.write('prompt > ');

// The stdin 'data' event triggers after a user types in a line
process.stdin.on('data', (userInput) => {
  userInput = userInput.toString().trim();
 //evaluateCmd is a function which will be implemented in commands.js
  commands.evaluateCmd(userInput);
});
```

>Using the pipe (|) connect at least two commands and run it on commands.js. Explain what the output was and why the specific data was outputted.

```
Emilys-iMac:basic-node-operations emilyschlicter$ uniq commands.js | wc
      43     118    1069
```

First, the duplicate lines are removed and then the newlines, words, and bytes are counted.

>Reverse String:
Given a string, reverse the order of characters in each word within a sentence while maintaining the original word order and whitespace and return the string. To improve your problem-solving experience, use the suggested functions to solve the problem.
