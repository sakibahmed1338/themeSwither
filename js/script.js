const themeSwither = document.querySelector("#themeSwither");

const deafultTheme = 'theme-dark';

setTheme(deafultTheme);



themeSwither.addEventListener('change', (e) => {
    setTheme(e.target.value);
});



function setTheme(theme){
    document.documentElement.className = theme;
}