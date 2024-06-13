
function two(totalPermen){
    let cara = 0
    try{
        for(let i = 7; i <= totalPermen; i++){
            let sisa = totalPermen - i;
            for(let j = 0; j <= sisa; j++){
                const k = sisa - j;
                console.log(`Permen Abi : ${j} | Permen Bibi : ${k} | Permen Cibi : ${i}`);
                cara++;
            }
        }
        const responseCara = `banyak cara ${cara}`;
        return responseCara;
    } catch(err){
        console.log(err);
    }
}

console.log(two(12));