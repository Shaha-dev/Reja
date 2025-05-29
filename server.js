console.log("Web Serverni boshlash");     // Shundan song: npm install express (--save) save yozmasagham by default bizga express save qilip beradi      =     (install qilamiz)
const express = require("express");        // EXPRESS:  Documentationida undan INSTANT (EXPRESS ning {APP} OBJECTINI yuboradi)
const app = express();




// EXPRESSNING 4 xil shaklda shakillantirish

// 1 = KIRISH KODI 

// // EXPRESSga kirip kelayotgan malumotlarga bogliq bolgan kodlar yoziladi
app.use(express.static("public"));   //  Bu har qanday browserdan kirip kelayotkan zaproslar uchun "PUBLIC" folder ochiq degan manoni angladi va koroladi
                                     //  Google Chrome EXPRESSka request qilayotkan payt "PUBLIC" folderini clientlarga ochip berayapmiz
                                     //  Keyinchalik bu FOLDER ichiga CSS stylingda boladigan imidjlarni shuni ichiga joylanadi 
app.use(express.json());    // Bu operationimiz EXPRESS.JSON deganda kirip kelayotkan json formattagi datani OBJECT holatiga ogirip beradi
app.use(express.urlencoded({extended: true}));    // Bu codimiz HTML dan Traditional request form degan shakl (FORM dan bror nima post qilsak bizni EXPRESS serverimiz qabul qilip oladi. Bu kodni yozish kerak bolmasa oqimidi)   
const http = require("http");

// // 2 = Sessions Codes 


// 3 = VIEW codes 
//BSS  <BackEnd Server SideRendering>   BACKEND da view yasaymiz va biz EJS dan foydalanamiz (EJS ni install qilish kerak)  "npm install ejs"
app.set("views", "views");            // Bundan keyin CHAP tomonda VIEW FOLDER ochish zarur boladi
app.set("view engine", "ejs");   


// // 4 Routing code

app.get("/Hello", function(req, res) {  // "/" manashu tayoqdan keyin bror nima yozsa boladi masalan "GIFT" (Masalan asosiy page ichida GIFT bolimiga otsa ishlatiladi)
res.end(`<h1 style="background: red">Hello MIT 27</h1>`);  // AGAR STYLE qoshmoqchi bolsak SUPPER STRING ichiga yozoshimiz kerak STYLE bolmasa ikta "" shunaqani ichiga yozsak boladi
});


app.get("/gift", function(req, res) {  
res.end(`<h1>You are in the gift page</h1>`);  
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT , function() {
    console.log(`The server is running successefully on PORT: ${PORT}`);
});





// GIT


// GIT IGNORE bizi GITimizga yozilishi kerak bolmagan narsalarni yozamiz. NODE MODULE ni yozmemiz

// git status  = GIT ni statusini korip beradi va nimaiki kamchilik bolsa chiqarip beradi

// git add .   = Shu bilan osha kamchiliklarni TOLDIRADI va yana git status qilsak result korishimiz mumkun

// git commit -m "BRR: building express web framework" ?????

// git branch - biz faqat MASTER branch ni hosil qildik shuyergacha

// git log --oneline - 

// git hub - faqat mani desktopimda emas boshqalar ham ishlata olish uchun ishlatamiz (????)

// npm run dev



// NPM RUN DEV - qilsak bu bizga SERVER.JS ni ishka tushuradi








// // TEST CODE

// // Starting poin
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




// FRONDEND ni QURISH 2 XIL USULDA AMALGA OSHIRILADI
//          1. "Traditional Usul" (EJS frame workdan foydalangan holda) backendning ichida frontendni qurish  =  BSSR - BackEnd Server Side Rendering {Backendda HTML qurip browserga yuboramiz}
//          2. "Single Page Application" usuli














