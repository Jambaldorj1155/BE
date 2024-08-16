import express from "express";
import bodyParser from "body-parser";
import fs from "node:fs";
import cors from "cors";
import { db } from "./db.js";
import { table } from "./src/router/table.js";
import { users } from "./src/router/users.js";
import { record } from "./src/router/record.js";
import { category } from "./src/router/category.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use("/users",users)
app.use("/records", record)
app.use("/category", category)
app.use("/table", table)



app.get("/installExtention", async (req, res) => {
  const tableQueryText = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

db.query(tableQueryText);

try {
  await db.query(tableQueryText);
} catch (error) {
  console.log(error);
}


  res.send("success");

});







// app.get("/users/createTable", async (req, res) => {
//   const tableQueryText = `
//   CREATE TABLE "users" (
//     id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
//     user_id TEXT,
//     name VARCHAR(50) NOT NULL,
//     amount TEXT,
//     transaction_type transaction_type DEFAULT 'INC' NOT NULL,
//     description TEXT,
//     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     category_id TEXT
//   )`;

//   try {
//     await db.query(tableQueryText);
//   } catch (error) {
//     console.error(error);
//     res.send("Error creating table");
//   }

  
// });




// app.get("/", async (req, res) => {
//   const tableQueryText = `
//   CREATE TABLE IF NOT EXISTS "users" (
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) UNIQUE
   

//   )`;

//   try {
//     await db.query(tableQueryText);
//   } catch (error) {
//     console.log(error);
//   }

//   res.send("Table created successfully!");
// });








// const {body} = req;

// fs.writeFile("./DATA.txt", body, 'utf8')

//   console.log(req.body,"request");

//   data.push(req.body);
//   res.send(req.body, "success!");

//   });

// app.get('/read', async (req, res) => {
//     let content = null;
//     await fs.readFile(".DATA.txt", 'utf8', (err, data) => {
//       console.log(data,'data');
//       content = data
//       res.send(data);
//     });

//     })





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
