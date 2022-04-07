import type AbilityScoreModel from "./AbilityScoreModel";
import type ProficiencyModel from "./ProficiencyModel";

export default class SkillModel {

    public Name:string;
    public Ability: AbilityScoreModel;
    
    private _Bonuses: number[] = [];

    public get Modifier(): number {
        let modifier = this.Ability.Modifier;
        for(let i = 0; i < this._Bonuses.length; i++) {
            modifier += this._Bonuses[i];
        }
        return modifier;
    }

    public get ModifierString(): string {
        let m = this.Modifier;
        if(m > 0) {
            return `+${m}`;
        }
        return m.toString();
    }

    constructor(name: string, ability: AbilityScoreModel)
    {
        this.Name = name;
        this.Ability = ability;
    }
    

    public AddBonus(bonus: number): void {
        this._Bonuses.push(bonus);
    }

    public ClearBonuses(): void {
        this._Bonuses = [];
    }
}