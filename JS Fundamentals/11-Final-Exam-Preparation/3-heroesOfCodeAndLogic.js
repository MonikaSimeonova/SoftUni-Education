function heroesOfCodeAndLogic(input) {
    let numHeroes = Number(input.shift());
    let heroObj = {};
    let maxHp = 100;
    let maxMp = 200;
    for (let i = 0; i < numHeroes; i++) {
        let line = input.shift();
        let [hero, hp, mp] = line.split(' ')

        heroObj[hero] = {
            hp: Number(hp),
            mp: Number(mp),
        }
    }

    let nextLine = input.shift();
    while (nextLine !== 'End') {
        let splitedLine = nextLine.split(' - ');
        let command = splitedLine[0];

        if (command == 'CastSpell') {
            let heroName = splitedLine[1];
            let mpNeeded = Number(splitedLine[2]);
            let spellName = splitedLine[3];
            if (heroObj[heroName].mp >= mpNeeded) {
                heroObj[heroName].mp -= mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroObj[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command == 'TakeDamage') {
            let nameHero = splitedLine[1];
            let damage = Number(splitedLine[2]);
            let attackerName = splitedLine[3];
            heroObj[nameHero].hp -= damage;
            if (heroObj[nameHero].hp > 0) {
                console.log(`${nameHero} was hit for ${damage} HP by ${attackerName} and now has ${heroObj[nameHero].hp} HP left!`);
            } else {
                delete heroObj[nameHero];
                console.log(`${nameHero} has been killed by ${attackerName}!`);
            }

        } else if (command == 'Recharge') {
            let heroToRecharge = splitedLine[1];
            let mpAdded = Number(splitedLine[2]);
            let currentMp = heroObj[heroToRecharge].mp;
            heroObj[heroToRecharge].mp += mpAdded
            if (heroObj[heroToRecharge].mp > maxMp) {
                heroObj[heroToRecharge].mp = maxMp;
                let mpAddedOver = maxMp - currentMp;
                console.log(`${heroToRecharge} recharged for ${mpAddedOver} MP!`);
            } else {
                console.log(`${heroToRecharge} recharged for ${mpAdded} MP!`);
            }

        } else if (command == 'Heal') {
            let heroToHeal = splitedLine[1];
            let hpToHeal = Number(splitedLine[2]);
            let currentHealth = heroObj[heroToHeal].hp;
            heroObj[heroToHeal].hp += hpToHeal;
            if (heroObj[heroToHeal].hp > maxHp) {
                heroObj[heroToHeal].hp = maxHp;
                let hpAdd = maxHp - currentHealth
                console.log(`${heroToHeal} healed for ${hpAdd} HP!`);
            } else {
                console.log(`${heroToHeal} healed for ${hpToHeal} HP!`);
            }
        }
        nextLine = input.shift();
    }
    let heroesForPrint = Object.entries(heroObj);

    for (const [name, info] of heroesForPrint) {
        console.log(`${name}`);
        console.log(` HP: ${info.hp}`);
        console.log(` MP: ${info.mp}`)
    //     console.log(`${name}
    // HP: ${info.hp}
    // MP: ${info.mp}
    //   `);
    }


}
heroesOfCodeAndLogic([2,
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End',
    ])