function Post(username, post, time) {
	this.user = username;
	this.post = post;
	if (time)
    {
		this.time = time;
	}
    else
    {
		this.time = new Date();
	}
}

module.exports = Post;

Post.prototype.save = function save(callback) {
	// 存入 Mongodb 的文档
	var post = {
		user: this.user,
		post: this.post,
		time: this.time
	};

};

Post.get = function get(username, callback) {

};