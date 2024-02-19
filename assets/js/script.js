"use strict";

// Элемент класс active
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/* SideBar */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

/* Admin Modal and AdminBtn */
const adminBtnNode = document.querySelector('[data-admin-btn]');
const adminAccountNode = document.querySelector('[data-admin-modal-container]');
const adminModalCloseBtn = document.querySelector('[admin-modal-close-btn]');
const overlayAdminNode = document.querySelector('[admin-overlay]');

adminBtnNode.addEventListener("click", function () {
  elementToggleFunc(adminAccountNode);
  elementToggleFunc(overlayAdminNode);
});
adminModalCloseBtn.addEventListener("click", () => {
  elementToggleFunc(adminAccountNode);
  elementToggleFunc(overlayAdminNode);
});
overlayAdminNode.addEventListener("click", () => {
  elementToggleFunc(adminAccountNode);
  elementToggleFunc(overlayAdminNode);
});

/* Testimonials */
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

/* Select */
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-selecct-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "все") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

let lastClickBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickBtn.classList.remove("active");
    this.classList.add("active");
    lastClickBtn = this;
  });
}

/* Contacts Form */
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", () => {
    if (form.checkVisibility()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

/* Navigation Mobile First */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Blog Отображение
const blogItemNodes = document.querySelectorAll('.blog-post-item');
const blogTextNodes = document.querySelectorAll(".blog-text");

blogItemNodes.forEach(blogItemNode => {
  blogItemNode.addEventListener("click", (event) => {
    event.preventDefault();
    const clickBlogItemkBtn = event.target.closest('.blog-post-item');
    const blogText = clickBlogItemkBtn.querySelector(".blog-text");
    blogText.classList.toggle("open");
  });
});
