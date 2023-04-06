const smallGallery = document.querySelector(".content-small-gallery");
const mainInfoDiv = document.querySelector(".content-main-info");
const mainGallery = document.querySelector(".content-main-img");

const smallGalleryArr = [

    {
        src: "./img/rooms/room-1.jpg",
        info: "lorem 1"
    },
    {
        src: "./img/rooms/room-2.jpg",
        info: "lorem 2"
    },
    {
        src: "./img/rooms/room-3.jpg",
        info: "lorem 3"
    },
    {
        src: "./img/rooms/room-4.jpg",
        info: "lorem 4"
    },
    {
        src: "./img/rooms/room-5.jpg",
        info: "lorem 5"
    },
    {
        src: "./img/rooms/room-6.jpg",
        info: "lorem 6"
    },


];




for (let smallImageArr of smallGalleryArr) {


    let smallDiv = `
    <div class="image">
<img src="${smallImageArr.src}">   
    </div>
    `;

    let infoDiv = `
    <p> ${smallImageArr.info}</p>
    `;


    smallGallery.insertAdjacentHTML("beforeend", smallDiv);


    for (const smallImage of document.querySelectorAll(".image")) {

        smallImage.addEventListener("click", function () {
            document.querySelector(".image.active-img").classList.remove("active-img");
            smallImage.classList.add("active-img");

            let arrSrc = smallImageArr.src;
            let imgSrc = smallImage.children[0].getAttribute("src");
            let img = smallImage.children[0];

            if (arrSrc == imgSrc) {

                let mainImg = `
                <img src="${arrSrc}">
                `;

                let mainInfo = `
                <p>${smallImageArr.info}</p>`;

                mainGallery.innerHTML = "";
                mainGallery.insertAdjacentHTML("beforeend", mainImg);
                mainInfoDiv.innerHTML = "";
                mainInfoDiv.insertAdjacentHTML("beforeend", mainInfo);

            }

        });
    }

}

smallGallery.children[0].classList.add("active-img");



