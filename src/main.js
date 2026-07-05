export default function showLife(hero) {
    if (hero.health > 50) {
        return "healthy";
    } else if (hero.health < 15) {
        return "critical";
    } else {
        return "wounded";
    }
}

export function sortHeroes (heroes) {
    return heroes.slice().sort((a, b) => b.health - a.health);
}