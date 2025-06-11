// console.log("Web Serverni boshlash");     // Shundan song: npm install express (--save) save yozmasagham by default bizga express save qilip beradi      =     (install qilamiz)
// const express = require("express");        // EXPRESS:  Documentationida undan INSTANT (EXPRESS ning {APP} OBJECTINI yuboradi)
// const app = express();

// EXPRES>JS = Package nomi (External package bolip keladi)

// EJS = FAQAT HTML ga OHSHAGAN SYNTAX YARATADI



// express server yasash uchun
// express.static ==  css uchun for design

// POST: 
// GET:

// SERVER = Applicationdi ishka tushuradigan narsa
// WEB SERVER APPLICATION = 



// // EXPRESSNING 4 xil shaklda shakillantirish

// // 1 = KIRISH KODI 

// // // EXPRESSga kirip kelayotgan malumotlarga bogliq bolgan kodlar yoziladi
// app.use(express.static("public"));   //  Bu har qanday browserdan kirip kelayotkan zaproslar uchun "PUBLIC" folder ochiq degan manoni angladi va koroladi
//                                      //  Google Chrome EXPRESSka request qilayotkan payt "PUBLIC" folderini clientlarga ochip berayapmiz
//                                      //  Keyinchalik bu FOLDER ichiga CSS stylingda boladigan imidjlarni shuni ichiga joylanadi 
// app.use(express.json());    // Bu operationimiz EXPRESS.JSON deganda kirip kelayotkan json formattagi datani OBJECT holatiga ogirip beradi (tushunadigan til)
// app.use(express.urlencoded({extended: true}));    // Bu codimiz HTML dan Traditional request form degan shakl (FORM dan bror nima post qilsak bizni EXPRESS serverimiz qabul qilip oladi. Bu kodni yozish kerak bolmasa oqimidi)   
// const http = require("http");

// // // 2 = Sessions Codes 


// // 3 = VIEW codes 
// //BSSR  <BackEnd Server SideRendering>   BACKEND da view yasaymiz va biz EJS dan foydalanamiz (EJS ni install qilish kerak)  "npm install ejs"
// app.set("views", "views");            // Bundan keyin CHAP tomonda VIEW FOLDER ochish zarur boladi
// app.set("view engine", "ejs");   


// // // 4 Routing code

// app.get("/Hello", function(req, res) {  // "/" manashu tayoqdan keyin bror nima yozsa boladi masalan "GIFT" (Masalan asosiy page ichida GIFT bolimiga otsa ishlatiladi)
// res.end(`<h1 style="background: red">Hello MIT 27</h1>`);  // AGAR STYLE qoshmoqchi bolsak SUPPER STRING ichiga yozoshimiz kerak STYLE bolmasa ikta "" shunaqani ichiga yozsak boladi
// });


// app.get("/gift", function(req, res) {  
// res.end(`<h1>You are in the gift page</h1>`);  
// });


// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT , function() {
//     console.log(`The server is running successefully on PORT: ${PORT}`);
// });





// GIT


// GIT IGNORE bizi GITimizga yozilishi kerak bolmagan narsalarni yozamiz. NODE MODULE ni yozmemiz

// git status  = GIT ni statusini korip beradi va nimaiki kamchilik bolsa chiqarip beradi VA nima ozgarish sodir bolgan bolsa chiqarip beradi

// git add .   = Shu bilan osha kamchiliklarni TOLDIRADI va yana git status qilsak result korishimiz mumkun

// git commit -m "BRR: building express web framework" ?????

// git branch - biz faqat MASTER branch ni hosil qildik shuyergacha

// git log --oneline - 

// git hub - faqat mani desktopimda emas boshqalar ham ishlata olish uchun ishlatamiz (????)

// npm run dev

// git pull origin master - Ohirgi qilingan ishni download qilip oladi GITHUB dagi

// git reset --hard = Git eski holiga qaytadi



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







// REMOTE PUSH nima degani ??????????????

// git commit --amend (nima degani) ?????????? :wq (write and quit) GIT GRAPH ichiga yozip beradi va tugatadi







// EJS FRAMEWORK


// // TEST CODE

// Starting poin
console.log("Web Serverni boshlash");     
const express = require("express");        
const res = require("express/lib/response");
const app = express();   // FUNCTION

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
});


// MongoDB Call
const db = require("./server").db();
const mongodb = require("mongodb");  // ID ni mongodb orqaliy olish

// 1 EXPRESS SETTINGS
app.use(express.static("public"));    // PUBLIC FOLDER = Tashqi olamga ochiqlash ichiga CSS HTML kirip ketadi       (OBJECT, MIDDLEWARE) PUBLIC FOLDER OCHIP BERADI
app.use(express.json());              // COMPUTER TUSHUNADIGON FORMAT                                               (OBJECT, MIDDLEWARE)
app.use(express.urlencoded({extended: true}));   // MALUMOTLARNI QABUL QILIP OLADI                                  (OBJECT, MIDDLEWARE)


// 2 yoq--

// 3 VIEW (INTERFACE)
app.set("views", "views");            
app.set("view engine", "ejs"); 

// 4 ROUTING CODLAR   (Qachonki browserdan request kelsa keyin oqiydi)


// Traditional form post
app.post("/create-item", (req, res) => {              
    console.log("user entered /created-item");
    // console.log(req.body);
    const new_reja = req.body.reja;                 // res.end("success");
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);

        // if(err) {
        //     console.log(err);
        //     res.end("something went wrong");
        // }else {
        //     res.end("seccessfully added");
        // }
    });         // TODO: code with db here
});

app.get('/mit',(req, res) => {
    res.render("mit", {user: user});
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;                     // STRING dan ibirat ID
    db.collection("plans").deleteOne(           // ID ni mongodb orqaliy olish
        { _id: new mongodb.ObjectId(id) }, 
    function(err, data) {
        res.json({ state: "success"});
    }
);    
    // console.log(id);   REJA ni ID sini korsatip beradi
    // res.end("Done");
});

// const http = require('http');                            // (************)  shuni qoymasam bolmadi
app.get("/", function (req, res) {                          //(request & response)  (BULAR IKTA OBJECTLAR)
    console.log("user entered /");        
  db.collection("plans")
  .find()
  .toArray((err, data) => {
    if(err) {
        console.log(err);
        res.end("something went wrong");
    } else {
        // console.log(data);
         res.render("reja", { items: data });              // RENDER = REQUESTGA RESPONSE QILISH UCHUN YARATILADI
    }
  });       
});

module.exports = app;








// ============ RENDER ===============


// GET & POST (method)

// GET = SERVERGA JONATILGAN REQUESTGA RESPONSE JONATIP BERADI () request jonatip javob olamiz DATA OLAMIZ
  
// POST = SERVERGA DATA HAM KIRITA OLAMIZ REQUESTHAM OLAOLAMIZ




// PATTERNS <=========================================

// 1.   ARCHITECTUAL PATTERN     - MVC, CACHE                                  - LOYIHALASHTIRAMIZ
// 2.   DESIGN PATTERN           - MIDDLEWARE, DEPENDANCY INJECTION            - KICHIK BOLAKLARGA BEZAK BERAMIZ











