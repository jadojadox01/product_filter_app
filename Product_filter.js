
  // Step 1: Select DOM elements
  const categoryButtons = document.querySelectorAll(".filterButton");
  const productList = document.querySelectorAll("#productList li");

  // Step 2: Add event listeners to each category button
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.getAttribute("data-category");

      // Step 3: Filter products
      productList.forEach((product) => {
        const productCategory = product.getAttribute("data-category");

        if (selectedCategory === "All" || productCategory === selectedCategory) {
          product.style.display = "block"; // Show matching products
        } else {
          product.style.display = "none"; // Hide non-matching products
        }
      });
    });
  });
