import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/home", (req, res) => {
    res.render("index.ejs",  { newToDo: toDoArray });
    
});




app.post("/home", (req, res) => {

    const jsToDo = req.body["toDo"];
        toDoArray.unshift(jsToDo);
        console.log(toDoArray);
        console.log(req.body);
        if (req.body["clearList"]) {
            toDoArray.length = 0;
        }
        res.render("index.ejs", { newToDo: toDoArray });
        
});



app.get("/work", (req,res) => {
    res.render("work.ejs");
});

var toDoArray =[];

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});