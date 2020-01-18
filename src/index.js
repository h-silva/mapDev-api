const express = require("express") ;
const mongoose = require("mongoose");
const routes = require("./routes")

const app = express();
app.use(express.json());
app.use(routes);
console.log("Starting API")
//conexão com mongodb
mongoose.connect('mongodb+srv://heitor:heitor@cluster0-hon9r.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3333); 