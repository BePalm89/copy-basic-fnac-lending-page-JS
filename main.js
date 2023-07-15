const PRODUCTS = [
  {
    name: "Rush!",
    artist: "Måneskin",
    img: "https://static.fnac-static.com/multimedia/Images/ES/NR/67/3a/7a/8010343/1507-1.jpg",
    price: 32.99,
    rating: 4.5,
    stock: 20,
    seller: "Fnac",
    releaseDate: "01/01/2023",
    numberOfReviews: 6,
    typeOfMusic: "Rock",
  },
  {
    name: "Hatful Of Hollow",
    artist: "The Smith",
    img: "https://static.fnac-static.com/multimedia/ES/images_produits/ES/ZoomPE/4/2/8/0825646658824/tsp20140506171213/Hatful-Of-Hollow-Edicion-vinilo.jpg",
    price: 25.99,
    rating: 4.3,
    stock: 26,
    seller: "Hoppipolla",
    releaseDate: "12/12/1984",
    numberOfReviews: 16,
    typeOfMusic: "Indie pop",
  },
  {
    name: "Ultra Mono Ed Deluxe",
    artist: "Idles",
    img: "https://static.fnac-static.com/multimedia/Images/ES/NR/93/7c/5c/6061203/1507-1.jpg",
    price: 43.99,
    rating: 4.5,
    stock: 2,
    seller: "Silver",
    releaseDate: "14/09/2020",
    numberOfReviews: 25,
    typeOfMusic: "Punk",
  },
  {
    name: "Vestida de Nit",
    artist: "Silvia Perez",
    img: "https://static.fnac-static.com/multimedia/Images/ES/NR/88/46/15/1394312/1507-1/tsp20171018124210/Vestida-de-Nit-Vinilo.jpg",
    price: 25.99,
    rating: 4.7,
    stock: 56,
    seller: "MplusL",
    releaseDate: "13/10/2017",
    numberOfReviews: 25,
    typeOfMusic: "Flamenco",
  },
  {
    name: "Greatest Hits II",
    artist: "Queen",
    img: "https://static.fnac-static.com/multimedia/Images/ES/NR/5f/e3/13/1303391/1507-1/tsp20170822145737/Greatest-Hits-II-Vinilo.jpg",
    price: 45.99,
    rating: 4.8,
    stock: 6,
    seller: "Hoppipolla",
    releaseDate: "03/11/2000",
    numberOfReviews: 55,
    typeOfMusic: "Rock",
  },
  {
    name: "Nevermind",
    artist: "Nirvana",
    img: "https://static.fnac-static.com/multimedia/ES/images_produits/ES/ZoomPE/7/1/5/0720642442517/tsp20150611144728/Nevermind-Vinilo.jpg",
    price: 33.99,
    rating: 3.9,
    stock: 59,
    seller: "Silver",
    releaseDate: "24/09/1991",
    numberOfReviews: 64,
    typeOfMusic: "Rock",
  },
  {
    name: "Maximum overload",
    artist: "ACDC",
    img: "https://static.fnac-static.com/multimedia/Images/ES/NR/65/a9/6a/6990181/1507-1.jpg",
    price: 19.99,
    rating: 4.1,
    stock: 12,
    seller: "Fnac",
    releaseDate: "24/07/2022",
    numberOfReviews: 44,
    typeOfMusic: "Heavy Metal",
  },
  {
    name: "Maximum overload",
    artist: "Rosalia",
    img: "https://static.fnac-static.com/multimedia/Images/ES/NR/35/61/70/7364917/1507-1.jpg",
    price: 29.45,
    rating: 2.5,
    stock: 29,
    seller: "Fnac",
    releaseDate: "28/03/2022",
    numberOfReviews: 23,
    typeOfMusic: "Pop",
  },
  {
    name: "Divide",
    artist: "Ed Sheeran",
    img: "https://static.fnac-static.com/multimedia/Images/ES/NR/dc/2a/14/1321692/1507-1/tsp20170822122939/Divide-Vinilo.jpg",
    price: 32.99,
    rating: 4.5,
    stock: 123,
    seller: "MplusL",
    releaseDate: "17/03/2017",
    numberOfReviews: 14,
    typeOfMusic: "Pop",
  },
  {
    name: "The velvet underground & Nico",
    artist: "The velvet underground",
    img: "https://static.fnac-static.com/multimedia/ES/images_produits/ES/ZoomPE/8/8/0/0602537171088/tsp20121102174733/The-Velvet-Underground-Nico-Edicion-vinilo.jpg",
    price: 33.99,
    rating: 4.9,
    stock: 58,
    seller: "MplusL",
    releaseDate: "17/10/2012",
    numberOfReviews: 26,
    typeOfMusic: "Rock",
  },
];

// A function to avoid redundancy
const getElement = (selector) => document.querySelector(selector);
// Global selector
const headerElement = getElement("header");
const asideElement = getElement("aside");
const mainElement = getElement("main");
const footerElement = getElement("footer");
const cardContainerElement = getElement(".card-container");

const filterSection = ["price", "seller", "typeOfMusic"];

