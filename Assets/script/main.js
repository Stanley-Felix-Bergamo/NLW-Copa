function createGame(player1, hour, player2) {
  return `
 <li>
    <img src='./Assets/img/icon/${player1}.svg' alt='Bandeira do ${player1}'>
    <strong>${hour}</strong>
    <img src='./Assets/img/icon/${player2}.svg' alt='Bandeira do ${player2} '>
</li>
  `;
}

function createCard(date, day, games) {
  return `
       <div class='card'>
           <h2>${date}<span>${day}</span></h2>
           <ul>${games}</ul>
       </div>
  `;
}

document.querySelector('#app').innerHTML = `
   <header>
       <img src="./Assets/img/logo.svg" alt="Logo da NLW">
   </header>
   <main id="cards">
        ${createCard('24/11', 'quinta',
        createGame('brasil', '16:00', 'serbia') +
        createGame('portugal', '13:00', 'uruguay') +
        createGame('colombia', '13:00', 'japan')
)}  

        ${createCard('28/11', 'segunda',
          createGame('south korea', '16:00', 'ghana') +
          createGame('switzerland', '13:00', 'brasil') +
          createGame('portugal', '13:00', 'uruguay')
        )}

        ${createCard('02/12', 'sexta', 
        createGame('brasil', '16:00', 'cameroon') +
        createGame('british columbia', '13:00', 'india') +
        createGame('comoros', '20:00', 'jordan') 
        )}
   </main>
`;