
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("mobileNav");

    const closePromo = document.getElementById("closePromo");
    const promoBar = document.getElementById("promoBar");

    const searchBtn = document.getElementById("searchBtn");
    const searchBox = document.getElementById("searchBox");
    const searchClose = document.getElementById("searchClose");

    const wishlistBtn = document.getElementById("wishlistBtn");


    // MOBILE MENU

    menuToggle.addEventListener("click", function () {

        mobileNav.classList.toggle("open");
        menuToggle.classList.toggle("active");

        const isOpen = mobileNav.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    // CLOSE MOBILE MENU AFTER CLICKING LINK

    document.querySelectorAll(".mobile-navigation a").forEach(function(link) {

        link.addEventListener("click", function() {

            mobileNav.classList.remove("open");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });


    // CLOSE PROMOTIONAL BAR

    closePromo.addEventListener("click", function() {

        promoBar.style.display = "none";

    });


    // OPEN SEARCH

    searchBtn.addEventListener("click", function() {

        searchBox.classList.toggle("open");

    });


    // CLOSE SEARCH

    searchClose.addEventListener("click", function() {

        searchBox.classList.remove("open");

    });


    // WISHLIST

    wishlistBtn.addEventListener("click", function() {

        wishlistBtn.classList.toggle("saved");

        wishlistBtn.textContent =
            wishlistBtn.classList.contains("saved") ? "♥" : "♡";

    });


    // ESCAPE KEY

    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            mobileNav.classList.remove("open");
            menuToggle.classList.remove("active");
            searchBox.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });


    // RESET MOBILE MENU ON DESKTOP

    window.addEventListener("resize", function() {

        if (window.innerWidth > 720) {

            mobileNav.classList.remove("open");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

});


document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");

    // Mobile menu toggle
    menuButton.addEventListener("click", function () {

        mobileNav.classList.toggle("is-open");

        const isOpen = mobileNav.classList.contains("is-open");

        menuButton.setAttribute("aria-expanded", isOpen);

        menuButton.textContent = isOpen ? "✕" : "☰";

    });

    // Close menu after clicking a link
    const navLinks = document.querySelectorAll(".mobile-nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNav.classList.remove("is-open");

            menuButton.textContent = "☰";

            menuButton.setAttribute("aria-expanded", "false");

        });

    });

    // Close menu with Escape key
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            mobileNav.classList.remove("is-open");

            menuButton.textContent = "☰";

            menuButton.setAttribute("aria-expanded", "false");

        }

    });

    // Close menu when returning to desktop size
    window.addEventListener("resize", function () {

        if (window.innerWidth > 700) {

            mobileNav.classList.remove("is-open");

            menuButton.textContent = "☰";

            menuButton.setAttribute("aria-expanded", "false");

        }

    });

});


// ==============================
// PRODUCT DATA
// ==============================

