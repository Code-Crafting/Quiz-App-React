const data = [
  {
    no: 1,
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<scripting>", "<script>", "<javascript>", "<js>"],
    correctAns: "<script>",
  },
  {
    no: 2,
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element? <p id='demo'>This is a demonstration.</p>",
    options: [
      "#demo.innerHTML = 'Hello World!'",
      "document.getElementByName('p').innerHTML = 'Hello World!'",
      "document.getElement('p').innerHTML = 'Hello World!'",
      "document.getElementById('demo').innerHTML = 'Hello World!'",
    ],
    correctAns: "document.getElementById('demo').innerHTML = 'Hello World!'",
  },
  {
    no: 3,
    question: "Where is the correct place to insert a JavaScript?",
    options: [
      "The <head> section",
      "Both <head> and <body> section",
      "The <body> section",
      "After <body> section",
    ],
    correctAns: "Both <head> and <body> section",
  },
  {
    no: 4,
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script rel='xxx.js'>",
    ],
    correctAns: "<script src='xxx.js'>",
  },
  {
    no: 5,
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alert('Hello World')",
      "alertBox('Hello World')",
      "msg('Hello World')",
      "msgBox('Hello World')",
    ],
    correctAns: "alert('Hello World')",
  },
  {
    no: 6,
    question: "How do you create a function in JavaScript?",
    options: [
      "function:myFunction()",
      "function myFunction()",
      "function = myFunction()",
      "Function myFunction()",
    ],
    correctAns: "function myFunction()",
  },
  {
    no: 7,
    question: "How do you call a function named 'myFunction'?",
    options: [
      "myFunction()",
      "call function myFunction()",
      "call myFunction()",
      "call Function myFunction()",
    ],
    correctAns: "myFunction()",
  },
  {
    no: 8,
    question: "How to write an IF statement in JavaScript?",
    options: ["if i == 5 then", "if i = 5 then", "if i = 5", "if (i == 5)"],
    correctAns: "if (i == 5)",
  },
  {
    no: 9,
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    options: ["if (i <> 5)", "if i <> 5", "if (i != 5)", "if (i =! 5) then"],
    correctAns: "if (i != 5)",
  },
  {
    no: 10,
    question: "How does a WHILE loop start?",
    options: [
      "while (i <= 10; i++)",
      "while (i <= 10)",
      "while i = 1 to 10",
      "while (i <= 10; i--)",
    ],
    correctAns: "while (i <= 10)",
  },
  {
    no: 11,
    question: "How does a FOR loop start?",
    options: [
      "for (i = 0; i <= 5; i++)",
      "for (i <= 5; i++)",
      "for (i = 0; i <= 5)",
      "for i = 1 to 5",
    ],
    correctAns: "for (i = 0; i <= 5; i++)",
  },
  {
    no: 12,
    question: "In which year Brendan Eich developed JavaScript?",
    options: ["1990", "1995", "1998", "1992"],
    correctAns: "1995",
  },
  {
    no: 13,
    question: "How can you add a comment in a JavaScript?",
    options: [
      "//This is a comment",
      "?This is a comment",
      "--This is a comment--",
      "<!--This is a comment-->",
    ],
    correctAns: "//This is a comment",
  },
  {
    no: 14,
    question: "How to insert a comment that has more than one line?",
    options: [
      "//This comment has more than one line//",
      "<!--This comment has more than one line-->",
      "/*This comment has more than one line*/",
      "/This comment has more than one line/",
    ],
    correctAns: "/*This comment has more than one line*/",
  },
  {
    no: 15,
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = 'red','green', 'blue'",
      "var colors = 1 = ('red'),2 = ('green'),3 = ('blue')",
      "var colors = ['red', 'green', 'blue']",
      "var colors = (1:'red', 2:'green', 3:'blue')",
    ],
    correctAns: "var colors = ['red', 'green', 'blue']",
  },
  {
    no: 16,
    question: "How do you round the number 7.25, to the nearest integer?",
    options: ["Math.round(7.25)", "round(7.25)", "rnd(7.25)", "Math.rnd(7.25)"],
    correctAns: "Math.round(7.25)",
  },
  {
    no: 17,
    question: "How do you find the number with the highest value of x and y?",
    options: ["Math.max(x,y)", "ceil(x,y)", "Math.ceil(x,y)", "top(x,y)"],
    correctAns: "Math.max(x,y)",
  },
  {
    no: 18,
    question: "How can you detect the client's browser name?",
    options: [
      "client.navName",
      "navigator.appName",
      "browser.name",
      "delete.name",
    ],
    correctAns: "navigator.appName",
  },
  {
    no: 19,
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
    correctAns: "onclick",
  },
  {
    no: 20,
    question: "How do you declare a JavaScript variable?",
    options: ["v carName", "var carName", "variable carName", "var (carName)"],
    correctAns: "var carName",
  },
  {
    no: 21,
    question: "Which operator is used to assign a value to a variable?",
    options: ["x", "=", "-", "*"],
    correctAns: "=",
  },
  {
    no: 22,
    question: "What will the following code return: Boolean(10 > 9)",
    options: ["false", "true", "NaN", "undefined"],
    correctAns: "true",
  },
  {
    no: 23,
    question: "How many data types are there in JavaScript?",
    options: ["5", "6", "7", "8"],
    correctAns: "8",
  },
  {
    no: 24,
    question: "What is the data type of Null?",
    options: ["Object", "NaN", "Null", "String"],
    correctAns: "Object",
  },
  {
    no: 25,
    question: "Which one of the following is called Sanke Case?",
    options: ["user_name", "userName", "user-name", "UserName"],
    correctAns: "user_name",
  },
];

export default data;
