const images = document.querySelectorAll(".image");
const mainImg = document.querySelector(".content-main-img");
const mainInfo = document.querySelector(".content-main-info");


for (let image of images) {


    image.addEventListener("click", function (e) {
        document.querySelector(".image.active-img").classList.remove("active-img");
        image.classList.add("active-img");

        // for img

        let img = e.target.children[0];
        let src = img.src.substring(21);
        let newImg = `.${src}`;
        let mainImgAttr = mainImg.children[0];
        mainImgAttr.setAttribute("src", newImg);

        // p 

        let dataInfo = img.getAttribute("data-info");

        let info = mainInfo.children[0];

        info.textContent = `${dataInfo}`;

    });



}



