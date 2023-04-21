const colorBox = document.querySelectorAll(".color-box");
const umbrellaImg = document.querySelector(".umbrella-img");
const logoLabel = document.querySelector(".logo-label");
const upload = document.querySelector("#upload");
const imgLoader = document.querySelector("#img-loader");
const uploadText = document.querySelector(".upload-text");
const inputFile = document.querySelector("#input-file");
const removeButton = document.querySelector(".remove-button");
const uploadedLogo = document.querySelector("#uploaded-logo");
const uploadLoader = document.querySelector(".upload-loader");

colorBox.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(item);
    switch (item.classList[1]) {
      case "blue":
        umbrellaImg.setAttribute("src", "./images/blueUmbrella.png");
        logoLabel.style.backgroundColor = "blue";
        uploadedLogo.style.display = "none";
        imgLoader.style.display = "block";

        setTimeout(() => {
          imgLoader.style.display = "none";
          uploadedLogo.style.display = "block";
        }, 4000);
        break;
      case "pink":
        console.log("pink");
        umbrellaImg.setAttribute("src", "./images/pinkUmbrella.png");
        logoLabel.style.backgroundColor = "pink";
        uploadedLogo.style.display = "none";
        imgLoader.style.display = "block";
        setTimeout(() => {
          imgLoader.style.display = "none";
          uploadedLogo.style.display = "block";
        }, 4000);

        break;
      case "yellow":
        umbrellaImg.setAttribute("src", "./images/yellowUmbrella.png");
        logoLabel.style.backgroundColor = "yellow";
        uploadedLogo.style.display = "none";
        imgLoader.style.display = "block";
        setTimeout(() => {
          imgLoader.style.display = "none";
          uploadedLogo.style.display = "block";
        }, 4000);

        break;
    }
  });
});
inputFile.addEventListener("change", (e) => {
  const name = inputFile.files[0].name;
  uploadText.innerHTML = name;
  uploadedLogo.src = URL.createObjectURL(e.target.files[0]);
  uploadedLogo.style.display = "none";
  uploadLoader.style.display = "inline-block";
  imgLoader.style.display = "block";
  upload.style.display = "none";
  setTimeout(() => {
    uploadLoader.style.display = "none";
    imgLoader.style.display = "none";
    upload.style.display = "inline-block";
    uploadedLogo.style.display = "block";
  }, 4000);
});
