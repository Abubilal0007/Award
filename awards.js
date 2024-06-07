function toggleContent() {
  var content = document.getElementById("hideContent");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

function closeContent(event) {
  event.stopPropagation();
  var content = document.getElementById("hideContent");
  content.style.display = "none";
}



let mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.onclick = function () {
  scrollToTop();
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
