const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();
const db = require("./app/models");
const Role = db.user.role

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if(!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if(err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            
            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            
            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    })
}

db.mongoose
    .connect((`${db.config.dbUrl}`), {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
        console.log("connect db: true");
        initial();
    })
    .catch(err => {
        console.log("connect db: false", err);
        process.exit();
    });
    


const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(
    cookieSession({
        name: "beup-session",
        secret: "COOKIE_SECRET",
        httpOnly: true
    })
);

const PORT = precess.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
});