const products = [
    {
        name: "Bisous",
        price: 120,
        displayPrice: "$100.00–$140.00",
        image: "image/a.webp",
        category: "Bouquet",
        color: "Pink",
        rating: 5,
        sale: "-7%"
    },
    {
        name: "Burnished Blossom",
        price: 55,
        displayPrice: "$43.00–$63.00",
        image: "image/b.webp",
        category: "Bouquet",
        color: "Mixed",
        rating: 4
    },
    {
        name: "Fortune Favours",
        price: 59,
        displayPrice: "$59.00",
        image: "image/c.webp",
        category: "Bouquet",
        color: "Pink",
        rating: 5
    },
    {
        name: "Grace",
        price: 120,
        displayPrice: "$100.00–$140.00",
        image: "image/d.webp",
        category: "Roses",
        color: "White",
        rating: 5
    },
    {
        name: "In Bloom",
        price: 75,
        displayPrice: "$65.00–$98.00",
        image: "image/e.webp",
        category: "Bouquet",
        color: "Mixed",
        rating: 4
    },
    {
        name: "Keep it Green",
        price: 70,
        displayPrice: "$57.00–$87.00",
        image: "image/f.webp",
        category: "Bouquet",
        color: "Green",
        rating: 5
    },
    {
        name: "Lisee",
        price: 80,
        displayPrice: "$60.00–$99.00",
        image: "image/g.webp",
        category: "Bouquet",
        color: "Green",
        rating: 5
    },
    {
        name: "Midsummer Harmony",
        price: 70,
        displayPrice: "$70.00",
        image: "image/h.webp",
        category: "Bouquet",
        color: "Mixed",
        rating: 4
    },
    {
        name: "Mixed Tulips",
        price: 63,
        displayPrice: "$63.00",
        image: "image/i.webp",
        category: "Tulips",
        color: "Mixed",
        rating: 5
    },
    {
        name: "My Desire",
        price: 100,
        displayPrice: "$85.00–$115.00",
        image: "image/j.webp",
        category: "Roses",
        color: "Pink",
        rating: 4
    },
    {
        name: "Newbury Flower Arrangement",
        price: 109,
        displayPrice: "$109.99",
        image: "image/k.webp",
        category: "Bouquet",
        color: "Mixed",
        rating: 4,
        sale: "-19%"
    },
    {
        name: "One in a Million",
        price: 56,
        displayPrice: "$56.00",
        image: "image/l.webp",
        category: "Bouquet",
        color: "Pink",
        rating: 5
    },
    {
        name: "Pink Romance",
        price: 85,
        displayPrice: "$85.00",
        image: "image/m.webp",
        category: "Roses",
        color: "Pink",
        rating: 5
    },
    {
        name: "White Elegance",
        price: 95,
        displayPrice: "$95.00",
        image: "image/n.webp",
        category: "Bouquet",
        color: "White",
        rating: 5
    },
    {
        name: "Garden Beauty",
        price: 65,
        displayPrice: "$65.00",
        image: "image/o.webp",
        category: "Bouquet",
        color: "Mixed",
        rating: 4
    },
    {
        name: "Fresh Tulips",
        price: 60,
        displayPrice: "$60.00",
        image: "image/p.webp",
        category: "Tulips",
        color: "Green",
        rating: 5
    },
    {
        name: "Spring Garden",
        price: 75,
        displayPrice: "$75.00",
        image: "image/q.webp",
        category: "Bouquet",
        color: "Green",
        rating: 4
    },
    {
        name: "Sweet Memories",
        price: 110,
        displayPrice: "$110.00",
        image: "image/r.webp",
        category: "Roses",
        color: "Pink",
        rating: 5
    }
];


// ==============================
// ELEMENTS
// ==============================

const productGrid = document.getElementById("productGrid");
const productCount = document.getElementById("productCount");
const pagination = document.getElementById("pagination");
const sortProducts = document.getElementById("sortProducts");

const productsPerPage = 12;
let currentPage = 1;


// ==============================
// DISPLAY PRODUCTS
// ==============================

