const candidate = Array(45).fill().map((v,i) => i + 1)
const shuffle = [];
while (candidate.length > 0){
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random,1);
    const value = spliceArray[0];
    shuffle.push(value);
}
console.log(shuffle);
const winBalls = shuffle.splice(0, 6).sort((p,c)=>p - c);
const bonus = shuffle[6];
console.log(winBalls);
console.log(bonus);

const resultTag = document.querySelector('#result');
for(let i=0;i < 6; i++){
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.textContent = winBalls[i];
    resultTag.appendChild(ball);
}

const bonusTag = document.querySelector('#bonus');
const bonusBall = document.createElement('div');
bonusBall.className = 'ball';
bonusBall.textContent = bonus;
console.log(bonusBall)
bonusTag.appendChild(bonusBall);