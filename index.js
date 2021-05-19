let project_list = document.querySelectorAll(".projects__container--item");

let filterBtns = document.querySelectorAll(".filter-btn");

let filterSelection = function (type) {
  if (type === "all") {
    project_list.forEach((element) => {
      element.classList.remove("hide");
    });
  } else {
    project_list.forEach((element) => {
      if (element.classList[2] !== type) {
        element.classList.add("hide");
      } else {
        element.classList.remove("hide");
      }
    });
  }
};

filterSelection("all");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    let current_btn = document.querySelector(".active-btn");
    current_btn.classList.remove("active-btn");
    this.classList.add("active-btn");
  });
});
