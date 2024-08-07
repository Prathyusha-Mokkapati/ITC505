function generateMadLib() {
    const storySelect = document.getElementById('storySelect').value;
    const Noun = document.getElementById('Noun').value;
    const pronoun = document.getElementById('pronoun').value;
    const verb = document.getElementById('verb').value;
    const adverb = document.getElementById('adverb').value;
    const adjective = document.getElementById('adjective').value;

    let madLibResult = '';

    switch (storySelect) {
        case 'story1':
            madLibResult = `Story 1: In a galaxy far, far away, a brave ${Noun} named ${pronoun} embarked on a quest to save the ${adjective} ${Noun}. With the help of the wise ${Noun}, ${pronoun} learned to master the ways of the Force and wield a ${adjective} lightsaber against the forces of ${adjective} evil.`;
            break;
        case 'story2':
            madLibResult = `Story 2: The Rebel Alliance, led by Princess ${Noun}, fought against the oppressive ${Noun} of the ${adjective} Empire. As the rebels planned their next move, they relied on the daring pilot ${Noun} to fly a ${adjective} starship into the heart of the enemy's ${Noun}.`;
            break;
        case 'story3':
            madLibResult = `Story 3: On the desert planet of ${Noun}, a scavenger named ${Noun} discovered a mysterious ${Noun} that held the key to the location of a long-lost ${adjective} Jedi temple. Joined by the loyal droid ${Noun}, ${pronoun} set out on a perilous journey to unlock the secrets of the ${adjective} Force.`;
            break;
        case 'story4':
            madLibResult = `Story 4: Darth ${Noun}, a Sith Lord with a ${adjective} obsession for power, sought to crush the ${Noun} and rule the galaxy with an iron fist. In a climactic battle, the Jedi ${Noun} confronted Darth ${Noun} with a ${adjective} lightsaber, determined to bring an end to the Sith's reign of ${adjective} terror.`;
            break;
        case 'story5':
            madLibResult = `Story 5: In the cantina on the bustling planet of ${Noun}, a diverse group of ${Noun} and ${Noun} gathered to celebrate their victories and share tales of their ${adjective} adventures. The atmosphere was filled with the sounds of lively music, and the air was thick with the scent of exotic ${Noun}.`;
            break;
        default:
            madLibResult = 'Invalid story selection';
            break;
    }

    const resultContainer = document.getElementById('madLibResult');
    resultContainer.innerHTML = madLibResult;
}
