const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
	await imagemin(['jpg/*.{jpg,png,webp}'], {
		destination: 'webp',
		plugins: [
			imageminWebp(
				{
					quality: 80,
					method: 6
				}
				)
		]
	});
	console.log('图片已按照画质的80%压缩为webp格式');
})();
