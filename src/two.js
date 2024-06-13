
function two(totalCandy){
    let way = 0
    try{
        for(let i = 7; i <= totalCandy; i++){
            let left = totalCandy - i;
            for(let j = 0; j <= left; j++){
                const k = left - j;
                console.log(`Abi's candies : ${j} | Bibi's candies : ${k} | Cibi's candies : ${i}`);
                way++;
            }
        }
        const responseCara = `ways ${way}`;
        return responseCara;
    } catch(err){
        console.log(err);
    }
}

console.log(two(12));