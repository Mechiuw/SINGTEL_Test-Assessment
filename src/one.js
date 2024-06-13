const xlamp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
function numOne(lamp){
    try{
        const brokenLamp = lamp.filter(x => x % 2 !== 0 && x % 3 !== 0 && x % 5 !== 0 && x % 7 !== 0 && x % 11 !== 0);
        console.log("lampu yang tidak bisa dinyalakan : ",brokenLamp);
        console.log("lampu yang bisa dinyalakan bersamaan : ",lamp.length - brokenLamp.length);
    } catch(err){
        console.log(err);
    }
}
numOne(xlamp);