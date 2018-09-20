const closeBtn = document.getElementById("delete");
const closeNotif = document.getElementById("close");
function closeBtnX () {
  closeNotif.style.display = "none";
}
closeBtn.addEventListener("click", closeBtnX);
