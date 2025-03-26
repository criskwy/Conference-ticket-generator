const nameAvatar = document.querySelector(".name-avatar");
const emailAvatar = document.querySelector(".email-avatar");
const dropArea = document.querySelector(".drop-area");
const changeTicket = document.querySelector(".changeTicket")
const container = document.querySelector(".container")
const ticketCtn = document.querySelector(".ticket-ctn")
const inputUploadImg = document.querySelector("#upload-img");
const uploadIcon = document.querySelector(".upload-icon");
const imgPreview = document.querySelector(".img-preview");
const btnChangeImg = document.querySelector(".btn-change-img")
const btnRemoveImg = document.querySelector(".btn-remove-img")
const advertising = document.querySelector(".advertising-upload")
const errorUploadMsg = document.querySelector(".error-upload-msg")

const MAX_FILE_SIZE = 500 * 1024;  // 500 KB en bytes

nameAvatar.textContent = "Jonatan Kristof";
emailAvatar.textContent = "jonatan@email.com"

//change view between upload and ticket temporary
changeTicket.addEventListener("click", () => {
  container.classList.toggle("change");
  ticketCtn.classList.toggle("change");
})


dropArea.addEventListener("click", (e) => {
  e.preventDefault();
  inputUploadImg.click();
})

//drag and drop
dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("active");

});

dropArea.addEventListener("dragleave", (e) => {
  e.preventDefault();
  dropArea.classList.remove("active");
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  e.stopPropagation();

  const file = e.target.files[0]; //get the file
  console.log(file.size);

  //verify the file size
  if (file.size > MAX_FILE_SIZE) {
    advertising.classList.add("hide");
    errorUploadMsg.classList.add("show");
    return;
  } else {
    advertising.classList.remove("hide");
    errorUploadMsg.classList.remove("show");
  }


  //verify if the file is an image

  if (file && file.type.startsWith("image/")) {
    showPreviewFile(file);
  } else {
    alert("Please drop a valid image file");
  }


  uploadIcon.classList.add("active");
  imgPreview.classList.add("active");
  dropArea.classList.remove("active");
});


//btns remove and change image

btnChangeImg.addEventListener("click", (e) => {
  e.preventDefault();
})

btnRemoveImg.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();

  imgPreview.innerHTML = "";
  inputUploadImg.value = "";
  imgPreview.classList.remove("active");
  uploadIcon.classList.remove("active");

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


inputUploadImg.addEventListener("change", (e) => {
  const file = e.target.files[0];  // Obtener el archivo seleccionado


  if (file.size > MAX_FILE_SIZE) {
    advertising.classList.add("hide");
    errorUploadMsg.classList.add("show");
    return;
  }

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = () => {
      const imgElement = document.createElement("img");
      imgElement.src = reader.result;  // Establecer la imagen cargada en la vista previa
      imgPreview.innerHTML = "";  // Limpiar cualquier contenido previo
      imgPreview.appendChild(imgElement);  // Añadir la imagen a la vista previa
    };

    reader.readAsDataURL(file);  // Leer la imagen como una URL de datos

    uploadIcon.classList.add("active");  // Mostrar el icono de carga
    imgPreview.classList.add("active");  // Mostrar la vista previa de la imagen
  } else {
    alert("Please select a valid image file");  // Alerta si el archivo no es una imagen
  }
});