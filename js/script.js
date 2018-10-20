const year = new Date().getFullYear();
const unsplashSection = document.getElementById("unsplash");
const searchForm = document.querySelector("#search-form");
const imageW = document.querySelector("input[name=w]");
const imageH = document.querySelector("input[name=h]");
const searchQ = document.querySelector("input[name=q]");

async function renderGalleryItem(w,h,q){
   await fetch(`https://source.unsplash.com/${w}x${h}/?${q}`) 
  .then((response)=> {
    let galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.innerHTML = `
      <img class="gallery-image" src="${response.url}" alt="gallery image"/>
    `
    unsplashSection.appendChild(galleryItem);
  })
}
if(searchForm.addEventListener){
    searchForm.addEventListener("submit",(e) => {
        e.preventDefault();
        let q = searchQ.value.split(" ").join(",");
        const numItemsToGenerate = document.querySelector("input[name=number]").value; //how many gallery items you want on the screen
        for(let i=0;i<numItemsToGenerate;i++){
            console.log(imageW.value,imageH.value,q);
            renderGalleryItem(imageW.value,imageH.value,q);
        }
    })
}
document.getElementById("year").innerHTML = year;
