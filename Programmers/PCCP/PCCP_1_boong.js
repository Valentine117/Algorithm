function solution(bandage, health, attacks) {
    const firstHealth = health;
    const lastIndex = attacks[attacks.length-1][0];
    const attackIndexes = attacks.map(it=>it[0]);
    const attackMap = {};
    attacks.forEach(it => {attackMap[it[0]] = it[1]});

    let stk = 0;

    for(let i = 0; i<=lastIndex; i++) {
        if(attackIndexes.includes(i)) {
            health -= attackMap[i];
            if(health <= 0) return -1;
            stk = 0;
            continue;
        }
        stk++;
        health += bandage[1];
        if(stk === bandage[0]) {
            health += bandage[2];
            stk = 0;
        }

        if(health > firstHealth) health = firstHealth;
    }

    return health;
}

console.log(solution([5, 1, 5], 30, [[2, 10], [9, 15], [10, 5], [11, 5]]))