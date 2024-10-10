function DateFormat(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

function CalculateDiffDays(data1, data2) {
  
  const d1 = new Date(data1);
  const d2 = new Date(data2);

  const diffMs = d2 - d1;
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  return Math.abs(diffDays);
}

const lastDaystring = window.localStorage.getItem('date');
const lastDay =  new Date(lastDaystring);
const lastDayFormat = DateFormat(lastDay);

const today = new Date();
const todayFormat = DateFormat(today)

let diff = CalculateDiffDays(lastDayFormat, todayFormat)

localStorage.setItem('date', todayFormat);

if(lastDaystring === null) {
  alert("Welcome! Let us know if you have any questions.");
} else if(diff = 1) {
  alert("Back so soon! Awesome!");
} else {
  alert(`You last visited ${diff} days ago.`)
}