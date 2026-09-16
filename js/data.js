const products = [
    {
        name: "Example Wireless Headphones",
        category: "Audio",
        description: "Comfortable wireless headphones with great battery life.",
        price: "£89.99",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        link: "https://example.com",
        rating: 4.5,
        review: "Great sound quality and very comfortable to wear. The battery life is also impressive."
    },

    {
        name: "Example Laptop",
        category: "Technology",
        description: "A powerful everyday laptop suitable for work and study.",
        price: "£699.99",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        link: "https://example.com",
        rating: 4.7,
        review: "Fast, reliable and a great choice for everyday work, studying and browsing."
    },

    {
        name: "Example Smartwatch",
        category: "Fitness",
        description: "Track your workouts, activity and everyday health metrics.",
        price: "£129.99",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        link: "https://example.com",
        rating: 4.4,
        review: "Easy to use with useful fitness features and a clean, stylish design."
    }
];

const productGrid = document.getElementById("product-grid");

function displayProducts(category = "All") {
    productGrid.innerHTML = "";

    const filteredProducts = category === "All"
        ? products
        : products.filter(product => product.category === category);

    filteredProducts.forEach(product => {

        const card = document.createElement("article");
        card.className = "product-card";

        card.innerHTML = `
            <img 
                src="${product.image}" 
                alt="${product.name}"
                class="product-image"
            >

            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <h3>${product.name}</h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-review">
                    <div class="rating">
                        <span class="stars">★★★★★</span>
                        <strong>${product.rating}</strong>
                    </div>

                    <p class="review-text">
                        "${product.review}"
                    </p>
                </div>

                <div class="product-bottom">

                    <span class="price">
                        ${product.price}
                    </span>

                    <a 
                        href="${product.link}" 
                        class="view-button"
                        target="_blank"
                        rel="nofollow sponsored noopener"
                    >
                        View product
                    </a>

                </div>

            </div>
        `;

        productGrid.appendChild(card);
    });
}

displayProducts();

const categories = document.querySelectorAll(".category");

categories.forEach(category => {
    category.addEventListener("click", function () {
        const selectedCategory = this.dataset.category;
        displayProducts(selectedCategory);
    });
});