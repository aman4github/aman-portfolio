'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// techstack variables
const techstackItem = document.querySelectorAll("[data-techstack-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalDesc = document.querySelector("[data-modal-desc]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const techstackModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < techstackItem.length; i++) {

  techstackItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-techstack-avatar]").src;
    modalImg.alt = this.querySelector("[data-techstack-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-techstack-title]").innerHTML;
    modalDesc.innerHTML = this.querySelector("[data-techstack-desc]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-techstack-text]").innerHTML;

    techstackModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", techstackModalFunc);
overlay.addEventListener("click", techstackModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// element toggle function for achievements
const elementToggleFunc_achievements = function (elem) { elem.classList.toggle("active"); }

// custom select variables for achievements
const select_achievements = document.querySelector("[data-select-achievements]");
const selectItems_achievements = document.querySelectorAll("[data-select-item-achievements]");
const selectValue_achievements = document.querySelector("[data-selecct-value-achievements]");
const filterBtn_achievements = document.querySelectorAll("[data-filter-btn-achievements]");

select_achievements.addEventListener("click", function () { elementToggleFunc_achievements(this); });

// add event in all select items
for (let i = 0; i < selectItems_achievements.length; i++) {
  selectItems_achievements[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue_achievements.innerText = this.innerText;
    elementToggleFunc_achievements(select_achievements);
    filterFunc_achievements(selectedValue);

  });
}

// filter variables
const filterItems_achievements = document.querySelectorAll("[data-filter-item-achievements]");

const filterFunc_achievements = function (selectedValue) {

  for (let i = 0; i < filterItems_achievements.length; i++) {

    if (selectedValue === "all") {
      filterItems_achievements[i].classList.add("active");
    } else if (selectedValue === filterItems_achievements[i].dataset.category) {
      filterItems_achievements[i].classList.add("active");
    } else {
      filterItems_achievements[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn_achievements = filterBtn_achievements[0];

for (let i = 0; i < filterBtn_achievements.length; i++) {

  filterBtn_achievements[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue_achievements.innerText = this.innerText;
    filterFunc_achievements(selectedValue);

    lastClickedBtn_achievements.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn_achievements = this;

  });

}


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
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


// navbar toggle
const moreBtn = document.querySelector("#more-btn");
const primaryItems = document.querySelectorAll(".nav-group-primary");
const secondaryItems = document.querySelectorAll(".nav-group-secondary");
const aboutBtn = document.querySelector('[data-nav-link="about"]'); // Selection by data attribute

moreBtn.addEventListener("click", function () {
  const isCurrentlyMore = this.innerHTML.includes("More");

  // 1. Toggle visibility for both groups
  primaryItems.forEach(item => item.classList.toggle("hidden"));
  secondaryItems.forEach(item => item.classList.toggle("hidden"));

  if (isCurrentlyMore) {
    // Switching to Secondary Group
    this.innerHTML = "Back";
  } else {
    // Switching back to Primary Group
    this.innerHTML = "More";

    // 2. Automatically trigger the 'About' page view
    // Find the About button and click it programmatically
    const navLinks = document.querySelectorAll("[data-nav-link]");
    navLinks.forEach(link => {
      if (link.innerHTML.toLowerCase().includes("about")) {
        link.click(); 
      }
    });
  }
});