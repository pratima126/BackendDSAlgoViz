const express = require("express");
const app = express();
const patj = require("path");

const port =  process.env.PORT || 3000;

const static_path = path.join(__dirname, "../frontpage" )

app.use (express.static(static_path));
app.get("/", (req, res) => {
    res.send("hello")
});

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})