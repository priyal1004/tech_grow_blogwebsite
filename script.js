// Example post data
const posts = [
    {
        title: "The Secret to Morning Productivity",
        content: "Starting your day with a solid morning routine can make all the difference. Wake up early, drink water, and spend 10 minutes planning your day to achieve success."
    },
    {
        title: "5 Tips for Staying Healthy During Exams",
        content: "Exams can be stressful, but staying healthy is key. Eat balanced meals, take short breaks, stay hydrated, and get enough sleep to maintain focus and energy."
    },
    {
        title: "Traveling on a Budget: Top Destinations for Students",
        content: "Explore amazing places like Thailand, Vietnam, and Eastern Europe without breaking the bank. Learn how to save on flights, accommodations, and activities."
    },
    {
        title: "The Power of Minimalism in Everyday Life",
        content: "Decluttering your space and mind can lead to a more peaceful, productive life. Start small by organizing your workspace and donating items you no longer use."
    },
    {
        title: "How to Start Your First Coding Project",
        content: "Starting a coding project can feel overwhelming. Begin by defining the scope, choosing the right tools, and breaking the project into manageable tasks."
    }
];

// Function to display posts on the home page
function displayPosts() {
    const blogPostsSection = document.getElementById('blog-posts');
    blogPostsSection.innerHTML = ''; // Clear the section before adding new posts
    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content.substring(0, 150)}...</p> <!-- Show a short snippet of the post -->
            <button class="read-more" onclick="showPost(${index})">Read More</button>
        `;
        blogPostsSection.appendChild(postDiv);
    });
}

// Function to show the full post
function showPost(index) {
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    const fullPostSection = document.getElementById('full-post');
    const blogPostsSection = document.getElementById('blog-posts');

    // Set the title and content for the selected post
    postTitle.textContent = posts[index].title;
    postContent.textContent = posts[index].content;

    // Hide the home section and show the full post section
    blogPostsSection.style.display = 'none';
    fullPostSection.style.display = 'block';
}

// Function to go back to the list of posts
function goBack() {
    const fullPostSection = document.getElementById('full-post');
    const blogPostsSection = document.getElementById('blog-posts');

    // Show the home section and hide the full post section
    fullPostSection.style.display = 'none';
    blogPostsSection.style.display = 'block';
}

// Dark Mode Toggle
const darkModeToggle = document.querySelector('#dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Contact Form Submission
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    alert(`Thank you, ${name}! Your message has been received.`);
    contactForm.reset();
});

// Call displayPosts on page load
displayPosts();
