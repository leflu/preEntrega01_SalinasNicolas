let vidaCT = 100;
let vidaT = 100;
let ronda = 0

function CounterStrike(){    
    let plataCT = 16000
    let plataT = 16000

    let gastarT = Math.ceil(Math.random() * plataCT)
    let gastarCT = Math.ceil(Math.random() * plataT)

    console.log("El CT gasto " + gastarCT)
    console.log("El T gasto " + gastarT)

    if(gastarCT > gastarT){
        let ataqueCT = 7;
        vidaT -= ataqueCT;
        ronda++
        console.log("Counter-Terrorist win round " + ronda)
    }
    else if(gastarT > gastarCT){
        let ataqueT = 7;
        vidaCT -= ataqueT;
        ronda++
        console.log("Terrorist win round " + ronda)
    }
}

while(vidaCT > 0 && vidaT > 0){
    CounterStrike();
    if(vidaCT <= 0){
        console.log("Terrorist WINS!")
    }
    else if(vidaT <= 0){
        console.log("Counter-Terrorist WINS!")
    }
}
