const pages = [
    "index.html",      // Page 1
    "griffith.html",   // Page 2
    "gracie_concert.html", // Page 3
    "taxi_cab.html",   // Page 4
    "after.html",      // Page 5
    "huntington.html", // Page 6
    "airplane.html",   // Page 7
    "valentine.html"   // Page 8
];

// Get the current page from the URL
let currentPage = getCurrentPage();  // Get the current page index based on the URL

const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

console.log(currentPage);  // Log the current page index for debugging

nextBtn.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        window.location.href = pages[currentPage]; // Navigate to the next page
    }
});

backBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        window.location.href = pages[currentPage]; // Navigate to the previous page
    }
});

// Function to get the current page index based on the URL
function getCurrentPage() {
    const currentUrl = window.location.pathname.split("/").pop(); // Get the current page name from the URL
    return pages.indexOf(currentUrl); // Find and return the index of the current page in the 'pages' array
}

