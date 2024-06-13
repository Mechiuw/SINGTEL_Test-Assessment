let cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
function three(n,times,cards){
    try{
        for(let i = 0; i < times; i++){
            const bottomCards = cards.splice(-n);
            cards = [...bottomCards, ...cards];
        }
        console.log(`the top card from ${n} pulled cards for ${times} times is ${cards[0]}`);
    } catch(err){
        console.log(err);
    }
}
three(5,45,cards); //5 card pulled , 45 times 
three(7,50,cards); //7 card pulled, 50 times 