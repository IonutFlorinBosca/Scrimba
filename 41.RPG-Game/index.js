import { characterData } from "./data.js"
import Character from "./Character.js"

const hero1 = new Character(characterData.hero1)
const opponent = new Character(characterData.BlueEyes)

function render() {
    document.getElementById('hero').innerHTML = hero1.getCharacterHtml(characterData.hero2)
    document.getElementById('monster').innerHTML = opponent.getCharacterHtml(characterData.AlexandriteDragon)
}

render()