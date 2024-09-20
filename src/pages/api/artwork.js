// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('node:fs/promises');

const readData = async () => {
	const file = await fs.readFile('_artwork.json', 'utf-8');
	const data = JSON.parse(file);

	return data;
};

const handler = async (req, res) => {
	if (req.method === 'GET') {
		const storedData = await readData();

		return res.status(200).json(storedData);
	}
};

export default handler;
