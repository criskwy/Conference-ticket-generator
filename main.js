const nameAvatar = document.querySelector(".name-avatar");
const emailAvatar = document.querySelector(".email-avatar");
const uploadCtn = document.querySelector(".upload-ctn");
const changeTicket = document.querySelector(".changeTicket")
const container = document.querySelector(".container")
const ticketCtn = document.querySelector(".ticket-ctn")
const inputUploadImg = document.querySelector("#upload-img");
const uploadIcon = document.querySelector(".upload-icon");
const imgPreview = document.querySelector(".img-preview");

nameAvatar.textContent = "Jonatan Kristof";
emailAvatar.textContent = "jonatan@email.com"

//change view between upload and ticket temporary
changeTicket.addEventListener("click", () => {
  container.classList.toggle("change");
  ticketCtn.classList.toggle("change");
})


uploadCtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputUploadImg.click();
})

//drag and drop
uploadCtn.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadCtn.classList.add("active");
});

uploadCtn.addEventListener("dragleave", (e) => {
  e.preventDefault();
  uploadCtn.classList.remove("active");
});

uploadCtn.addEventListener("drop", (e) => {
  e.preventDefault();
  
  const file = e.dataTransfer.files[0];

  if(file && file.type.startsWith("image/")) {
    showPreviewFile(file);
  }else {
    alert("Please drop a valid image file");
  }

  uploadIcon.classList.add("active");
  imgPreview.classList.remove("active");


});

//preview image function  
function showPreviewFile(file) {
  const reader = new FileReader();

  //img onload
  reader.onload = () => {
    const imgElement = document.createElement("img");
    imgElement.src = reader.result;
    imgPreview.innerHTML = ""; //clear preview
    imgPreview.appendChild(imgElement);

  };

  reader.readAsDataURL(file);
}

