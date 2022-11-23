import speakers from './data.js';

const speakersContainer = document.querySelector('.speakers-items-container');
const moreSpeakersButton = document.querySelector('.more-button');

const renderSpeakers = (quantity) => {
  let htmlString = '';
  for (let i = 0; i < quantity; i += 1) {
    htmlString += `
        <section class="speakers-item">
            <div class="speakers-item-photo">
              <div class="square"></div>
              <img src="${speakers[i].img}" alt="speaker photo" />
            </div>
            <div class="speakers-item-info">
              <h3 class="speaker-name">${speakers[i].name}</h3>
              <p class="speaker-position">${speakers[i].title}</p>
              <hr class="speaker-line" />
              <p class="speaker-description">${speakers[i].description}</p>
            </div>
          </section>
        `;
  }
  speakersContainer.innerHTML = htmlString;
};

const loadSpeakers = () => {
  if (window.innerWidth < 768) {
    renderSpeakers(2);
  } else {
    renderSpeakers(speakers.length);
  }
};

window.addEventListener('load', () => {
  loadSpeakers();
});

window.addEventListener('resize', () => {
  loadSpeakers();
});

moreSpeakersButton.addEventListener('click', () => {
  const speakersItems = document.querySelectorAll('.speakers-item');

  if (speakersItems.length === speakers.length) {
    renderSpeakers(2);
    moreSpeakersButton.textContent = 'More';
  } else {
    renderSpeakers(speakers.length);
    moreSpeakersButton.textContent = 'Less';
  }
});
