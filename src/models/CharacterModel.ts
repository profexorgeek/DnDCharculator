import { computed } from 'vue';

export default class CharacterModel {
    
    public Name: string = 'Name';
    public Class: string = 'Human';
    public Race: string = 'Fighter';
    public Str: number = 10;
    public Dex: number = 10;
    public Con: number = 10;
    public Int: number = 10;
    public Wis: number = 10;
    public Cha: number = 10;


    public get StrMod() : number {
        return this.getAbilityModifier(this.Str);
    }

    public get DexMod() : number {
        return this.getAbilityModifier(this.Dex);
    }

    public get ConMod() : number {
        return this.getAbilityModifier(this.Con);
    }

    public get IntMod() : number {
        return this.getAbilityModifier(this.Int);
    }

    public get WisMod() : number {
        return this.getAbilityModifier(this.Wis);
    }

    public get ChaMod() : number {
        return this.getAbilityModifier(this.Cha);
    }



    constructor() {}

    getAbilityModifier(score: number) : number {
        return Math.floor((score - 10) / 2);
    }
}