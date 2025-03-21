const nameAvatar = document.querySelector(".name-avatar");
const emailAvatar = document.querySelector(".email-avatar");
const uploadCtn = document.querySelector(".upload-ctn");


nameAvatar.textContent = "Jonatan Kristof";
emailAvatar.textContent = "jonatan@email.com"



uploadCtn.addEventListener("click", () => {
  guardarImagen();
});

