// B-TASK "EJS FRAMEWORK"

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>PLAN</title>
//     <link 
//     rel="stylesheet"
//    href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
//     integrity="sha384-GJzZqFGwb1QTINGwy59ffF1BuGJpLSa9DkkMp0DgiMDm41YMj70gWKYbI76tMS"
//     crossorigin="anonymous"
//     />
// </head>
// <body style="background-color:bisque">
//     <div class="container">
//         <h1 class="display4 text-center py-1">Reja va Maqsadlar</h1>
    
    
//     </div>
// </body>
// </html>

// starting point

// console.log("Web Swerverni boshlash");     
// const express = require("express");        
// const app = express();

// // 1
// app.use(express.static("public"));
// app.use(express.json());    
// app.use(express.urlencoded({extended: true})); 

// // 2 yoq--

// // 3
// app.set("views", "views");            
// app.set("view engine", "ejs"); 

// // 4

// const http = require('http');        // (************)  shuni qoymasam bolmadi
// app.get("/", function (req, res) {
//     res.render("harid");
// });

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT , function() {
//     console.log(`The server is running successefully on PORT: ${PORT}`);
// });











// A-TASK

// TRAIN.JS ni ishka tushurish uchun PACKAJE.JSON da uni ishka tushurip beradi - 
// "dev" ni pasiga "train" starting command ni hosil qilaman va bu train js ni ishka tushurip beradi -
// "train": "nodemon train.js", (qilsak ishka tushuramiz)

// npm run start = HOMEWORK ni ishka tushurmoqchi bolsak shunda ishlatamiz

// console.log("TRAIN AREA");

// TEST CODE

// Starting poin "EXPRESS FRAMEWORK"

// console.log("Web Swerverni boshlash");     
// const express = require("express");        
// const app = express();

// // 1
// app.use(express.static("public"));
// app.use(express.json());    
// app.use(express.urlencoded({extended: true})); 

// // 2 yoq--

// // 3
// app.set("views", "views");            
// app.set("view engine", "ejs"); 

// // 4
// app.get("/", function(req, res) {
// res.end("Hello MIT 27");
// });

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT , function() {
//     console.log(`The server is running successefully on PORT: ${PORT}`);
// });