class UI {
  constructor() {
    this.form = document.querySelector(".form");
    this.input = document.querySelector(".form__input");
    this.ul = document.querySelector(".main__list");
    this.modal = document.querySelector("#myModal");
    this.modalContent = document.querySelector(".modal-content");
    this.btn = document.querySelector("#myBtn");
    this.span = document.querySelectorAll(".close")[0];
    this.alert = document.querySelector(".alert");
    this.alertContent = document.querySelector(".alert__content");
    this.btnYes = document.querySelector(".alert__content .btn-primary");
    this.btnNo = document.querySelector(".alert__content .btn-secondary");
    this.hideChecked = document.querySelector(".alert .hide input");
    this.settings = document.querySelector(".nav__icon");
    this.color1 = document.querySelector(".settings .color .color1");
    this.color2 = document.querySelector(".settings .color .color2");
    this.uncheckedTodo = document.querySelector(".header .unchecked");
    this.checkedTodo = document.querySelector(".header .checked");
  }

  openModal() {
    // When the user clicks the button, open the modal
    this.btn.addEventListener("click", () => {
      this.modal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    this.span.addEventListener("click", () => {
      this.modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", e => {
      if (e.target == this.modalContent) {
        this.modal.style.display = "none";
      }
    });
  }

  openSettings() {
    this.settings.addEventListener("click", e => {
      // e.target.nextElementSibling.classList.toggle("show");
      document.querySelector(".settings__dropdown").classList.toggle("show");
    });

    window.onclick = function(event) {
      if (!event.target.matches(".settings svg")) {
        var dropdowns = document.getElementsByClassName("settings__dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };

    this.color1.addEventListener("click", () => {
      document.documentElement.style.setProperty("--primary", "#863737");
      document.documentElement.style.setProperty("--secondary", "#94dff1   ");
    });
    this.color2.addEventListener("click", () => {
      document.documentElement.style.setProperty("--primary", "#378186");
      document.documentElement.style.setProperty("--secondary", "#ddf194   ");
    });
  }
}
