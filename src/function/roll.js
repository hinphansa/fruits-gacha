import { getRFruits, getSRFruits, getSSRFruits } from "../data/fruits";

export const roll = (amount) => {
    let chance = 0;
    const item = [];
    const R_fruits = getRFruits();
    const SR_fruits = getSRFruits();
    const SSR_fruits = getSSRFruits();

    for (let i = 0; i < amount; i++) {
        chance = randomRate();
        if (chance <= 80) {
            item.push(randomItem(R_fruits));
        }
        else if (chance <= 97) {
            item.push(randomItem(SR_fruits));
        }
        else {
            item.push(randomItem(SSR_fruits));
        }
    }

    return item;
}

const randomRate = () => {
    return ~~(Math.random() * 100);
}

const randomItem = (item) => {
    return item[~~(Math.random() * item.length)];
}