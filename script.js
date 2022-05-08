var body = document.querySelector("body"),
	mainImage = document.querySelector(".mainImage")
	image = document.querySelector(".image")

function setMainImage(src){
	mainImage.src = src
	mainImage.style.transition = "0.5"
	body.style.background = `url(${src}) no-repeat center`
	body.style.backgroundSize = "cover"
	body.style.transition = "0.2s"
}