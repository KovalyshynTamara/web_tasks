document.getElementById("news-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const titleField = document.getElementById("news-title");
  const contentField = document.getElementById("news-content");
  const imageField = document.getElementById("news-image");

  const title = titleField.value.trim();
  const content = contentField.value.trim();
  const imageFile = imageField.files[0];

  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(el => el.textContent = "");

  titleField.classList.remove("error");
  contentField.classList.remove("error");
  imageField.classList.remove("error");

  let valid = true;

  if (!title) {
    titleField.classList.add("error");
    titleField.closest(".form-group").querySelector(".error-message").textContent = "Enter a news title.";
    valid = false;
  }
  
  if (!content) {
    contentField.classList.add("error");
    contentField.closest(".form-group").querySelector(".error-message").textContent = "Enter news content.";
    valid = false;
  }

  if (!imageFile) {
    imageField.classList.add("error");
    imageField.closest(".form-group").querySelector(".error-message").textContent = "Please select an image.";
    valid = false;
  }

  if (!valid) return;

  // 
  titleField.value = "";
  contentField.value = "";
  imageField.value = "";
  document.getElementById("image-preview").innerHTML = "";

  // Повідомлення
  const successEl = document.querySelector(".success-message");
  successEl.style.display = "block";
  setTimeout(() => successEl.style.display = "none", 3000);
});


// валідація Title
document.getElementById("news-title").addEventListener("input", function () {
  const field = this;
  const error = field.closest(".form-group").querySelector(".error-message");

  if (field.value.trim()) {
    field.classList.remove("error");
    error.textContent = "";
  }
});

// валідація Content
document.getElementById("news-content").addEventListener("input", function () {
  const field = this;
  const error = field.closest(".form-group").querySelector(".error-message");

  if (field.value.trim()) {
    field.classList.remove("error");
    error.textContent = "";
  }
});

// валідація Image
document.getElementById("news-image").addEventListener("change", function () {
  const field = this;
  const error = field.closest(".form-group").querySelector(".error-message");

  if (field.files[0]) {
    field.classList.remove("error");
    error.textContent = "";
  }

  // Превʼю зображення
  const previewContainer = document.getElementById("image-preview");
  previewContainer.innerHTML = "";

  const file = field.files[0];
  if (!file) return;


  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  img.style.maxWidth = "200px";
  img.style.borderRadius = "10px";
  img.style.marginTop = "10px";

  previewContainer.appendChild(img);

});
