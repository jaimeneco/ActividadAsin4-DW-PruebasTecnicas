//---------------------------------------------
// 1-Crear constantes y variables:
//---------------------------------------------
const tabs = document.querySelectorAll(".Tabs-a");
const tabContents = document.querySelectorAll(".Tab-content");

//aqui van las variables del menu
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuCubierto = document.getElementById('menuCubierto');

// variables submenu  de collection
const menuItems = document.querySelectorAll('.Menu-item');
const subMenu = document.querySelector('.Menu-subMenu');
const link = document.querySelector('.Menu-nav');
const collection = document.getElementById('collection');

// variable para la imagen del submenu
// variable para el active del boton furniture

const furniture = document.getElementById('furniture');
const menuFurniture = document.getElementById('menuFurniture');


//---------------------------------------------
// 2-Nombrar las funciones:
//---------------------------------------------
function changeTab(targetTab) {
    //quita primero todas las clases isActive tanto en los botones como en el content
    tabs.forEach((tab) => { tab.classList.remove("isActive") });
    tabContents.forEach((content) => content.classList.remove("isActive"));

    //aqui le añadimos la clase isActive a los targetTab particular
    document.querySelector(`[data-tab=${targetTab}]`).classList.add("isActive");
    document.querySelector(`[data-content=${targetTab}]`).classList.add("isActive");
}

//fucion para mostrar la imagen de submenu
function showMenuFurniture(){
    menuFurniture.classList.toggle('isVisible');
}

function btnActive(){
    furniture.classList.toggle('isActive');
}


//---------------------------------------------
// 3-Ejecutar las funciones:
//---------------------------------------------
tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
        const targetTab = event.currentTarget.getAttribute("data-tab");
        changeTab(targetTab);
    });
});

openMenu.addEventListener('click', () => {
    menuCubierto.classList.add('isOpen');
});

closeMenu.addEventListener('click', () => {
    menuCubierto.classList.remove('isOpen');
})


//ejecutar submenu Collection
collection.addEventListener('click', () => {
    subMenu.classList.toggle('isVisible');
})

// ejecutar submenu furniture
furniture.addEventListener('click', () => {
    showMenuFurniture();
    btnActive();
})