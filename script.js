const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const progress = document.querySelector(".progress");
window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
}, { passive: true });


const PORTFOLIO_ITEMS = [
  { category:"pubmats", title:"PUBMAT 1", description:"Sample Recognition Pubmat.", image:"assets/works/pubmats/sample-01.jpeg" },
  { category:"pubmats", title:"PUBMAT 2", description:"Sample Promotional Pubmat.", image:"assets/works/pubmats/sample-02.jpeg" },
  { category:"pubmats", title:"PUBMAT 3", description:"Sample Event Pubmat.", image:"assets/works/pubmats/sample-03.png" },
  { category:"pubmats", title:"PUBMAT 4", description:"Sample Birthday Pubmat.", image:"assets/works/pubmats/sample-04.png" },
  { category:"pubmats", title:"PUBMAT 5", description:"Sample School-Related Pubmat.", image:"assets/works/pubmats/sample-05.png" },
  { category:"web-development", title:"Website Sample 1 (Desktop Version)", description:"This is my sample coded website for my class/section.", image:"assets/works/web-development/sample-01.png" },
  { category:"web-development", title:"Website Sample 2 (Desktop Version)", description:"This is my sample coded website for my class/section.", image:"assets/works/web-development/sample-02.png" },
  { category:"web-development", title:"Website Sample 3 (Desktop Version)", description:"This is my sample coded website for my class/section.", image:"assets/works/web-development/sample-03.png" },
  { category:"web-development", title:"Website Sample 4 (Desktop Version)", description:"This is my sample coded website for my class/section.", image:"assets/works/web-development/sample-04.png" },
  { category:"web-development", title:"Website Sample 5 (Desktop Version)", description:"This is my sample coded website for my class/section.", image:"assets/works/web-development/sample-05.png" },
  { category:"web-development", title:"Website Sample 1 (Mobile Version)", description:"This is my sample coded website for my class/section.", image:"assets/works/web-development/sample-06.jpeg" },
  { category:"web-development", title:"Website Sample 2 (Mobile Version)", description:"This is my sample coded website for my class/section.", image:"assets/works/web-development/sample-07.jpeg" },
  { category:"web-development", title:"Website Sample 3 (Mobile Version)", description:"This is my sample coded website for my class/section.", image:"assets/works/web-development/sample-08.jpeg" },
  { category:"web-development", title:"Website Sample 4 (Mobile Version)", description:"This is my sample coded website for my class/section.", image:"assets/works/web-development/sample-09.jpeg" },
  { category:"web-development", title:"Website Sample 5 (Mobile Version)", description:"This is my sample coded website for my class/section.", image:"assets/works/web-development/sample-10.jpeg" },
  { category:"web-development", title:"Website Sample 6 (Desktop Version)", description:"This is my sample coded website for writing shop with a secondary linked to Kofi.", image:"assets/works/web-development/sample-11.png" },
  { category:"web-development", title:"Website Sample 7 (Desktop Version)", description:"This is my sample coded website for writing shop with a secondary linked to Kofi.", image:"assets/works/web-development/sample-12.png" },
  { category:"web-development", title:"Website Sample 8 (Desktop Version)", description:"This is my sample coded website for writing shop with a secondary linked to Kofi.", image:"assets/works/web-development/sample-13.png" },
  { category:"web-development", title:"Website Sample 9 (Desktop Version)", description:"This is my sample coded website for writing shop with a secondary linked to Kofi.", image:"assets/works/web-development/sample-14.png" },
  { category:"web-development", title:"Website Sample 10 (Desktop Version)", description:"This is my sample coded website for writing shop with a secondary linked to Kofi.", image:"assets/works/web-development/sample-15.png" },
  { category:"web-development", title:"Website Sample 11 (Desktop Version)", description:"This is my sample coded website for writing shop with a secondary linked to Kofi.", image:"assets/works/web-development/sample-16.png" },
  { category:"web-development", title:"Website Sample 12 (Desktop Version)", description:"This is my sample coded website for writing shop with a secondary linked to Kofi.", image:"assets/works/web-development/sample-17.png" },
  { category:"web-development", title:"Website Sample 6 (Mobile Version)", description:"This is my sample coded website for writing shop with a secondary linked to Kofi.", image:"assets/works/web-development/sample-18.jpeg" },
  { category:"web-development", title:"Website Sample 7 (Mobile Version)", description:"This is my sample coded website for writing shop with a secondary linked to Kofi.", image:"assets/works/web-development/sample-19.jpeg" },
  { category:"web-development", title:"Website Sample 8 (Mobile Version)", description:"This is my sample coded website for writing shop with a secondary linked to Kofi.", image:"assets/works/web-development/sample-20.jpeg" },
  { category:"web-development", title:"Website Sample 9 (Mobile Version)", description:"This is my sample coded website for writing shop with a secondary linked to Kofi.", image:"assets/works/web-development/sample-21.jpeg" },
  { category:"web-development", title:"Website Sample 10 (Mobile Version)", description:"This is my sample coded website for writing shop with a secondary linked to Kofi.", image:"assets/works/web-development/sample-22.jpeg" },
  { category:"web-development", title:"Website Sample 11 (Mobile Version)", description:"This is my sample coded website for writing shop with a secondary linked to Kofi.", image:"assets/works/web-development/sample-23.jpeg" },
  { category:"web-development", title:"Website Sample 12 (Mobile Version)", description:"This is my sample coded website for writing shop with a secondary linked to Kofi.", image:"assets/works/web-development/sample-24.jpeg" },
];

