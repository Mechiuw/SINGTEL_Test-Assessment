let cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
function three(n,times,cards){
    try{
        for(let i = 0; i < times; i++){
            const bottomCards = cards.splice(-n);
            cards = [...bottomCards, ...cards];
        }
        console.log(`kartu tumpukan taratas dari ${n} kartu, ${times} kali : ${cards[0]}`);
    } catch(err){
        console.log(err);
    }
}
three(5,45,cards); //5 pengambilan kartu , 45 kali 
three(7,50,cards); //7 pengambilan kartu, 50 kali 