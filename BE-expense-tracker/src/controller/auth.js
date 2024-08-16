import { createUser } from "./users";

export const signUp = async (req, res) => {
    try {
        const user = await createUser(req,res);
        if (result.rows.length === 0) {
          res.status(404).json({error: "User deleted"});
    
          } else { res.status(200).json(result.rows[0]);
    
          }
      } catch (erro) {
        console.error(erro);
        res.status(500).json({error:"Database error"});
      }
}
