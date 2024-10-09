var roda = ["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000"];

function wheelFortune(wheel) {

    var resultats = [];
    var contador = 0;

    while(contador < wheel.length) {
        const indexPremi = Math.floor(Math.random() * wheel.length);
        const premi = wheel[indexPremi];

        if (premi != "") {
            resultats.push(premi);
            wheel[indexPremi] = "";
            contador++;
        }
    }

    return resultats;
}

console.log(wheelFortune(roda));