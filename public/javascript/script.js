(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// Handle GST toggle
const taxBtn = document.getElementById("switchCheckDefault");
const basePrices = document.querySelectorAll(".price-amount");
const gstPrices = document.querySelectorAll(".price-amount-gst");

const originalPrices = [];

basePrices.forEach((el) => {
  const text = el.innerText.replace(/[₹,]/g, "");
  const price = parseFloat(text);
  originalPrices.push(price);
});

taxBtn.addEventListener("change", () => {
  gstPrices.forEach((el, index) => {
    if (taxBtn.checked) {
      const gst = (originalPrices[index] * 0.18).toFixed(0);
      el.innerText = `+ ₹${Number(gst).toLocaleString("en-IN")}`;
    } else {
      el.innerText = "";
    }
  });
});

const filterButtons = document.querySelectorAll('.filter');
const listings = document.querySelectorAll('.col');
const noResultsMessage = document.getElementById('noResultsMessage');

let activeCategory = null;

filterButtons.forEach((filter) => {
  if (!filter.classList.contains('show-more-btn')) { // Skip show more button
    filter.addEventListener('click', () => {
      const selectedCategory = filter.dataset.category;

      // Toggle off if same filter clicked
      if (activeCategory === selectedCategory) {
        activeCategory = null;
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Show all listings
        listings.forEach((listing) => {
          listing.style.display = 'block';
        });

        if (noResultsMessage) {
          noResultsMessage.style.display = 'none';
        }
        return;
      }

      // Remove active class from all filters
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked filter
      filter.classList.add('active');
      activeCategory = selectedCategory;

      // Filter listings
      let visibleCount = 0;
      listings.forEach((listing) => {
        if (listing.dataset.category === selectedCategory) {
          listing.style.display = 'block';
          visibleCount++;
        } else {
          listing.style.display = 'none';
        }
      });

      // Show/hide no results message
      if (noResultsMessage) {
        noResultsMessage.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  }
});

// Update show more button functionality
const showMoreBtn = document.querySelector(".show-more-btn");
const btnIcon = showMoreBtn.querySelector("i");
const btnText = showMoreBtn.querySelector(".show-more-text");

showMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  const additionalFilters = document.querySelector(".additional-filters");

  additionalFilters.classList.toggle("show");
  btnIcon.classList.toggle("fa-chevron-down");
  btnIcon.classList.toggle("fa-chevron-up");
  btnText.textContent = additionalFilters.classList.contains("show")
    ? "Show less"
    : "Show more";
});