const http = require("http")
const app = require("./app")

// server PORT
const port = process.env.PORT || 3000

const server = http.createServer(app)

app.listen(port, () => {
    console.log(`Server is working on port ${port}`);
});