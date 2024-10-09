const spellBook = [ 'Expelliarmus', 'Accio', 'Expecto Patronum', 'Wingardium Leviosa' ];
let mannaPoints = 50; 

const castSpell = () => {
    // Choose a random spell from the array
    const randomIndex = Math.floor(Math.random() * spellBook.length);
    const randomSpell = spellBook[randomIndex];
    console.log('randomSpell', randomSpell);

    //show the user the spell on the screen
    const spellElement = document.getElementById('spell')
    const message = `You cast the ${randomSpell} spell`;
    spellElement.textContent = message;

    // Subtract 5 manna points from the total
    mannaPoints = mannaPoints - 5;
    console.log('mannaPoints', mannaPoints);

    // show the user the new manna points on the screen
    const mannaElement = document.getElementById('manna-points')
    mannaElement.textContent = mannaPoints;
}