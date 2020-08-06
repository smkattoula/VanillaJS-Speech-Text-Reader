const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textArea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

const data = [
  {
    image: "./img/drink.jpg",
    text: "I am thirsty",
  },
  {
    image: "./img/angry.jpg",
    text: "I am angry",
  },
  {
    image: "./img/food.jpg",
    text: "I am hungry",
  },
  {
    image: "./img/grandma.jpg",
    text: "I want to go to grandma's house",
  },
  {
    image: "./img/happy.jpg",
    text: "I am happy",
  },
  {
    image: "./img/home.jpg",
    text: "I want to go home",
  },
  {
    image: "./img/hurt.jpg",
    text: "I am hurt",
  },
  {
    image: "./img/outside.jpg",
    text: "I want to go outside",
  },
  {
    image: "./img/sad.jpg",
    text: "I am sad",
  },
  {
    image: "./img/scared.jpg",
    text: "I am scared",
  },
  {
    image: "./img/school.jpg",
    text: "I want to go to school",
  },
  {
    image: "./img/tired.jpg",
    text: "I am tired",
  },
];

data.forEach(createBox);

// Create a function that creates speech boxes
function createBox(item) {
  const box = document.createElement("div");

  const { image, text } = item;

  box.classList.add("box");
  box.innerHTML = `<img src="${image}" alt="${text}" />
  <p class="info">${text}</p>`;

  // Speak event
  box.addEventListener("click", () => {
    setTextMessage(text);
    speakText();

    // Add active effect
    box.classList.add("active");
    setTimeout(() => box.classList.remove("active"), 800);
  });

  main.appendChild(box);
}

// Initialize speech synth
const message = new SpeechSynthesisUtterance();

// Create an array to store the voices
let voice = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement("option");

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

// Create a function that sets the voice to text
function setTextMessage(text) {
  message.text = text;
}

// Create a function that speaks the text
function speakText() {
  speechSynthesis.speak(message);
}

// Event listeners
toggleBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.toggle("show")
);

closeBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.remove("show")
);

speechSynthesis.addEventListener("voiceschanged", getVoices);

getVoices();
