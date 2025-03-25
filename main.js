const nameAvatar = document.querySelector(".name-avatar");
const emailAvatar = document.querySelector(".email-avatar");
const uploadCtn = document.querySelector(".upload-ctn");
const changeTicket = document.querySelector(".changeTicket")
const container = document.querySelector(".container")
const ticketCtn = document.querySelector(".ticket-ctn")

nameAvatar.textContent = "Jonatan Kristof";
emailAvatar.textContent = "jonatan@email.com"

changeTicket.addEventListener("click", () => {
  container.classList.toggle("change");
  ticketCtn.classList.toggle("change");
})


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
  uploadCtn.classList.add("active");
});

