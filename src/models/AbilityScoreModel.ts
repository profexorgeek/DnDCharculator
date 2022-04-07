export default class AbilityScoreModel {

    public Name: string  = "Ability";
    public Base: number = 10;

    private _BaseBonuses: number[] = [];
    private _ModifierBonuses: number[] = [];
    
    public get ShortName(): string {
        return this.Name.substring(0, 3).toUpperCase();
    }

    public get Modifier(): number {
        let base = this.Base;

        // first apply any bonuses to the base score value
        for(let i = 0; i < this._BaseBonuses.length; i++) {
            base += this._BaseBonuses[i];
        }

        // now calculate the modifier base value and add modifier bonuses
        let modifier = Math.floor((base - 10) / 2);
        for(let i = 0; i < this._ModifierBonuses.length; i++) {
            modifier += this._ModifierBonuses[i];
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

    constructor(name: string, base: number = 10) {
        this.Name = name;
        this.Base = base;
    }

    public AddBaseBonus(bonus: number): void {
        this._BaseBonuses.push(bonus);
    }

    public ClearBaseBonuses(): void {
        this._BaseBonuses = [];
    }

    public AddModifierBonus(bonus: number): void {
        this._ModifierBonuses.push(bonus);
    }

    public ClearModifierBonuses(): void {
        this._ModifierBonuses = [];
    }

    public ClearAllBonuses(): void {
        this.ClearBaseBonuses();
        this.ClearModifierBonuses();
    }
}