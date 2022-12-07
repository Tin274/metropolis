export function ExtractImageInfo(data, imageTitle) {
    let logoImgData, urlImg, imgAttribut;
    if (data) {
        logoImgData = data.filter((image) => image.fields.title === imageTitle);
        urlImg = logoImgData[0].fields.image.fields.file.url;
        imgAttribut = logoImgData[0].fields.title;

        const result = {
            urlImg: urlImg,
            imgAttribut: imgAttribut,
        };

        return result;
    } else {
        console.log("image fehlt");
    }
}
