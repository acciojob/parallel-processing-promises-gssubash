const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// Function to download an image and return a promise
function downloadImage(image) {
  return new Promise((resolve, reject) => {
    const imgElement = new Image(); 
    imgElement.onload = () => resolve(imgElement);
    imgElement.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
    imgElement.src = image.url;
  });
}



// Event listener for the button click
btn.addEventListener("click", () => {
  Promise.all(images.map(downloadImage)).then((imgs)=>{
	 imgs.forEach((a)=>{
		 output.append(a);
	 }); 
  }).catch((err)=>console.log(err.message));
});
