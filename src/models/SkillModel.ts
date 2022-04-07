import type AbilityScoreModel from "./AbilityScoreModel";
import type ProficiencyModel from "./ProficiencyModel";

export default class SkillModel {

    public Name:string;
    public Ability: AbilityScoreModel;
    public Proficiency: ProficiencyModel;
    public Proficient:boolean;
    
    private _Bonuses: number[] = [];

    public get Modifier(): number {
        let modifier = this.Ability.Modifier;

        if(this.Proficient) {
            modifier += this.Proficiency.Score;
        }

        for(let i = 0; i < this._Bonuses.length; i++) {
            modifier += this._Bonuses[i];
        }
        return modifier;
    }

    public get ModifierString(): string {
        let m = this.Modifier;
        if(m >= 0) {
            return `+${m}`;
        }
        return m.toString();
    }

    public get SafeName(): string {
        return this.Name.replace('/\s+/g', '');
    }

    constructor(name: string, ability: AbilityScoreModel, proficiency:ProficiencyModel, proficient: boolean = false)
    {
        this.Name = name;
        this.Ability = ability;
        this.Proficiency = proficiency;
        this.Proficient = proficient;
    }
    

    public AddBonus(bonus: number): void {
        this._Bonuses.push(bonus);
    }

    public ClearBonuses(): void {
        this._Bonuses = [];
    }
}