import Post from "./Post.js"
class PostController {
	async create(reg, res) {
		try {
			const { author, title, content, picture } = req.body
			const post = await Post.create({ author, title, content, picture })
			res.json(post)
		} catch (e) {
			res.status(500).json(e)
		}
	}
	async getAll(reg, res) {
		try {
			const posts = await Post.find()
			return res.json(posts)
		} catch (e) {

		}
	}
	async getOne(reg, res) {
		try {

		} catch (e) {

		}
	}
	async update(reg, res) {
		try {

		} catch (e) {

		}
	}
	async delete(reg, res) {
		try {

		} catch (e) {

		}
	}
}
export default new PostController()