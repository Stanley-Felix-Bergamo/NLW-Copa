function createGame(player1, hour, player2) {
  return `
<li>
    <img src='./Assets/img/icon/${player1}.svg' alt='Bandeira do ${player1}'>
    <strong>${hour}</strong>
    <img src='./Assets/img/icon/${player2}.svg' alt='Bandeira do ${player2} '>
</li>
  `;
};

let delay = -0.4;
function createCard(date, day, games) {
  delay += 0.4;
  return `
       <div class='card' style='animation-delay: ${delay}s'>
           <h2>${date}<span>${day}</span></h2>
           <ul>${games}</ul>
       </div>
  `;
};

document.querySelector('#cards').innerHTML =
  createCard('24/11', 'quinta',
    createGame('brasil', '16:00', 'serbia') +
    createGame('portugal', '13:00', 'uruguay') +
    createGame('colombia', '13:00', 'japan')
  ) +
  createCard('28/11', 'segunda',
    createGame('south korea', '16:00', 'ghana') +
    createGame('switzerland', '13:00', 'brasil') +
    createGame('portugal', '13:00', 'uruguay')
  ) +
  createCard('02/12', 'sexta',
    createGame('brasil', '16:00', 'cameroon') +
    createGame('british columbia', '13:00', 'india') +
    createGame('comoros', '20:00', 'jordan')
  )+
  createCard('05/12', 'terça',
    createGame('japan', '20:00', 'comoros') +
    createGame('switzerland', '15:00', 'armenia') +
    createGame('comoros', '09:00', 'argentina')
  );
