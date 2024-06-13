# Singtel Company Test Assessment - Algorithm Implementation

## Quick Description
This is my Test Assessment for singtel company,
with the given questions and answers provided below.

## Algorithms

### Algorithm 1: Find the broken Lamp 

-	To find how many and what are the lamps that sugeng can’t turn it on
-	To find how many lamps that can be turned on

## 1)

```javascript
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
```

### Algorithm 2: Ways to share the candies

-	To find how many ways each children can get the candies 

2)
```javascript
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
        const responseWay = `ways ${way}`;
        return responseWay;
    } catch(err){
        console.log(err);
    }
}

console.log(two(12));
```
### Algorithm 3: Top of shuffled cards 

-	If the n is 5 and it shuffles 45 times , what is the first card or the top card?
-	If the n is 7 and it shuffles 50 times , what is the first card or the top card?

3)
```javascript
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
```

#### Thankyou for the review
