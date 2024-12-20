let searchBox = document.querySelector(".search-box");
let searchIcon = document.querySelector("#search-icon");

searchIcon.onclick = () => {
  searchBox.classList.toggle("active");
};
