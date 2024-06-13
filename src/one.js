const xlamp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
function numOne(lamp){
    try{
        const brokenLamp = lamp.filter(x => x % 2 !== 0 && x % 3 !== 0 && x % 5 !== 0 && x % 7 !== 0 && x % 11 !== 0);
        const switchA = lamp.filter(x => x % 2 === 0);
        const switchB = lamp.filter(x => x % 3 === 0);
        const switchC = lamp.filter(x => x % 5 === 0);
        const switchD = lamp.filter(x => x % 7 === 0);
        const switchE = lamp.filter(x => x % 11 === 0);

        console.log("switch A : ",switchA);
        console.log("switch B : ",switchB);
        console.log("switch C : ",switchC);
        console.log("switch D : ",switchD);
        console.log("switch E : ",switchE);

        console.log(`lamps that can't be turned on : ${brokenLamp} = ${brokenLamp.length} lamps` );
        console.log(`lamps that can be turned on : ${lamp.length - brokenLamp.length}` );
    } catch(err){
        console.log(err);
    }
}
numOne(xlamp);