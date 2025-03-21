  document.addEventListener("DOMContentLoaded", function () {
    const bgInput = document.querySelector('.setting-card input[placeholder="Enter image URL"]');
    const saveButton = bgInput?.nextElementSibling;
    const resetButton = saveButton?.nextElementSibling;

    const savedBackground = localStorage.getItem("backgroundImage");
    if (savedBackground) {
        document.body.style.backgroundImage = `url(${savedBackground})`;
    }

    if (saveButton) {
        saveButton.addEventListener("click", function () {
            const imageUrl = bgInput.value.trim();
            if (imageUrl) {
                document.body.style.backgroundImage = `url(${imageUrl})`;
                localStorage.setItem("backgroundImage", imageUrl);
            }
        });
    }

    if (resetButton) {
        resetButton.addEventListener("click", function () {
            document.body.style.backgroundImage = "";
            localStorage.removeItem("backgroundImage");
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
  const searchEngine = localStorage.getItem("searchEngine") || "google";  
  const selectElement = document.getElementById("search-engine-selector");
  selectElement.value = searchEngine;  
});


document.getElementById("search-engine-selector").addEventListener("change", function() {
  localStorage.setItem("searchEngine", this.value);  
});
