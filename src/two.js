
function two(){
    let cara = 0;
    let totalPermen = 12;

    for(let i = 7; i <= totalPermen; i++){
        let sisa = totalPermen - i;
        for(let j = 0; j <= sisa; j++){
            const k = sisa - j;
            console.log(`Banyak Permen Abi : ${j} | Banyak Permen Bibi : ${k} | Banyak Permen Cibi : ${i}`);
            cara++;
        }
    }
    const responseCara = `banyak cara ${cara}`;
    return responseCara;
}

console.log(two());