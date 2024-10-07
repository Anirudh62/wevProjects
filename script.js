// Arrays holding the images, new headings, and paragraphs
const images = [
  "images/cap.jpg",
  "images/henry.jpg",
  "images/the-revenant.jpg",
  "images/ironman.jpg"
];

const headings = ["New Heading 1", "New Heading 2", "The revenant", "New Heading 4"];
const paragraphs = [
  "This is the first new paragraph.",
  "Here's the second one.",
  "The Revenant follows Hugh Glass's brutal fight for survival and revenge after being left for dead in the wilderness.",
  "This is the fourth paragraph."
];

// Data for the image gallery
const galleryImages = [
  {
    src: "images/cap.jpg",
    title: "Captain America",
    description: "A hero who represents freedom and justice.",
    detail: "He fought in World War II and symbolizes patriotism."
  },
  {
    src: "images/OIP.jpeg",
    title: "Marvel Superheroes",
    description: "Iconic characters in the Marvel Universe.",
    detail: "They protect the world from various threats."
  },
  {
    src: "images/henry.jpg",
    title: "Henry Cavill",
    description: "Famous actor known for his role as Superman.",
    detail: "He has portrayed Superman in multiple films."
  },
  {
    src: "images/OIP.jpeg",
    title: "Marvel Superheroes",
    description: "Iconic characters in the Marvel Universe.",
    detail: "They protect the world from various threats."
  },
  {
    src: "images/ironman.jpg",
    title: "Iron Man",
    description: "A genius billionaire with a powerful suit.",
    detail: "He is one of the founding members of the Avengers."
  },
  {
    src: "images/cap.jpg",
    title: "Captain America",
    description: "A hero who represents freedom and justice.",
    detail: "He fought in World War II and symbolizes patriotism."
  },
  {
    src: "images/cap.jpg",
    title: "Captain America",
    description: "A hero who represents freedom and justice.",
    detail: "He fought in World War II and symbolizes patriotism."
  },
  {
    src: "images/OIP.jpeg",
    title: "Marvel Superheroes",
    description: "Iconic characters in the Marvel Universe.",
    detail: "They protect the world from various threats."
  },
  {
    src: "images/henry.jpg",
    title: "Henry Cavill",
    description: "Famous actor known for his role as Superman.",
    detail: "He has portrayed Superman in multiple films."
  },
  {
    src: "images/OIP.jpeg",
    title: "Marvel Superheroes",
    description: "Iconic characters in the Marvel Universe.",
    detail: "They protect the world from various threats."
  },
  {
    src: "images/ironman.jpg",
    title: "Iron Man",
    description: "A genius billionaire with a powerful suit.",
    detail: "He is one of the founding members of the Avengers."
  },
  {
    src: "images/cap.jpg",
    title: "Captain America",
    description: "A hero who represents freedom and justice.",
    detail: "He fought in World War II and symbolizes patriotism."
  },
  {
    src: "images/cap.jpg",
    title: "Captain America",
    description: "A hero who represents freedom and justice.",
    detail: "He fought in World War II and symbolizes patriotism."
  },
  {
    src: "images/OIP.jpeg",
    title: "Marvel Superheroes",
    description: "Iconic characters in the Marvel Universe.",
    detail: "They protect the world from various threats."
  },
  {
    src: "images/henry.jpg",
    title: "Henry Cavill",
    description: "Famous actor known for his role as Superman.",
    detail: "He has portrayed Superman in multiple films."
  },
  {
    src: "images/OIP.jpeg",
    title: "Marvel Superheroes",
    description: "Iconic characters in the Marvel Universe.",
    detail: "They protect the world from various threats."
  },
  {
    src: "images/ironman.jpg",
    title: "Iron Man",
    description: "A genius billionaire with a powerful suit.",
    detail: "He is one of the founding members of the Avengers."
  },
  {
    src: "images/cap.jpg",
    title: "Captain America",
    description: "A hero who represents freedom and justice.",
    detail: "He fought in World War II and symbolizes patriotism."
  },
  {
    src: "images/cap.jpg",
    title: "Captain America",
    description: "A hero who represents freedom and justice.",
    detail: "He fought in World War II and symbolizes patriotism."
  },
  {
    src: "images/OIP.jpeg",
    title: "Marvel Superheroes",
    description: "Iconic characters in the Marvel Universe.",
    detail: "They protect the world from various threats."
  },
  {
    src: "images/henry.jpg",
    title: "Henry Cavill",
    description: "Famous actor known for his role as Superman.",
    detail: "He has portrayed Superman in multiple films."
  },
  {
    src: "images/OIP.jpeg",
    title: "Marvel Superheroes",
    description: "Iconic characters in the Marvel Universe.",
    detail: "They protect the world from various threats."
  },
  {
    src: "images/ironman.jpg",
    title: "Iron Man",
    description: "A genius billionaire with a powerful suit.",
    detail: "He is one of the founding members of the Avengers."
  },
  {
    src: "images/cap.jpg",
    title: "Captain America",
    description: "A hero who represents freedom and justice.",
    detail: "He fought in World War II and symbolizes patriotism."
  },
  {
    src: "images/cap.jpg",
    title: "Captain America",
    description: "A hero who represents freedom and justice.",
    detail: "He fought in World War II and symbolizes patriotism."
  },
  {
    src: "images/OIP.jpeg",
    title: "Marvel Superheroes",
    description: "Iconic characters in the Marvel Universe.",
    detail: "They protect the world from various threats."
  },
  {
    src: "images/dracula.jpg",
    title: "Henry Cavill",
    description: "Famous actor known for his role as Superman.",
    detail: "He has portrayed Superman in multiple films."
  },
  {
    src: "images/OIP.jpeg",
    title: "Marvel Superheroes",
    description: "Iconic characters in the Marvel Universe.",
    detail: "They protect the world from various threats."
  },
  {
    src: "images/ironman.jpg",
    title: "Iron Man",
    description: "A genius billionaire with a powerful suit.",
    detail: "He is one of the founding members of the Avengers."
  },
  {
    src: "images/cap.jpg",
    title: "Captain America",
    description: "A hero who represents freedom and justice.",
    detail: "He fought in World War II and symbolizes patriotism."
  },
  {
    src: "images/dracula.jpg",
    title: "Captain America",
    description: "A hero who represents freedom and justice.",
    detail: "He fought in World War II and symbolizes patriotism."
  },
  {
    src: "images/OIP.jpeg",
    title: "Marvel Superheroes",
    description: "Iconic characters in the Marvel Universe.",
    detail: "They protect the world from various threats."
  },
  {
    src: "images/henry.jpg",
    title: "Henry Cavill",
    description: "Famous actor known for his role as Superman.",
    detail: "He has portrayed Superman in multiple films."
  },
  {
    src: "images/dracula.jpg",
    title: "Marvel Superheroes",
    description: "Iconic characters in the Marvel Universe.",
    detail: "They protect the world from various threats."
  },
  {
    src: "images/ironman.jpg",
    title: "Iron Man",
    description: "A genius billionaire with a powerful suit.",
    detail: "He is one of the founding members of the Avengers."
  },
  {
    src: "images/cap.jpg",
    title: "Captain America",
    description: "A hero who represents freedom and justice.",
    detail: "He fought in World War II and symbolizes patriotism."
  },
  {
    src: "images/cap.jpg",
    title: "Captain America",
    description: "A hero who represents freedom and justice.",
    detail: "He fought in World War II and symbolizes patriotism."
  },
  {
    src: "images/OIP.jpeg",
    title: "Marvel Superheroes",
    description: "Iconic characters in the Marvel Universe.",
    detail: "They protect the world from various threats."
  },
  {
    src: "images/henry.jpg",
    title: "Henry Cavill",
    description: "Famous actor known for his role as Superman.",
    detail: "He has portrayed Superman in multiple films."
  },
  {
    src: "images/OIP.jpeg",
    title: "Marvel Superheroes",
    description: "Iconic characters in the Marvel Universe.",
    detail: "They protect the world from various threats."
  },
  {
    src: "images/ironman.jpg",
    title: "Iron Man",
    description: "A genius billionaire with a powerful suit.",
    detail: "He is one of the founding members of the Avengers."
  },
  {
    src: "images/cap.jpg",
    title: "Captain America",
    description: "A hero who represents freedom and justice.",
    detail: "He fought in World War II and symbolizes patriotism."
  }
];

