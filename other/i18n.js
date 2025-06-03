
const i18nMain = {
locale: 'zh',
data: {}
};

const i18nUI = {
locale: 'zh',
data: {}
};

function loadLanguage(lang) {
    Promise.all([
        fetch(`${lang}_index.json`).then(res => res.json()),
        fetch(`${lang}_clubs.json`).then(res => res.json())
    ]).then(([mainData, uiData]) => {
        i18nMain.locale = lang;
        i18nMain.data = mainData;

        i18nUI.locale = lang;
        i18nUI.data = uiData;

        updateText();
    });
}

function updateText() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const [namespace, name] = key.split(':');

        let text = '';
        if (namespace === 'main' && i18nMain.data[name]) {
        text = i18nMain.data[name];
        } else if (namespace === 'ui' && i18nUI.data[name]) {
        text = i18nUI.data[name];
        }

        if (text) {
        el.innerText = text;
        }
    });
}

function switchLanguage() {
    const newLang = i18nMain.locale === 'zh' ? 'en' : 'zh';
    loadLanguage(newLang);
}

window.onload = () => {
    loadLanguage('zh');
};

let currentLang = 'zh';

  function switchLanguage_inJson() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    loadContent(currentLang);
  }

  function loadContent(lang) {
    fetch(`${lang}_clubs.json`)
    .then(response => response.json())
    .then(data => {
      ['C', 'A', 'S',"St"].forEach(type => {
        const container = document.querySelector(`#${type} .scroll-container`);
        container.innerHTML = '';
        data[type].forEach(club => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <img src="${club.image}" alt="${club.name}">
            <div class="card-content">
              <h2>${club.name}</h2>
              <p>${club.description}</p>
            </div>
          `;
          container.appendChild(card);
        });
      });
    });
  }

  

  window.onload = () => {
    loadContent(currentLang);
  };


