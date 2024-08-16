import { db } from "../../db.js";

export const getUser = async (req, res) => {
    const queryText = `
    SELECT * FROM users
    `;
  
    try {
      const result = await db.query(queryText);
      res.send(result.rows);
    } catch (error) {
      console.log(error);
      
    }
  
   
  };

   export const createUser = async (req, res) => {
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
  
    
  };

  export const editUser = async (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body;
    try {
      const result = await db.query(
        "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *", [name, email, id]
      );
      if (result.rows.length === 0) {
        res.status(404).json({error: "Item not found"});
  
      } else { res.status(200).json(result.rows[0]);
  
      }
    } catch (erro) {
      console.error(erro);
      res.status(500).json({error:"Database error"});
    }
  };
  
  export const deleteUser = async (req, res) => {
    const {id} = req.params;
  
    try {
      const result = await db.query(
        "DELETE FROM users WHERE id=$1", [id]
      );
      if (result.rows.length === 0) {
        res.status(404).json({error: "User deleted"});
  
        } else { res.status(200).json(result.rows[0]);
  
        }
    } catch (erro) {
      console.error(erro);
      res.status(500).json({error:"Database error"});
    }
  };
  
  
  // export const FilterUser = async (req, res) => {
  //   const {id} = req.params;
  
  //   try {
  //     const result = await db.query(
  //       "DELETE FROM users WHERE id=$1", [id]
  //     );
  //     if (result.rows.length === 0) {
  //       res.status(404).json({error: "User deleted"});
  
  //       } else { res.status(200).json(result.rows[0]);
  
  //       }
  //   } catch (erro) {
  //     console.error(erro);
  //     res.status(500).json({error:"Database error"});
  //   }
  // };
  