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

// Function to download all images in parallel and display them
async function downloadAndDisplayImages(images) {
  try {
    const downloadedImages = await Promise.all(images.map(downloadImage));
    downloadedImages.forEach(imgElement => {
      output.appendChild(imgElement);
    });
  } catch (error) {
    console.error(error.message);
  }
}

// Event listener for the button click
btn.addEventListener("click", () => {
  downloadAndDisplayImages(images);
});
