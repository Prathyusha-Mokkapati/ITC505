const features = document.querySelectorAll('.feature');
features.forEach(feature => {
    feature.addEventListener('mouseover', () => {
        feature.style.backgroundColor = '#f0f0f0';
    });
    feature.addEventListener('mouseout', () => {
        feature.style.backgroundColor = 'white';
    });
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('Please fill in all fields');
        event.preventDefault();
    }
});

document.getElementById('learn-more-btn').addEventListener('click', () => {
    const homeSection = document.getElementById('home');
    const newContent = document.createElement('p');
    newContent.textContent = 'Discover our amazing product features and pricing plans!';
    homeSection.appendChild(newContent);
});
