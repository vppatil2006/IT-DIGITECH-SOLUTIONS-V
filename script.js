// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");

  const icon = menuBtn.querySelector("i");

  if (navbar.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// Close mobile menu after clicking a link

document.querySelectorAll("#navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

// ================= COUNTER =================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 80;

        const updateCounter = () => {
          current += increment;

          if (current < target) {
            counter.innerText = Math.ceil(current);

            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target + "+";
          }
        };

        updateCounter();

        counterObserver.unobserve(counter);
      }
    });
  },
  {
    threshold: 0.5,
  },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  alert(
    "Thank you for contacting IT DigiTech Solutions! " +
      "Your enquiry has been received.",
  );

  contactForm.reset();
});

// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ================= ACTIVE NAV =================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Message script
function send() {
  let message1 = document.getElementById("msg1").value;
  let message2 = document.getElementById("msg2").value;
  let message3 = document.getElementById("msg3").value;
  let message4 = document.getElementById("msg4").value;
  let message5 = document.getElementById("msg5").value;
  let phone = "9579409898"; // your WhatsApp number
  let fullmessage =
    message1 + "\n" + message2 + "\n" + message3 + "\n" + message4 + "\n" + message5;
  let url =
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(fullmessage);
  window.open(url, "_blank");
}
