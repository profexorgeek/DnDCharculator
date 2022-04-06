export default class AbilityScore {

    public Name: string  = "Ability";
    public Score: number = 10;
    public ScoreBonuses: number[] = [];
    public ScoreModBonuses: number[] = [];
    
    public get ScoreMod(): number {
        let score = this.Score;

        // first apply any bonuses to the base score value
        for(let i = 0; i < this.ScoreBonuses.length; i++) {
            score += this.ScoreBonuses[i];
        }

        // now calculate the modifier base value and add modifier bonuses
        let scoreMod = Math.floor((score - 10) / 2);
        for(let i = 0; i < this.ScoreModBonuses.length; i++) {
            scoreMod += this.ScoreModBonuses[i];
        }

        return scoreMod;
    }
}