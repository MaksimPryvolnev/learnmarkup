const year = new Date().getFullYear();
const unsplashSection = document.getElementById("unsplash");
const searchForm = document.querySelector("#search-form");
const imageW = document.querySelector("input[name=w]");
const imageH = document.querySelector("input[name=h]");
const searchQ = document.querySelector("input[name=q]");

function renderGalleryItem(w,h,q, numItemsToGenerate){
    if(numItemsToGenerate && numItemsToGenerate > 0){
        renderGalleryItem(imageW.value,imageH.value,q, numItemsToGenerate-1);
        fetch(`https://source.unsplash.com/${w}x${h}/?${q}`, {cache: "no-store"})
        .then((response)=> {
            console.dir(response);
            let galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
            <img class="gallery-image" src="${response.url}" alt="gallery image"/>
            `;
            unsplashSection.appendChild(galleryItem);
        });
    }
}

searchForm.addEventListener("submit",(e) => {
    e.preventDefault();
    let q = searchQ.value.split(" ").join(",");
    const numItemsToGenerate = document.querySelector("input[name=number]").value; //how many gallery items you want on the screen
    renderGalleryItem(imageW.value,imageH.value,q, numItemsToGenerate);
});

document.getElementById("year").innerHTML = year;
