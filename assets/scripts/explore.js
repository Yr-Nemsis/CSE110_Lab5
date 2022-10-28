// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const voiceSelect = document.querySelector('select');
  const button = document.querySelector('button');
  const text = document.querySelector('textarea');
  const image = document.querySelector('img');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
    //populate the select list by loading the all avaliable voices
    populateVoiceList();

    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    button.addEventListener('click', (event) => {
      const utterThis = new SpeechSynthesisUtterance(text.value);
      const empty = new SpeechSynthesisUtterance(" ");

      const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
      for (let i = 0; i < voices.length ; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
          break;
        }
      }
      synth.speak(utterThis);
      if (synth.speaking){
        image.src="./assets/images/smiling-open.png";
      }
      
      utterThis.addEventListener('end', (event) => {
        image.src="./assets/images/smiling.png";
      })
    })
}

