/*
  ================================
  = Progress & Counter In Scroll =
  ================================
*/
let progressDiv = document.querySelector(".progress-sec"),
  progressBarsDivs = document.querySelectorAll(".progress"),
  counterDiv = document.querySelector(".counter-sec"),
  counterTag = document.querySelectorAll(".counter-sec h3");

// Scroll Out Init
ScrollOut({
  targets: ".progress-sec, .counter-sec"
});

window.addEventListener("scroll", () => {
  // Progress
  if (progressDiv.dataset.scroll == "in") {
    progressBarsDivs.forEach(ele => {
      let valueNow = ele.getAttribute("aria-valuenow");
      ele.querySelector(".progress-bar").style.width = `${valueNow}%`;
    });
  } else {
    progressBarsDivs.forEach(ele => {
      ele.querySelector(".progress-bar").style.width = "0";
    });
  }

  // Counter
  if (counterDiv.dataset.scroll == "in") {
    counterTag.forEach(tag => {
      let valueNow = tag.getAttribute("data-counter");
      let timer = setInterval(() => {
        if (+tag.textContent < valueNow) {
          tag.textContent++;
        } else {
          clearInterval(timer);
        }
      }, 800);
    });
  } else {
    counterTag.forEach(tag => {
      tag.textContent = 0;
    });
  }
});

/*
  ================
  = Filter Items =
  ================
*/
const filterListItems = document.querySelectorAll(".list-group li"),
  filterdItems = document.querySelectorAll(".filterd-items a");

filterListItems.forEach(list => {
  list.addEventListener("click", () => {
    document.querySelector(".list-group li.active").classList.remove("active");
    list.classList.add("active");
    let filterdValue = list.dataset.filter;
    filterdItems.forEach(box => {
      if (box.classList.contains(filterdValue)) {
        box.classList.remove("hidden");
        box.classList.add("shown");
      } else {
        box.classList.remove("shown");
        box.classList.add("hidden");
      }
    });
  });
});

/*
  =================
  = Light Gallery =
  =================
*/
lightGallery(document.getElementById('lightgallery'));

/*
  ====================
  = AOS Library Init =
  ====================
*/
AOS.init();