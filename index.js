import express  from "express"
import mongoose from "mongoose";
import Post from "./Post.js";
import router from "./router.js";

const PORT = 5000;
const K_URL = `mongodb+srv://user:kuzya1704@cluster0.iql3l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const app= express()

app.use(express.json())
app.use('/api', router)

	
	
async function startApp() {
	try {
	await mongoose.connect(K_URL)
		app.listen(PORT, ()=> console.log("server working " + PORT))
	} catch (e){
		console.log(e)
	}
}
startApp()
