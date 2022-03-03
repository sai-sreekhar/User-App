var express = require("express")
var fs = require('fs');

var app = express()

var bodyParser = require("body-parser");
const { send } = require("process");
app.use(bodyParser.json());

var HTTP_PORT = process.env.PORT || 3000

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/api/users", (req, res, next) => {
    var usersObj;
    try {
        usersObj = JSON.parse(fs.readFileSync('users.json', 'utf8'));   
    } catch (error) {
        console.log('error exception while reading file, err= ',error);
        res.status(404).send({reason:'File not found'});
        return;
    }
    res.send(usersObj);
});

app.get("/api/users/:id", (req, res, next) => {
    var usersObj;
    try {
        usersObj = JSON.parse(fs.readFileSync('users.json', 'utf8'));   
    } catch (error) {
        console.log('error exception while reading file, err= ',error);
        res.status(404).send({reason:'File not found'});
        return;
    }

    for (let i = 0; i < usersObj.length; i++) {
        const curUser = usersObj[i];
        if (curUser._id == req.params.id) {
            res.send(curUser);
            return;
        }
    }
    res.status(404).send({reason:'User not found'});
});

app.post("/api/changerole/:id", (req, res, next) => {
    var usersObj;
    try {
        usersObj = JSON.parse(fs.readFileSync('users.json', 'utf8'));   
    } catch (error) {
        console.log('error exception while reading file, err= ',error);
        res.status(404).send({reason:'File not found'});
        return;
    }

    for (let i = 0; i < usersObj.length; i++) {
        const curUser = usersObj[i];
        if (curUser._id == req.params.id) {
            curUser.role = "lead-guide";
            res.send(usersObj);
            return;
        }
    }

    res.status(404).send({reason:'User not found'});
});

app.post("/api/user", (req, res, next) => {
    if (!req.body) {
        res.status(400).send({reason:'Missing body'});
        return;
    }
    
    if ((!req.body._id)
        ||(!req.body.name)
        ||(!req.body.email)
        ||(!req.body.role)
        ||(!req.body.active)
        ||(!req.body.password)) {
        res.status(400).send({reason:'Missing Parameter'});
        return;
    }
    try {
        fs.writeFileSync('newUser.json',JSON.stringify(req.body));
        res.status(200).end();
        return;
    } catch (error) {
        console.log('error exception while writing file, err= ',error);
        res.status(500).send({reason:'Write file failed'}); 
        return;
    }

});

app.get("/api/newuser", (req, res, next) => {
    var usersObj;
    try {
        usersObj = JSON.parse(fs.readFileSync('newUser.json', 'utf8'));   
    } catch (error) {
        console.log('error exception while reading file, err= ',error);
        res.status(404).send({reason:'File not found'});
        return;
    }
    res.send(usersObj);
});

app.delete("/api/users/:id", (req, res, next) => {
    var usersObj;
    try {
        usersObj = JSON.parse(fs.readFileSync('users.json', 'utf8'));   
    } catch (error) {
        console.log('error exception while reading file, err= ',error);
        res.status(404).send({reason:'File not found'});
        return;
    }
    
    var userIdxToDel = -1;

    for (let i = 0; i < usersObj.length; i++) {
        const curUser = usersObj[i];
        if (curUser._id == req.params.id) {
            userIdxToDel = i;
        }
    }

    if (userIdxToDel == -1) {
        res.status(404).send({reason:'User not found'});
        return;
    }

    usersObj.splice(userIdxToDel , 1);
    try {
        fs.writeFileSync('deletedUser.json',JSON.stringify(usersObj));
        res.status(200).end();
        return;
    } catch (error) {
        console.log('error exception while writing file, err= ',error);
        res.status(500).send({reason:'Write file failed'}); 
        return;
    }
});

app.get("/api/getUsersAfterDeletion", (req, res, next) => {
    var usersObj;
    try {
        usersObj = JSON.parse(fs.readFileSync('deletedUser.json', 'utf8'));   
    } catch (error) {
        console.log('error exception while reading file, err= ',error);
        res.status(404).send({reason:'File not found'});
        return;
    }
    res.send(usersObj);
});






