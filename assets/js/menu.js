console.log();
const activeMenuItem = document.getElementById(window.location.pathname.replace("/", "").split(".")[0]);
activeMenuItem.style.color = "#FF001F";

// bu sayede Anasayfa-Hakkımda-İletişim bölümünde hangisinde ise o renkli olacak
