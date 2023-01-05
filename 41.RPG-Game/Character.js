
export default class Character {
    //assign the data to this class constructor
    constructor(data) {
        Object.assign(this, data)
    }
    
     
    //destructure the data argument and return the html 
    //that will render on the page
    getCharacterHtml(data2) {
        const { attack, avatar, currentDiceScore, diceCount, health, name } = this

        //simulate a dice roll, save the number into the currentDiceScore and return the number
        //in order for it to be used in the dice placeholder
        function getRandomNum() {
            const randNum = Math.round(Math.random() * 5 + 1)
            currentDiceScore.push(randNum)
            return randNum
        }

        //using the diceCount from the object, create a for loop that iterates diceCount times
        //and returns a the placeholders needed for the dices
        function getDiceRollsNumbers(num){
            let placeholders = ''
            for (let i = 0; i < diceCount; i++) {
                placeholders += `<span class="placeholder-dice">${num ? getRandomNum() : ''}</span>`
            }
            if(data2){
                for (let j = 0; j < data2.diceCount; j++) {
                    placeholders += `<span class="placeholder-dice">${num ? getRandomNum() : ''}</span>`
                }
            }
            console.log(currentDiceScore)
            increaseAttack()
            return placeholders
        }
        const diceRollsPlaceholders = getDiceRollsNumbers()

        function increaseAttack() {
            const totalAttack = currentDiceScore.reduce(function(total, current){
                return (total + current) * 10
            })
            return totalAttack
            console.log(totalAttack)
        }

        function getAcronym() {
            let abbr = name.split(' ').map(function(item){return item[0]}).join('')
            if(data2) {
                let abbr2 = data2.name.split(' ').map(function(item){return item[0]}).join('')
                return abbr + abbr2
            }
            return abbr
        }
        const acronym = getAcronym()

        function getDiceRollNumber() {
            return Math.round(Math.random() * 5 + 1)
        }

        return `
            <div class="character-card">
                <h2 class="name">${acronym}</h2>
                <img class="avatar" src="${avatar}" alt="yugioh card">
                ${data2 ? `<img class="avatar" src="${data2.avatar}" alt="yugioh card"></img>` : ''}
                <div class="health-outer">
                    <span class="health"> health: <span class="b">${data2 ? health + data2.health : health}</span></span>
                    <span class="attack"> attack: <span class="b">${data2 ? attack + data2.attack + increaseAttack() : attack + increaseAttack()}</span></span>
                </div>
                <div class="health-bar-outer">
                    <div class="health-bar-inner"></div>
                </div>
                <div class="dice-container">
                    ${diceRollsPlaceholders}
                </div>
            </div>
        `
    }

}

