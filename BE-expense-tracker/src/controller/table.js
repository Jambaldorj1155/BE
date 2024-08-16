import { db } from "../../db.js";
export const createUserTable = async (req, res) => {
    const tableQueryText = `
    CREATE TABLE "users" (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id uuid REFERENCES users ON DELETE RESTRICT,
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
        res.send("Created table Successful");
      }

}

export const createRecordTable = async (req, res) => {
    const tableQueryText = `CREATE TABLE "record" (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid NOT NULL,
    category_id uuid NOT NULL,
    FOREIGN KEY (user_id)
    references users(id),
    FOREIGN KEY (category_id)
    references category(id),
    
    name TEXT,
    amount REAL NOT NULL,
    transaction_type transaction_type DEFAULT 'EXP' NOT NULL,
    description TEXT, 
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;

    try {
        await db.query(tableQueryText);
      } catch (error) {
        console.error(error);
        res.send("Record table Successful");
      }

}

export const createCategoryTable = async (req, res) => {
    const tableQueryText = `CREATE TABLE "category" (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100),
    description TEXT,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_image TEXT
    )
    `;

    try {
        const result = await db.query(tableQueryText);
        res.send(result.rows[0])
      } catch (error) {
        console.error(error);
        res.send("u failed mf");
      }

}

