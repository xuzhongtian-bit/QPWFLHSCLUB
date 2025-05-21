function loadLanguage(lang) {
    fetch(`${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) {
                el.innerText = data[key];
            }
            });
        });
   }
  
// 示例：默认加载中文，可通过参数切换
loadLanguage('en');  // 或 'en'
  