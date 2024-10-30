const path = "https://raw.githubusercontent.com/higorrofino/wdd230/refs/heads/main/chamber/data/members.json";
const cards = document.querySelector('#spotlights');

async function getMemberData() {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.table(data);
    
    const spotlightMembers = getSpotlightMembers(data.members);
    displayMembers(spotlightMembers);

    // displayMembers(data.members); 
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
  }
}

function getSpotlightMembers(members, count) {
  const qualifiedMembers = members.filter(member => 
      member.membershipLevel === "Silver" || member.membershipLevel === "Gold"
  );


  const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const displayMembers = (members) => {
  members.forEach(member => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let website = document.createElement('p');

    name.textContent = `${member.name}`;
    website.textContent = `${member.website}`;

    card.appendChild(name);
    card.appendChild(website);
    
    cards.appendChild(card);
  });
}

function getSpotlightMembers(members, count = 3) {
  const qualifiedMembers = members.filter(member => 
      member.membershipLevel === "Silver" || member.membershipLevel === "Gold"
  );

  const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

getMemberData();
