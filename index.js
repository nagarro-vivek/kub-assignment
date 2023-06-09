const express = require("express");
const cors = require("cors");
const axios = require("axios")

const connectDB = require("./src/db/connection");
const PostModel = require("./src/model/post");

const PORT = 3010;

connectDB();

const app = express();
app.use(cors());

app.use(express.json());


/**
 * Retrieves all posts from the database and sends them as a response.
 */
app.get("/", async (req, res) => {
    const posts = await PostModel.find();
    return res.status(200).send(posts);
});

/**
 * Retrieves data from an external API (jsonplaceholder) and saves it in the database.
 */
app.get("/api/generate", (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            const data = response.data;
            data.forEach(post => {
                const newPost = new PostModel(post);
                newPost.save();
            })
            return res.status(200).send("Data successfully saved");
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send(err.message);
        })
})



app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
})