// Function to generate image gallery
function generateGallery() {
  const galleryContainer = document.querySelector('.image-gallery');
  galleryImages.forEach(imageData => {
    const item = document.createElement('div');
    item.classList.add('image-item');

    const img = document.createElement('img');
    img.src = imageData.src;
    img.alt = imageData.title;

    const detail = document.createElement('div');
    detail.classList.add('image-detail');
    detail.innerHTML = `
      <div class="image-title">${imageData.title}</div>
      <div class="image-description">${imageData.description}</div>
      <div class="image-description">${imageData.detail}</div>
    `;

    item.appendChild(img);
    item.appendChild(detail);
    galleryContainer.appendChild(item);
  });
}

// Index to track the current position in the arrays
let index = 0;

// Function to update the background, heading, and paragraph text
function updateContent() {
  const banner = document.querySelector(".banner");
  const heading = document.getElementById("heading");
  const paragraph = document.getElementById("paragraph");

  // Trigger fade-out for text
  heading.classList.add("fade-out");
  paragraph.classList.add("fade-out");

  // Small timeout to allow the fade-out animation before changing content
  setTimeout(() => {
    // Update background image
    banner.style.backgroundImage = `url(${images[index]})`;

    // Update text content
    heading.innerText = headings[index];
    paragraph.innerText = paragraphs[index];

    // Trigger fade-in for text
    heading.classList.remove("fade-out");
    paragraph.classList.remove("fade-out");

    heading.classList.add("fade-in");
    paragraph.classList.add("fade-in");

    // Move to the next item in the arrays
    index = (index + 1) % images.length;
  }, 1000);  // Delay for 1 second to allow fade-out before updating content
}

// Call updateContent every 3 seconds (3000 milliseconds)
setInterval(updateContent, 3000);

// Immediately call updateContent to show the first item without waiting
updateContent();

// Generate the image gallery
generateGallery();