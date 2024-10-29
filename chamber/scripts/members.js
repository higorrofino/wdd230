const url = "https://raw.githubusercontent.com/higorrofino/wdd230/refs/heads/main/chamber/data/members.json";
const cards = document.querySelector('#cards');

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data);
  displayMembers(data.members);
}

const displayMembers = (members) => {
  members.forEach(member => {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let membershipLevel = document.createElement('p');
    let founded = document.createElement('p');
    let image = document.createElement('img');

    name.textContent = `${member.name}`
    address.textContent = `Address: ${member.address}`;
    phone.textContent = `Phone: ${member.phone}`;
    website.textContent = `Website: ${member.website}`;
    membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
    founded.textContent = `Founded: ${member.founded}`;

    image.setAttribute('src', member.image);
    image.setAttribute('alt', `${name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '100');
    image.setAttribute('height', '100');

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membershipLevel);
    card.appendChild(founded);
    card.appendChild(image);
    
    cards.appendChild(card);
  });
}

getMemberData();