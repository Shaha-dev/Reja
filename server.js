const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = 
"mongodb+srv://shaha98:26071998rsh@cluster0.z36qmdv.mongodb.net/Reja";

mongodb.connect(connectionString, {
    useNewUrlParser: true, useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connection to Mongo DB");
    else {
        console.log("MongoDB connection succeed")
        // console.log(client);
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);  // HAMMA qilayotkan request (APP) ichiga keladi chunkiy node.js hammanikini qabul qiladi bittada (Train.js)dan ham kelayapti
let PORT = 3000;
server.listen(PORT , function() {
    console.log(
        `The server is running successefully on PORT: ${PORT}, http://localhost:${PORT}`
         );
      });
    }
  }
);
