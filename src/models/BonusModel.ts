import BonusType from "./BonusType";

export default class BonusModel {
    public Type: BonusType = BonusType.Generic;
    public Modifier: number = 0;
    public Note: string = "";
}