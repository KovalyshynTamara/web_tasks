document.getElementById("comment-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const commentField = document.getElementById("comment-text");
  const commentText = commentField.value.trim();
  const errorMessage = document.querySelector(".error-message");

  if (commentText === "") {
      commentField.classList.add("error");
      errorMessage.textContent = "Please enter your comment.";
      errorMessage.style.display = "block";
      return;
  }

  if (commentText.length > 200) {
      commentField.classList.add("error");
      errorMessage.textContent = "Comment should be less than 200 characters.";
      errorMessage.style.display = "block";
      return;
  }

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB").replace(/\//g, '.'); 

  // 
  const randomNames = [
    "Happy Hippo",
    "Chill Cheetah",
    "Clever Koala",
    "Brave Beaver",
    "Sneaky Squirrel",
    "Kind Kangaroo",
    "Lazy Lizard",
    "Wise Owl",
    "Funny Fox",
    "Random Dinosaur"
  ];

  const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];

  // масив випадкових іконочок
  const userIcons = [
    "/images/koala.png",
    "/images/turtle.png",
    "/images/bee.png",
    "/images/elephant.png",
    "/images/crab.png"
  ];
  
  const randomIcon = userIcons[Math.floor(Math.random() * userIcons.length)];
  
  // Створення нової карточки
  const newCard = document.createElement("div");
    newCard.className = "comments-card";
    newCard.innerHTML = `
      <div class="flex">
        <div class="flex img-name-wrap">
          <div class="icon animal"><img src="${randomIcon}" alt="user icon"></div>
          <div class="name">${randomName}</div>
        </div>
        <div class="date">${formattedDate}</div>
      </div>
      <div class="comment">
        ${commentText}
      </div>
    `;

    // + коментар в контейнер
    document.getElementById("comments-container").append(newCard);

    // очищ філд
    document.getElementById("comment-text").value = "";
});


document.getElementById("comment-text").addEventListener("input", function () {
    const commentText = this.value.trim();
    const errorMessage = document.querySelector(".error-message");
    const commentField = document.getElementById("comment-text");

    // коментар валідний -> прихов помилку
    if (commentText.length > 0 && commentText.length <= 200) {
        commentField.classList.remove("error");
        errorMessage.style.display = "none";
    }
});
