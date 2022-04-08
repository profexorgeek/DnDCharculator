import Dnd5eDataService from "@/services/Dnd5eDataService";
import AbilityScoreModel from "./AbilityScoreModel";
import type BonusModel from "./BonusModel";
import ProficiencyModel from "./ProficiencyModel";
import SkillModel from "./SkillModel";

export default class CharacterModel {
    
    public Name: string = '';
    public Class: string = '';
    public Race: string = '';
    public Alignment: string = '';
    public Level: number = 1;
    public Age: number = 50;
    public Height: string = '5\'1"';
    public Weight: string = '200lbs';
    public Eyes: string = 'Brown';
    public Skin: string = 'Medium';
    public Hair: string = 'Brown';

    public Proficiency: ProficiencyModel = new ProficiencyModel(2);
    public Abilities: AbilityScoreModel[] = [];
    public Skills: SkillModel[] = [];
    public Bonuses: BonusModel[] = [];

    constructor() {}

    public static Create(): CharacterModel {
        const svc = Dnd5eDataService.Instance;

        if(!svc.Initialized)
        {
            throw "Attempted to create a character but Data Service was not initialized!";
        }

        let model:CharacterModel = new CharacterModel();
        model.Class = svc.Data.Classes[0];
        model.Race = svc.Data.Races[0];
        model.Alignment = svc.Data.Alignments[0];
        
        // populate ability scores
        let skills: SkillModel[] = [];
        for(let i = 0; i < svc.Data.Abilities.length; i++)
        {
            let abilityData = svc.Data.Abilities[i];
            let abilityModel = new AbilityScoreModel(abilityData.Name);

            for(let j = 0; j < abilityData.Skills.length; j++) {
                let skillData = abilityData.Skills[j];
                let skillModel = new SkillModel(skillData, abilityModel, model.Proficiency);
                skills.push(skillModel);
            }
            model.Abilities.push(abilityModel);
        }

        model.Skills = skills.sort((a, b) => a.Name.localeCompare(b.Name));

        return model;
    }
}