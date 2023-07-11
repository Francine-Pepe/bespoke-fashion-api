import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "./models/colors.js";
import patterns from "./models/patterns.js";
import categories from "./models/categories.js";
import designs from "./models/designs.js";
import outfitParts from "./models/outfitParts.js";
import fixedDresses from "./models/fixedDresses.js";
import reviews from "./models/reviews.js";
import cors from "cors";

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

dotenv.config();

mongoose
	.connect(process.env.MONGODB_URI)
	.then((e) => console.log("Database connected"))
	.catch((e) => console.log("error", e));

	app.get("/", (req, res) => {
		res.send("Working");
	});
	
app.get("/colors", (req, res) => {
	colors.find({})
		.then((result) => res.send(result))
		.catch((e) => res.send(e.message));
});

app.get("/patterns", (req, res) => {
	patterns.find({})
		.then((result) => res.send(result))
		.catch((e) => res.send(e.message));
});

app.get("/categories", (req, res) => {
	categories.find({})
		.then((result) => res.send(result))
		.catch((e) => res.send(e.message));
});

app.get("/designs", (req, res) => {
	designs.find({})
		.then((result) => res.send(result))
		.catch((e) => res.send(e.message));
});

app.get("/outfitParts", (req, res) => {
	outfitParts.find({})
		.then((result) => 
		
			res.send(result))
		.catch((e) => res.send(e.message));
});

app.get("/fixedDresses", (req, res) => {
	fixedDresses.find({})
		.then((result) => 
			res.send(result))
		.catch((e) => res.send(e.message));
});

app.get("/reviews", (req, res) => {
	reviews.find({})
		.then((result) => 
			res.send(result))
		.catch((e) => res.send(e.message));
});

app.listen(process.env.PORT || 5000, () =>
	console.log(`Server running on port ${port}`)
);

// vercel:

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server