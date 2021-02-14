const express = require('express');
const app = express();

const data = [
	{
		_id: 1,
		body: "sdfsdf"
	},
	{
		_id: 2,
		body: "sdfsdfdssdf"
	}
];

app.get('/data', (req, res) => {
	res.send(JSON.stringify(data))
});

app.listen(8089, () => {
	console.log("Server started")
});