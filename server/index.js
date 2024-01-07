import  express  from "express";
import cors from 'cors';
import router from "./routes/routes.js";
import DBconeection from "./database/db.js";
import path from 'path';

const __dirname = path.resolve(); // to resolve error

const app = express();

app.use(cors()); // to unable cors in the express (before router as its synchronous coding)
app.use('/', router);

// to pass the frontend address in backend 
app.use(express.static(path.join(__dirname, "./client/build"))); // we always make build of frontend

app.get('*', function (_, res) { // for every route we send an response which get the file from frontend(index.html)
    res.sendFile(path.join(__dirname, "./client/build/index.html"), function(err) { // we pass another function in case of error
        res.status(500).send(err);
    })
})

// 8000 port is not available all the time during production so we say use available port
const PORT = process.env.PORT || 8000; // and while using on local other port will be undefined so then use 

DBconeection();

app.listen(PORT, () => console.log(`server is running on port ${PORT}`)); // to run the server 