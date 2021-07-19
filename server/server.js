const express = require("express");
const app = express();

const port = 8000;
const db_name = "jokesDB"
    
require("./config/mongoose.config")(db_name);
    
app.use(express.json(), express.urlencoded({ extended: true }));
require("./routes/jokes.routes")(app);

app.listen(port, () => console.log("The server is all fired up on port 8000"));