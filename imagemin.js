const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
	await imagemin(['jpg/*.{jpg,png,webp}'], {
		destination: 'webp',
		plugins: [
			imageminWebp(
				{
					quality: 95,
					method: 6
				}
				)
		]
	});
	console.log('图片已按照画质的95%压缩为webp格式');
})();