// Navbar
const getNavbarTemplate = () => {
  return `
    <nav>
      <div class="logo-search-input">
        <a href="#">
          <img class="logo" src="./assets/img/fnac_logo.png" alt="fnac logo"/>
        </a>
        <div class="input-search">
          <input type="text" name="search" id="serach" placeholder="What are you looking for today?"/>
          <div class="icon-container">
            <img class="icon" src="./assets/img/search.svg" alt="icon search"/>
          </div>
        </div>
      </div>
      <ul class="links">
        <li>
          <a href="#">
            <img class="icon" src="./assets/img/user.svg" alt="icon user">
            <p>My profile</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="icon" src="./assets/img/cart.svg" alt="icon cart">
            <p>My cart</p>
          </a>
        </li>
        <li>
          <img class="icon filter-icon" src="./assets/img/filter-svgrepo-com.svg" alt="icon filter">
        </li>
      </ul>
    </nav>
  `;
};

const generateNavbar = () => {
  const navbar = getNavbarTemplate();
  headerElement.innerHTML += navbar;
};

generateNavbar();

// Footer
const socialNetworksObject = [
  { link: "https://www.facebook.com/claudia.palmerini.3/", social: "facebook" },
  {
    link: "https://www.linkedin.com/in/claudia-palmerini-b01a99136/",
    social: "linkedin",
  },
  { link: "https://www.instagram.com/palm_fernweh/", social: "instagram" },
  { link: "https://github.com/BePalm89", social: "github" },
];

const getFooterTemplate = () => {
  return `
    <ul>
    ${socialNetworksObject
      .map((social) => {
        return `
      <li>
        <a
          href="${social.link}"
          target="__blank"
          ><i class="fa-brands fa-${social.social}"></i
        ></a>
    </li>`;
      })
      .join("")}
    </ul>
    <p>Created with 💝 by Claudia Palmerini</p>
  `;
};

const generateFooter = () => {
  const template = getFooterTemplate();
  footerElement.innerHTML += template;
};

generateFooter();

// Products section

const initProducts = (products) => {
  cardContainerElement.innerHTML = "";

  if (products.length === 0) {
    const h2Element = document.createElement("h2");
    h2Element.textContent = "The items you want have not been found";
    h2Element.className = "not-found";
    cardContainerElement.appendChild(h2Element);
  } else {
    displayProducts(products);
  }
};

const displayProducts = (products) => {
  products.forEach((product) => {
    const productTemplate = getTamplateCard(product);
    cardContainerElement.innerHTML += productTemplate;
  });
};

const getTamplateCard = (card) => {
  const rating = card.rating;
  const stars =
    "⭐️".repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? "⭐️" : "");
  return `
  <div class="card" role="button">
    <div class="card-img">
      <img src="${card.img}" alt="${card.name}">
    </div>
    <div class="primary-info">
      <div class="info-vynil">
        <h3>${card.name}</h3>
        <p>${card.artist}</p>
      </div>
      <div class="price">
        ${card.price}€
      </div>
    </div>
    <div class="seller-info">
      <p>Seller:</p>
      <p>${card.seller}</p>
    </div>
    <div class="release-info">
      <p>Date of release:</p>
      <p>${card.releaseDate}</p>
    </div>
    <div class="rating">
    ${stars} <span>(${card.numberOfReviews})</span>         
    </div>
    <div class="cta">
      <button>
        Add to Cart
      </button>
    </div>
</div>`;
};

initProducts(PRODUCTS);

let numberOfFilteredProducts = 0;

// Filter

const getFilterDesktopContainerTabletTemplate = (filterSection) => {
  const result = filterSection.replace(/([A-Z])/g, " $1");
  const formattedText = result.charAt(0).toUpperCase() + result.slice(1);
  return `
  <div class="filter-container filter-box">
    <div class="title-filter">
      <h4>${formattedText}</h4>
    </div>
    <div class="filter-${filterSection}"></div>
  </div>
  `;
};

const generateFiltersBoxes = () => {
  filterSection.forEach((filter) => {
    const filterBoxTemplate = getFilterDesktopContainerTabletTemplate(filter);
    asideElement.innerHTML += filterBoxTemplate;
  });
};

generateFiltersBoxes();

// Select every filter section class
const priceFilterSectionElement = document.querySelector(".filter-price");
const sellerFilterSectionElement = document.querySelector(".filter-seller");
const typeMusicFilterSectionElement = document.querySelector(
  ".filter-typeOfMusic"
);

const displayFilter = () => {
  filterByTypeOfMusic();
  filterByPrice();
  filterBySeller();
};

let activeFilterSectionElement = null;

const updateActiveFilter = (
  numberOfFilteredProducts,
  minPriceValue,
  sellerValue,
  typeOfMusicValue
) => {
  activeFilterSectionElement.innerHTML = getTemplateActiveFilter(
    numberOfFilteredProducts,
    minPriceValue,
    sellerValue,
    typeOfMusicValue
  );
};

let activeFilterBox = null;

