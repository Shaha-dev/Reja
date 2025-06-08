// console.log("===== EXECUTE =====");

// // DEFINE
// function subtract(a, b, callback) {
//   if (b === 0) {
//     callback("Manga 19 chiqarip ber", null);
//   } else {
//     callback(null, a % b);
//   }
// }

// // CALL
// subtract(39, 20, (err, data) => {
//   if (err) console.log("Error:", err);
//   else {
//     console.log("data:", data);
//   }
// });


// TASK A "Home work"

// function countLetter(letter, word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// // Call
// console.log(countLetter("e", "engineer")); // Result: 3



// ===========================================================================================

// TASK D

// console.log("Jack Ma Maslahatlari");
// const list = [
//     "Yahshi talaba boling", // 0-20
//     "Togri boshliq tanlang va koproq hato qiling", // 20-30
//     "Ozingizni ishlaringizni boshlang", // 30-40
//     "Siz kuchliy bolgan narsalarni qiling", // 40-50
//     "Yoshlarga investitsiya qiling", // 50-60
//     "Dam olish vaqti keldi, foydasi yoq endi", // 60
// ];



// // "CallBack Function"
// function maslahatBering(a, callback) {   
//    if(typeof a !=='number') callback("instert a number","null") // "error or null","data(if no data NULL"
//    else if (a <= 20) callback(null, list[0]);
//    else if (a > 20 && a <= 30) callback(null, list[1]);
//    else if (a > 30 && a <= 40) callback(null, list[2]);
//    else if (a > 40 && a <= 50) callback(null, list[3]);
//    else if (a > 50 && a <= 60) callback(null, list[4]);
//    else {
//     setInterval(function() {
//         callback(null,list[5]);     // function
//     }, 2000);                       // 2ta "PARAMETR" oladi function bilan time
//                                     //   callback(null,list[5]);
//    }     
// }

// // "CALLBACK FUNCTION"

// console.log("Passed here 0");
// maslahatBering(70, (err, data) => {            // "Parametr sifatida funtion ishga tushadi"  ===  Maslahat bering da (25) son orniga stringda "Salom dep yozsa bizga NULL" beradi
//       if(err) console.log('ERROR:', err);      // Agar hatolik bolsa korsatadi
//             else {
//       console.log('JAVOB:', data);
//     }
// });
// console.log("Passed here 1");













// CallBack functionni Asynchronus Functionga ozgartiramiz


// console.log("Jack Ma Maslahatlari");
// const list = [
//     "Yahshi talaba boling", // 0-20
//     "Togri boshliq tanlang va koproq hato qiling", // 20-30
//     "Ozingizni ishlaringizni boshlang", // 30-40
//     "Siz kuchliy bolgan narsalarni qiling", // 40-50
//     "Yoshlarga investitsiya qiling", // 50-60
//     "Dam olish vaqti keldi, foydasi yoq endi", // 60
// ];

// asynchroneus qilip Functiondi define qilamiz
// ""asynchroneus function""

//  async function maslahatBering(a, callback) {   
//    if(typeof a !=='number') throw new Error ("instert a number") 
//    else if (a <= 20) return list [0];                                                    // javob kelayotkanda faqat javobni return qilamiz
//    else if (a > 20 && a <= 30) return list [1];
//    else if (a > 30 && a <= 40) return list [2];
//    else if (a > 40 && a <= 50) return list [3];
//    else if (a > 50 && a <= 60) return list [4];                                          // Asynchronus function ichida SetTime out yokiy SetInterval core module functionlar ishlamaydi
//    else {
//           return new Promise((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list[4]);
//             }, 2000);
//           });
//     // setTimeout(function() {
//     //     return list [0];
//     //  }, 5000);    
//    }     
// }

// // CALLBACK
// async function run() {
//     let javob = await maslahatBering(65);    
//     console.log(javob);
// };
// run();












// CALL QISMI  via "than & catch"

// THEN = data
// CATCH = bu yerda ERROR catch qiladi


// THEN & CATCH
// console.log("passed here 0");

// console.log("Passed here 0");
// maslahatBering(25).then(data => {                    // DATA ga tepadagi "A" ning qiymatini berayapmiz. Hatolik yoq bolsa datani qabul qilamiz. Hatolik bolsa ishlamaydi 
//     console.log("Javob:", data);                     // Data da HATOLIK bolsa bu yerda CATCH ishlaydi ERROR chiqaradi

// }).catch(err => {                  
//     console.log("Javob:", err);
// });

// console.log("passed here 1");



// Asunchronus Functionlar Synchronus Functionlar toliq ishka tuship bolgach. Asynchronus function natijalari bilan NODE.JS ishlay boshledi


// "Call via ASYNCHRONUS & AWAIT"
// async function run() {
//     let javob = await maslahatBering(20);    // Asynchronus function da AWAIT qismida toliq javob olmaguncha keyingi qismlar amalga oshmaydi (JAVOB = variable)
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);  
//     javob = await maslahatBering(51);
//     console.log(javob);
//     javob = await maslahatBering(61);
//     console.log(javob);                           // Bittasidan javob kelmasdan ikkinchisi boshlamaydi faqatgina ketma ketlik bilan ishlaydi
// };
// run();























// ======================================================================================================================================================================



// C - TASK "NodeJS event loop va Callback functionlarni o'rganamiz"

// Synchroneus Functions ( Immedetely ishka tushadi)

// console.log("Jack Ma Maslahatlari");
// const list = [
//     "Yahshi talaba boling", // 0-20
//     "Togri boshliq tanlang va koproq hato qiling", // 20-30
//     "Ozingizga ishlaringizni boshlang", // 30-40
//     "Siz kuchliy bolgan narsalarni qiling", // 40-50
//     "Yoshlarga investitsiya qiling", // 50-60
//     "Dam olish vaqti keldi, foydasi yoq endi", // 60
// ];

// function maslahatBering(a, callback) {   
//    if(typeof a !=='number') callback("instert a number","null") // "error or null","data(if no data NULL"
//    else if (a <= 20) callback(null, list[0]);
//    else if (a > 20 && a <= 30) callback(null, list[1]);
//    else if (a > 30 && a <= 40) callback(null, list[2]);
//    else if (a > 40 && a <= 50) callback(null, list[3]);
//    else if (a > 50 && a <= 60) callback(null, list[4]);
//    else {
//     setTimeout(function(){
//         callback(null,list[5]);   // function
//     }, 5000);    // 2ta "PARAMETR" oladi function bilan time
//         //   callback(null,list[5]);
//    }     
// }

// // "CALLBACK FUNCTION"

// console.log("Passed here 0");
// maslahatBering(65, (err, data) => {            // "Parametr sifatida funtion ishga tushadi"  ===  Maslahat bering da (25) son orniga stringda "Salom dep yozsa bizga NULL" beradi
//       if(err) console.log('ERROR:', err);      // Agar hatolik bolsa korsat
//       console.log('JAVOB:', data)
// });
// console.log("Passed here 1");



// ======================================================================================================================================================================





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







// ======================================================================================================================================================================




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