const CATEGORY_NAMES = {
  pubmats:"Pubmats & Posters",
  "web-development":"Website Development",
};

const gallery = document.getElementById("portfolioGallery");
const galleryEmpty = document.getElementById("galleryEmpty");
const filterButtons = document.querySelectorAll(".work-filter");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCategory = document.getElementById("lightboxCategory");
const lightboxDescription = document.getElementById("lightboxDescription");
const lightboxOpen = document.getElementById("lightboxOpen");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let visibleItems = [];
let activeIndex = 0;

function renderGallery(filter = "all") {
  visibleItems = PORTFOLIO_ITEMS.filter(item => filter === "all" || item.category === filter);
  gallery.innerHTML = "";

  visibleItems.forEach((item, index) => {
    const card = document.createElement("button");
    card.className = "portfolio-item reveal visible";
    card.type = "button";
    card.innerHTML = `
      <div class="portfolio-thumb"><img src="${item.image}" alt="${item.title}" loading="lazy"></div>
      <div class="portfolio-details">
        <span class="category">${CATEGORY_NAMES[item.category]}</span>
        <h3>${item.title}</h3>
        <p>Click to view sample</p>
      </div>`;
    card.addEventListener("click", () => openLightbox(index));
    gallery.appendChild(card);
  });

  galleryEmpty.style.display = visibleItems.length ? "none" : "block";
}

function updateLightbox() {
  const item = visibleItems[activeIndex];
  if (!item) return;
  lightboxImage.src = item.image;
  lightboxImage.alt = item.title;
  lightboxTitle.textContent = item.title;
  lightboxCategory.textContent = CATEGORY_NAMES[item.category];
  lightboxDescription.textContent = item.description;
  lightboxOpen.href = item.image;
  const multiple = visibleItems.length > 1;
  lightboxPrev.style.display = multiple ? "block" : "none";
  lightboxNext.style.display = multiple ? "block" : "none";
}

function openLightbox(index) {
  activeIndex = index;
  updateLightbox();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  lightboxImage.src = "";
}

function changeLightbox(direction) {
  if (visibleItems.length < 2) return;
  activeIndex = (activeIndex + direction + visibleItems.length) % visibleItems.length;
  updateLightbox();
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderGallery(button.dataset.filter);
  });
});

lightboxClose?.addEventListener("click", closeLightbox);
lightboxPrev?.addEventListener("click", () => changeLightbox(-1));
lightboxNext?.addEventListener("click", () => changeLightbox(1));
document.querySelector("[data-close-lightbox]")?.addEventListener("click", closeLightbox);

document.addEventListener("keydown", event => {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") changeLightbox(-1);
  if (event.key === "ArrowRight") changeLightbox(1);
});

renderGallery();

