function myFunction() {
    const switchTheme = document.querySelector(".toggle");
  
    switchTheme.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }