import express from "express";
import bodyParser from "body-parser";
import fs from "node:fs"



const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}))




app.post('/write', (req, res) => {

  const {body} = req;

  fs.writeFile("./DATA.txt", body, 'utf8')
   
    console.log(req.body,"request");

    data.push(req.body);
    res.send(req.body, "success!");
    
    });
    

app.get('/read', async (req, res) => {
    let content = null;
    await fs.readFile(".DATA.txt", 'utf8', (err, data) => {
      console.log(data,'data');
      content = data
      res.send(data);
    });

    
    })
    
 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })

