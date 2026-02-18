const baseImages = [
  "animals/animal_00.png",
  "animals/animal_01.png",
  "animals/animal_02.png",
  "animals/animal_03.png",
  "animals/animal_04.png",
  "animals/animal_grid.png"
];

const totalSlides = 50;
const slides = Array.from({ length: totalSlides }, (_, i) => baseImages[i % baseImages.length]);
const animalPhrases = [
  "Snufflepuff twirli-boo, lil lion moon!",
  "Mewmew trumplewink, bunbun parade!",
  "Roaripop fizzletail, starhoof wiggle!",
  "Chirri-chompa dandeloo, tiny tusk yay!",
  "Booparoo whisker-fluff, carousel zippie!",
  "Hootle-nibble prancypaw, glitter snort!",
  "Glimmergrr peepity-poof, cuddle stomp!",
  "Squeakadoodle rumply-rum, cotton fang!",
  "Yip-yip luminafur, trumpet sprinkles!",
  "Bumblepurr snicklesnout, moonbeam hop!",
  "Tippytoe growly-gum, petal roar!",
  "Wobblewhinny pufflepaw, candy clops!",
  "Nibble-narwhim chirpy-claw, twinkle boing!",
  "Flooflefang giggle-trunk, rosy zoom!",
  "Ploopa-paw stardust snuffle, kissy neigh!",
  "Ruffaroo blinkle-bop, fairy paw-rah!"
];

const carouselImage = document.getElementById("carouselImage");
const counter = document.getElementById("slideCounter");
const marqueeText = document.getElementById("marqueeText");
const audio = document.getElementById("circusAudio");

let index = 0;

const showSlide = () => {
  carouselImage.src = slides[index];
  carouselImage.alt = `Circus animal image ${index + 1}`;
  counter.textContent = `${index + 1} / ${totalSlides}`;
  marqueeText.textContent = `Act ${index + 1}: ${animalPhrases[index % animalPhrases.length]}`;
};

const nextSlide = () => {
  index = (index + 1) % totalSlides;
  showSlide();
};

const prevSlide = () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide();
};

document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

setInterval(nextSlide, 3000);
showSlide();

const tryPlay = async () => {
  try {
    audio.volume = 0.45;
    await audio.play();
  } catch {
    // Browser autoplay may block until user interacts.
  }
};

tryPlay();
document.addEventListener("click", tryPlay, { once: true });