function renderProducts(list) {

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;

    const visibleProducts = list.slice(start, end);

    productGrid.innerHTML = "";

    if (list.length === 0) {
        productGrid.innerHTML = `
            <div class="no-products">
                <h2>No products found</h2>
                <p>Try changing your filters.</p>
            </div>
        `;

        productCount.textContent = "Showing 0 results";
        pagination.innerHTML = "";
        return;
    }

    visibleProducts.forEach(product => {

        const card = document.createElement("article");
        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                ${product.sale
                    ? `<span class="sale-badge">${product.sale}</span>`
                    : ""
                }

            </div>

            <div class="product-info">

                <h3 class="product-name">${product.name}</h3>

                <div class="product-rating">
                    ${"★".repeat(product.rating)}
                    <span style="color:#bbb">
                        ${"☆".repeat(5 - product.rating)}
                    </span>
                </div>

                <p class="product-price">
                    ${product.displayPrice}
                </p>

            </div>
        `;

        productGrid.appendChild(card);
    });

    productCount.textContent =
        `Showing ${start + 1}–${Math.min(end, list.length)} of ${list.length} results`;

    renderPagination(list.length);
}


// ==============================
// PAGINATION
// ==============================

function renderPagination(totalProducts) {

    const totalPages = Math.ceil(totalProducts / productsPerPage);

    pagination.innerHTML = "";

    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {

        const button = document.createElement("button");

        button.textContent = i;

        if (i === currentPage) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {

            currentPage = i;

            applyFilters();

            document.querySelector(".products-toolbar")
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        });

        pagination.appendChild(button);
    }

    const next = document.createElement("button");

    next.textContent = "→";
    next.setAttribute("aria-label", "Next page");

    next.addEventListener("click", () => {

        if (currentPage < totalPages) {
            currentPage++;
            applyFilters();
        }

    });

    pagination.appendChild(next);
}


// ==============================
// FILTER PRODUCTS
// ==============================

function getCheckedValues(selector) {

    return [...document.querySelectorAll(selector + ":checked")]
        .map(input => input.value);

}

function applyFilters() {

    const selectedPrices = getCheckedValues(".price-filter");
    const selectedCategories = getCheckedValues(".category-filter");
    const selectedColors = getCheckedValues(".color-filter");
    const selectedRatings = getCheckedValues(".rating-filter");

    let filtered = [...products];

    // Price filter
    if (selectedPrices.length) {

        filtered = filtered.filter(product => {

            return selectedPrices.some(range => {

                const [min, max] = range.split("-").map(Number);

                return product.price >= min && product.price <= max;

            });

        });

    }

    // Category filter
    if (selectedCategories.length) {

        filtered = filtered.filter(product =>
            selectedCategories.includes(product.category)
        );

    }

    // Color filter
    if (selectedColors.length) {

        filtered = filtered.filter(product =>
            selectedColors.includes(product.color)
        );

    }

    // Rating filter
    if (selectedRatings.length) {

        const minimumRating = Math.min(...selectedRatings.map(Number));

        filtered = filtered.filter(product =>
            product.rating >= minimumRating
        );

    }

    // Sorting
    const sortValue = sortProducts.value;

    if (sortValue === "low") {
        filtered.sort((a, b) => a.price - b.price);
    }

    if (sortValue === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    if (sortValue === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderProducts(filtered);
}


// ==============================
// FILTER EVENT LISTENERS
// ==============================

document.querySelectorAll(
    ".price-filter, .category-filter, .color-filter, .rating-filter"
).forEach(input => {

    input.addEventListener("change", () => {
        currentPage = 1;
        applyFilters();
    });

});


// ==============================
// FILTER ACCORDION
// ==============================

document.querySelectorAll(".filter-heading").forEach(button => {

    button.addEventListener("click", () => {

        button.parentElement.classList.toggle("open");

    });

});


// ==============================
// CLEAR ALL FILTERS
// ==============================

document.getElementById("clearFilters").addEventListener("click", () => {

    document.querySelectorAll(
        ".sidebar input[type='checkbox']"
    ).forEach(input => {
        input.checked = false;
    });

    sortProducts.value = "default";

    currentPage = 1;

    applyFilters();

});


// ==============================
// SORT PRODUCTS
// ==============================

sortProducts.addEventListener("change", () => {

    currentPage = 1;

    applyFilters();

});


// ==============================
// MOBILE NAVBAR
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        navLinks.classList.contains("open")
    );

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


// ==============================
// BACK TO TOP
// ==============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==============================
// INITIAL LOAD
// ==============================

renderProducts(products);


document.addEventListener("DOMContentLoaded", () => {

    // MOBILE NAVBAR
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", () => {
            navigation.classList.toggle("active");
            menuToggle.classList.toggle("open");
        });

        navigation.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navigation.classList.remove("active");
                menuToggle.classList.remove("open");
            });
        });
    }

    // CLOSE ANNOUNCEMENT
    const closeOffer = document.querySelector(".close-offer");
    const announcement = document.querySelector(".announcement");

    if (closeOffer && announcement) {
        closeOffer.addEventListener("click", () => {
            announcement.style.display = "none";
        });
    }

    // ACCORDION
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const title = item.querySelector(".accordion-title");

        if (!title) return;

        title.addEventListener("click", () => {

            // Close other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });

            // Toggle current accordion
            item.classList.toggle("active");
        });
    });

    // PRODUCT QUANTITY
    const quantityInput = document.querySelector("#quantity");
    const minusButton = document.querySelector(".quantity-minus");
    const plusButton = document.querySelector(".quantity-plus");

    if (quantityInput && minusButton && plusButton) {

        minusButton.addEventListener("click", () => {
            let value = parseInt(quantityInput.value) || 1;

            if (value > 1) {
                quantityInput.value = value - 1;
            }
        });

        plusButton.addEventListener("click", () => {
            let value = parseInt(quantityInput.value) || 1;

            if (value < 20) {
                quantityInput.value = value + 1;
            }
        });

        quantityInput.addEventListener("change", () => {
            let value = parseInt(quantityInput.value) || 1;
            quantityInput.value = Math.min(20, Math.max(1, value));
        });
    }

    // ADD TO CART
    const cartButton = document.querySelector(".cart-btn");

    if (cartButton) {
        cartButton.addEventListener("click", () => {
            const quantity = quantityInput
                ? quantityInput.value
                : 1;

            const date = document.querySelector("#course-date");

            const selectedDate = date
                ? date.value
                : "Selected date";

            alert(
                "Course added to cart!\n" +
                "Quantity: " + quantity + "\n" +
                "Date: " + selectedDate
            );
        });
    }

    // BACK TO TOP
    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
