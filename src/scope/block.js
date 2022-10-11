function fruits() {
    if(true){
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana';// block scopre
        console.log([
            fruit2,
            fruit3
        ]);
    }

    console.log([
        fruit1,
    ]);
}

fruits();