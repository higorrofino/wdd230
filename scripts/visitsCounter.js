const visitsDisplay = document.querySelector('#visits');

let numVisits = Number(window.localStorage.getItem('visits'));

if (numVisits !== 0) {
  visitsDisplay.textContent = `Page Visits: ${numVisits}`;
} else {
  visitsDisplay.textContent = 'Page Visits: 0'
}

numVisits++;

localStorage.setItem('visits', numVisits);