//Live class Exercise for Supermarket to add more gifts//
let username,Purchase_credits,bonus,giftworth;

alert(`Hey Welcome To Big Basket`);

username=prompt(`Your Name Please?`,"Username");
Purchase_credits=prompt(`Hello ${username},Good Day!Type Purchase Your Credits!`,100);

function calcBonusPoints(credits){
let bonusPoints;

if (credits>=0 && credits<=500)
{
bonusPoints=credits*0.05;
}
else if(credits>=501 && credits<=1000)
{
bonusPoints=credits*0.10;
}
else if(credits>=1001 && credits<=1500)
{
bonusPoints=credits*0.15;
}else 
{
bonusPoints=credits*0.20;
}
return bonusPoints;
}

function calcGiftWorth(points)
{
if(points>=50 && points<=100)
{
    gift='Stationery kit';
}
else if(points>=100 && points<=200)
{
    gift='Utensil set';
}
else if(points>=200 && points<=300)
{
    gift='Kitchen Appliance';
}
else if(points>=300 && points<=400)
{
    gift='fashion accessory';
}
else if(points>=400 && points<=500)
{
    gift='electronic gadget';
}
else if (points>=500 && points <= 600) 
{
    gift = 'beauty products set';
}
 else if (points>= 600 && points <= 700) 
 {
    gift = 'sports equipment';
}
 else if (points>= 700 && points <= 800) 
{
    gift = 'books collection';
}
else
{
    gift = 'gift card';
}
return gift;
}

let option=confirm(`Click to View Your BonusPoints!`);

//Used Ternary Operator-->[condition]?[true]:[False]
option?bonus=calcBonusPoints(Purchase_credits):alert(`Many Thanks!`);

alert(`Hurray! You've earned ${bonus} credits!`);

let useroption=confirm("Are you willing to redeem your points!");
if (useroption){
    giftworth=calcGiftWorth(bonus);
    alert(`Kudos!Take away ${giftworth}! Thanks`);
}
else{
    bonus+=100;
    alert(`Wow! You've earned ${bonus} points!Thanks!`);
}



