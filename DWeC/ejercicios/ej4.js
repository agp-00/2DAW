function generarPremis(){
	var prizes = [2000,4000,5000,1000,3000,8000,7000,6000];
	return prizes;
}

var players = [    
    {"nom": "John", "llinatjes": "Doe", "telefon": "+34 601234567", "email": "john.doe@concursant.com", "age": 30},
    {"nom": "Alice", "llinatjes": "Smith", "telefon": "+34 609876543", "email": "alice.smith@concursant.com", "age": 25},
    {"nom": "Bob", "llinatjes": "Johnson", "telefon": "+34 6060605", "email": "bob.johnson@concursant.com", "age": 40},
    { "nom": "Emily", "llinatjes": "Williams", "telefon": "+34 603333333", "email": "emily.williams@concursant.com", "age": 35},
    {"nom": "Michael", "llinatjes": "Brown", "telefon": "+34 607777777", "email": "michael.brown@concursant.com", "age": 22},
    {"nom": "Sophia", "llinatjes": "Jones", "telefon": "+34 608888888", "email": "sophia.jones@concursant.com", "age": 45},
    {"nom": "William", "llinatjes": "Garcia", "telefon": "+34 602222222", "email": "william.garcia@concursant.com", "age": 28},
    {"nom": "Olivia", "llinatjes": "Martinez", "telefon": "+34 609999999", "email": "olivia.martinez@concursant.com", "age": 50}
  ];

  function asignarPremios(players,prizes) {
    const resultats = [];

    if (prizes.length!=players.length){
        console.error("Incorrecto");
        return resultats;
    }

    
    const prizeIterator = prizes.values();

    for (const player of players) {
        const prize = prizeIterator.next().value;
        const {nom, llinatjes} = player;
        resultats.push({nom, llinatjes, prize});
    }


/*
    var contador = 0;
    for (let player of players) {
        let assignedPrize = {"nom":player.nom, "llinatje":player.llinatjes, "premi":prizes[contador]};
    }
    resultats.push(assignedPrize);
    contador++;
*/

    return resultats;
  }

  console.log(asignarPremios(players,generarPremis()));