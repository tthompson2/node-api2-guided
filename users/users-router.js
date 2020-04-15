const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	users.find()
		.then((users) => {
			res.status(200).json(users)
		})
		.catch((error) => {
			console.log(error)
			res.status(500).json({
				message: "Error retrieving the users",
			})
		})
})

module.exports = router;