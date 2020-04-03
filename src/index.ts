
export default function choose_image(count: number, sizeType: wx.ImageSizeType[], sourceType: wx.ImageSourceType[]) {
	return new Promise<wx.TempFilesData | null>((resolve) => {
		wx.chooseImage({
			count, 						// 默认9
			sizeType, 		// 可以指定是原图还是压缩图，默认二者都有
			sourceType,	// 可以指定来源是相册还是相机，默认二者都有
			success(res) {				// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
				resolve(res);
			},
			fail() {
				resolve(null);
			}
		});
	});
}
