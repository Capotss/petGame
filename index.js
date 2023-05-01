var stats = {
    hungry: 80,
    energy: 80,
    hygiene: 80,
    social: 80,
    fun: 80
}


let changeBar = (a) => {
    var bars = document.querySelectorAll('.filler')
    switch (a) {
        case 'hungry': stats.hungry += 5; stats.energy += 1; stats.hygiene -= 3; stats.social += 0; stats.fun += 0; break;
        case 'energy': stats.hungry -= 4; stats.energy += 5; stats.hygiene -= 3; stats.social += 0; stats.fun -= 3; break;
        case 'hygiene': stats.hungry += 0; stats.energy += 1; stats.hygiene += 5; stats.social -= 1; stats.fun += 0; break;
        case 'social': stats.hungry -= 2; stats.energy -= 2; stats.hygiene += 0; stats.social += 5; stats.fun += 1; break;
        case 'fun': stats.hungry -= 3; stats.energy -= 3; stats.hygiene -= 0; stats.social += 4; stats.fun += 5; break;
    }
    if (stats.hungry > 100) stats.hungry = 100
    if (stats.energy > 100) stats.energy = 100
    if (stats.hygiene > 100) stats.hygiene = 100
    if (stats.social > 100) stats.social = 100
    if (stats.fun > 100) stats.fun = 100
    if (stats.hungry <0) stats.hungry = 0
    if (stats.energy <0) stats.energy = 0
    if (stats.hygiene <0) stats.hygiene = 0
    if (stats.social <0) stats.social = 0
    if (stats.fun <0) stats.fun = 0
    bars[0].style.width = `${stats.hungry}%`
    bars[1].style.width = `${stats.energy}%`
    bars[2].style.width = `${stats.hygiene}%`
    bars[3].style.width = `${stats.social}%`
    bars[4].style.width = `${stats.fun}%`
    console.log(a, stats[a])
}