const handleClearFilter = () => {
  document.querySelector("#min-price").value = "";
  document.querySelector("#sellers").value = "";
  const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  activeFilterBox = document.querySelectorAll(".filter-container")[0];
  activeFilterBox.style.display = "none";
  numberOfFilteredProducts = 0;

  initProducts(PRODUCTS);
};

const filterProducts = (minPriceValue, sellerValue, typeOfMusicValue) => {
  return PRODUCTS.filter((product) => {
    const minPriceMatched = !minPriceValue || product.price >= minPriceValue;
    const sellerMatched = !sellerValue || sellerValue === product.seller;
    const typeOfMusicMatched =
      typeOfMusicValue.length === 0 ||
      typeOfMusicValue.includes(product.typeOfMusic);
    return minPriceMatched && sellerMatched && typeOfMusicMatched;
  });
};

const handleFilters = () => {
  const minPriceValue = document.querySelector("#min-price").value;
  const sellerValue = document.querySelector("#sellers").value;
  const typeOfMusicValue = Array.from(
    document.querySelectorAll("input[type=checkbox]:checked")
  ).map((type) => type.value);

  const filteredProducts = filterProducts(
    minPriceValue,
    sellerValue,
    typeOfMusicValue
  );

  numberOfFilteredProducts = filteredProducts.length;

  activeFilterBox = document.querySelectorAll(".filter-container")[0];
  activeFilterBox.style.display = "block";

  if (!activeFilterSectionElement) {
    const asideContainer = document.querySelector(".aside-container");

    const activeFilterContainerTemplate =
      getFilterDesktopContainerTabletTemplate("activeFilter");
    asideContainer.insertAdjacentHTML(
      "afterend",
      activeFilterContainerTemplate
    );
    activeFilterSectionElement = document.querySelector(".filter-activeFilter");
  }

  updateActiveFilter(
    numberOfFilteredProducts,
    minPriceValue,
    sellerValue,
    typeOfMusicValue
  );

  const clearFilterButton = document.querySelector("#clear");

  clearFilterButton.addEventListener("click", handleClearFilter);

  initProducts(filteredProducts);
};

const getTemplateActiveFilter = (
  numberOfFilteredProducts,
  minPriceValue,
  sellerValue,
  typeOfMusicValue
) => {
  return `<p class="results">${numberOfFilteredProducts} results</p>
  ${minPriceValue && `<div class="active-filter">${minPriceValue}</div>`}
  ${sellerValue && `<div class="active-filter">${sellerValue}</div>`}
  ${typeOfMusicValue
    .map((type) => {
      return `<div class="active-filter">${type} </div>`;
    })
    .join("")}
    <div class="clear-container">
      <button id="clear">Clear filters</button>
    </div>
    `;
};

const filterByPrice = () => {
  const filterPriceTemplate = getTemplatePriceFilter();
  priceFilterSectionElement.innerHTML += filterPriceTemplate;

  const inputMinPriceElement = document.querySelector("#min-price");
  inputMinPriceElement.addEventListener("input", handleFilters);
};

const getTemplatePriceFilter = () => {
  return `
  <input id="min-price" type="number" min="0" max="100" placeholder="Min"/>
  `;
};

const filterBySeller = () => {
  let sellers = [];

  PRODUCTS.forEach((product) => {
    if (!sellers.includes(product.seller)) {
      sellers.push(product.seller);
    }
  });

  const filterSellerTemplate = getTemplateSellerFilter(sellers);
  sellerFilterSectionElement.innerHTML += filterSellerTemplate;

  const sellerSelectElement = document.querySelector("#sellers");
  sellerSelectElement.addEventListener("input", handleFilters);
};

const getTemplateSellerFilter = (sellers) => {
  return `
  <select name="sellers" id="sellers">
    <option value="" disabled selected hidden>Select a seller</option>
    ${sellers.map((seller) => {
      return `<option value="${seller}">${seller}</option>`;
    })}
  </select>
  `;
};

const filterByTypeOfMusic = () => {
  const typesOfMusic = new Set();
  PRODUCTS.forEach((product) => {
    typesOfMusic.add(product.typeOfMusic);
  });
  const filterTypesOfMusicTemplate = getTemplateTypeOfMusicFilter(
    Array.from(typesOfMusic)
  );
  typeMusicFilterSectionElement.innerHTML += filterTypesOfMusicTemplate;
  const typesOfMusicCheckbox = document.querySelectorAll(
    "input[type=checkbox]"
  );
  Array.from(typesOfMusicCheckbox).map((checkbox) => {
    checkbox.addEventListener("change", handleFilters);
  });
};

const getTemplateTypeOfMusicFilter = (typesOfMusic) => {
  return `
  ${typesOfMusic
    .map((type) => {
      return `
      <div>
      <input type="checkbox" id="${type}" name="${type}" value="${type}">
      <label for="${type}">${type}</label><br>
      </div>`;
    })
    .join("")}`;
};

displayFilter();

const handleOpenFilterSection = () => {
  asideElement.classList.toggle("open");
};

const filterButton = document.querySelector(".filter-icon");
filterButton.addEventListener("click", handleOpenFilterSection);
