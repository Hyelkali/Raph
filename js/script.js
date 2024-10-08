document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;

    // Show the specified slide based on index
    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    // Go to the next slide
    function nextSlide() {
        const slides = document.querySelectorAll('.carousel-item');
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Go to the previous slide
    function prevSlide() {
        const slides = document.querySelectorAll('.carousel-item');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Add event listeners for next and previous buttons
    document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);

    // Initially show the first slide
    showSlide(currentSlide);

    // Form submit event listener for contact form
    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent actual form submission
        alert("Thank you for reaching out to us! We will get back to you shortly."); // Show a success alert
        this.reset(); // Reset the form fields
    });

    // Array of articles related to watches
    const articles = [
        {
            title: "The Evolution of Watches",
            content: "From pocket watches to smartwatches, explore how the world of timekeeping has evolved over the centuries.",
            author: "OKWUELUM RAPHAEL"
        },
        {
            title: "Top 10 Watch Brands in 2024",
            content: "Discover the leading watch brands of 2024, showcasing innovation, craftsmanship, and style.",
            author: "OKWUELUM RAPHAEL"
        },
        {
            title: "How to Care for Your Luxury Watch",
            content: "Maintaining a luxury watch requires care and attention. Here are tips to keep your timepiece in perfect condition.",
            author: "OKWUELUM RAPHAEL"
        }
    ];

    // Select the article list container
    const articleList = document.getElementById("article-list");

    // Loop through the articles and display them dynamically
    articles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
            <p><em>Written by ${article.author}</em></p>
        `;
        articleList.appendChild(articleElement); // Append the article element to the list
    });
});
