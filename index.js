// V souboru index.js si do proměnné padlOrel uložte hodnotu true nebo false na základě náhodné hodnoty z funkce Math.random(). Pravděpodobnost 50:50 zajistíte porovnáním výsledku funkce s hodnotou 0.5.

const padlOrel = Math.random() < 0.5;

// Pomocí document.querySelector vyberte ze stránky prvek .vysledek a nahraďte jeho obsah textem Padl orel nebo Padla panna na základě náhodné hodnoty z předchozího kroku.

const vysledekElement = document.querySelector('.vysledek');

if (padlOrel) {
    vysledekElement.textContent = 'Padl orel';
  } else {
    vysledekElement.textContent = 'Padla panna';
  }
  

  const minceElement = document.querySelector('.mince');

  if (padlOrel) {
    minceElement.classList.add('mince--orel');
    minceElement.classList.remove('mince--panna');
  } else {
    minceElement.classList.add('mince--panna');
    minceElement.classList.remove('mince--orel');
  }
  