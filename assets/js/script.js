// **************** cards ********************

document.addEventListener("DOMContentLoaded", () => {
  Fancybox.bind("[data-fancybox='office-gallery']");
});
$(document).ready(function () {
  $(".slider-2").slick({
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1, // Scroll 1 image at a time
    dots: true, // Show pagination dots
    arrows: false, // Disable arrows (optional)
    infinite: true, // Infinite loop (optional)
    autoplay: true, // Auto slide (optional)
    autoplaySpeed: 2000, // Set autoplay speed (optional)
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px (tablets)
        settings: {
          slidesToShow: 2, // Show 2 images
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px (mobile)
        settings: {
          slidesToShow: 1, // Show 1 image
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// ***************** tabs *********************

// Array of objects representing the tabs
const tabs = [
  {
    name: "Safety",
    icon: "bi bi-hearts",
    content: `
      At 
<a href="https://wingstravels.ca/">
  <span class="primary-text">WingsTravels.ca</span>
</a>, 
we empower you to find the best travel deals without any extra costs. 
We don’t sell flight tickets, hotel rooms, or car rentals directly—instead, we showcase the latest available prices from top providers, giving you the freedom to choose the best offer. 
With a single click, you’ll be directed to your chosen booking platform, where you can complete your reservation seamlessly. 
Enjoy the ease of comparing travel options all in one place with WingsTravels.ca, your trusted travel advisor. 
Discover a smarter, simpler way to plan your journeys and explore the world with confidence.
    `,
    image: "assets/images/safety.webp",
  },

  {
    name: "Service Excellence",
    icon: "bi bi-globe-asia-australia",
    content: `
      At
      <a  href="https://wingstravels.ca/">
        <span class="primary-text">WingsTravels.ca</span>
      </a>, 
      we are committed to delivering service excellence that
      exceeds your expectations. From providing real-time updates on
      the best travel deals to offering seamless navigation, our
      platform is designed with your convenience in mind. We don’t
      just simplify your travel planning—we redefine it, ensuring you
      experience top-tier service at every step. Trust WingsTravels.ca
      to provide a flawless journey from start to finish, empowering
      you to focus on what truly matters: your adventure. With
      unmatched reliability and support, we’re your ultimate partner
      for superior travel planning.
    `,
    image: "assets/images/service-ex.webp",
  },

  {
    name: "Integrity",
    icon: "bi bi-clipboard2-data-fill",
    content: `At
                <a href="https://wingstravels.ca/"
                  ><span class="primary-text">WingsTravels.ca</span></a
                >, integrity is at the heart of everything we do. We provide
                honest, transparent access to the best travel deals without
                hidden fees or unexpected charges. Our goal is to empower you
                with reliable information from top providers, ensuring you can
                make informed choices that suit your needs. By directing you
                straight to the booking platform of your choice, we uphold our
                commitment to fairness and simplicity. Trust WingsTravels.ca to
                always put your interests first, delivering a travel planning
                experience built on trust, transparency, and genuine care for
                your journey.`,
    image: "assets/images/integrity.webp",
  },

  {
    name: "Innovation",
    icon: "bi bi-bounding-box-circles",
    content: `At
                <a href="https://wingstravels.ca/"
                  ><span class="primary-text">WingsTravels.ca</span></a
                >, innovation drives us to enhance your travel planning
                experience. We continuously evolve our platform to provide
                cutting-edge tools that simplify finding the best travel deals.
                By curating the latest prices from top providers, we empower you
                to explore options effortlessly.
                With just one click, you'll be seamlessly directed to your
                preferred booking platform to finalize your plans. Enjoy the
                benefits of a smarter, faster, and more intuitive way to plan
                your trips. At WingsTravels.ca, we redefine travel convenience
                through innovative solutions tailored to your needs.`,
    image: "assets/images/innovation.webp",
  },

  {
    name: "Teamwork",
    icon: "bi bi-microsoft-teams",
    content: `At
                <a href="https://wingstravels.ca/"
                  ><span class="primary-text">WingsTravels.ca</span></a
                >, teamwork is the foundation of our success. Our dedicated team
                works collaboratively to bring you the most accurate and
                up-to-date travel deals from trusted providers worldwide. By
                combining expertise and innovation, we ensure a seamless
                platform that empowers you to find the best options
                effortlessly. With just one click, you’ll be directed to your
                chosen booking platform to finalize your plans with ease.
                Experience the results of our collective effort to make travel
                planning simpler, faster, and more efficient. At
                WingsTravels.ca, we work together to help you explore the world.`,
    image: "assets/images/team-work.webp",
  },

  {
    name: "Responsibility",
    icon: "bi bi-shield-fill-check",
    content: `At
                <a href="https://wingstravels.ca/"
                  ><span class="primary-text">WingsTravels.ca</span></a
                >, responsibility is at the core of our mission. We are
                committed to providing you with a reliable platform that ensures
                access to the best travel deals without hidden fees or
                surprises. By partnering with trusted providers, we take pride
                in delivering accurate and transparent information to help you
                make informed decisions. With just one click, you’ll be directed
                to your selected booking platform to complete your reservation
                seamlessly. Count on WingsTravels.ca for a dependable,
                hassle-free travel planning experience that puts your needs
                first every step of the way.`,
    image: "assets/images/responsibility.webp",
  },
];

// DOM Elements
const tabsContainer = document.getElementById("tabs-container");
const tabContent = document.getElementById("tab-content");
const tabImage = document.getElementById("tab-image");

// Function to render tabs
function renderTabs() {
  tabs.forEach((tab, index) => {
    const tabElement = document.createElement("a");
    tabElement.href = "#";
    tabElement.classList.add("tab-link", "heading-4", "mb-4");
    if (index === 0) tabElement.classList.add("active"); // Make the first tab active by default
    tabElement.innerHTML = `<i class="${tab.icon}"></i>${tab.name}`;
    tabElement.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveTab(index);
    });
    tabsContainer.appendChild(tabElement);
  });
}

// Function to set active tab
function setActiveTab(index) {
  // Remove active class from all tabs
  document.querySelectorAll(".tab-link").forEach((tab, i) => {
    if (i === index) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  // Update content and image
  tabContent.innerHTML = `<p class="text-light text-start para">${tabs[index].content}</p>`;
  tabImage.innerHTML = `<img class="img-fluid" src="${tabs[index].image}" alt="${tabs[index].name}" />`;
}

// Initialize
function init() {
  renderTabs();
  setActiveTab(0); // Set the first tab as active by default
}

init();


// slick slider

