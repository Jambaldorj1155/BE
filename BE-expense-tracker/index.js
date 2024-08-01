import express from "express";
import bodyParser from "body-parser";
import fs from "node:fs";
import cors from "cors";
import { db } from "./db.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

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


app.get("/users/createTable", async (req, res) => {
  const tableQueryText = `
  CREATE TABLE "users" (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    password TEXT,
    avatar_image TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    currency_type currency_type DEFAULT 'USD' NOT NULL
  )`;

  try {
    await db.query(tableQueryText);
  } catch (error) {
    console.error(error);
    res.send("Error creating table");
  }

  
});



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


app.post("/users/create", async (req, res) => {
  const { email, name, password, avatar_image, currency_type} =req.body;
  
  const QueryText = `
  INSERT INTO users (email, name, password, avatar_image, currency_type)
  VALUES ($1, $2, $3, $4, $5) RETURNING *`;

  try {
    const result = await db.query(QueryText,[
      email,
      name,
      password,
      avatar_image,
      currency_type
  ]);
  } catch (err) {
    console.error(err);
    res.send("user inserted successfully!");
  }

  
});

// app.get("/getUsers", async (req, res) => {
//   const queryText = `
//   SELECT * FROM users
//   `;

//   try {
//     const result = await db.query(queryText);
//     res.send(result.rows);
//   } catch (error) {
//     console.log(error);
//   }

 
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
