import Dnd5eData from "@/datamodels/Dnd5eData";

export default class Dnd5eDataService {

    private static CORE_DATA_URL:string = "/data/dnd5e.json";
    private static _instance: Dnd5eDataService;
    public Data:Dnd5eData = new Dnd5eData();
    public Initialized:boolean = false;

    public static get Instance(): Dnd5eDataService {
        if(Dnd5eDataService._instance == null)
        {
            Dnd5eDataService._instance = new Dnd5eDataService();
        }
        return Dnd5eDataService._instance;
    }

    private constructor() { }

    public async initialize(): Promise<void> {
        this.Data = await (await fetch(Dnd5eDataService.CORE_DATA_URL)).json();
        this.Initialized = true;
        console.log(`Successfully fetched data ${Dnd5eDataService.CORE_DATA_URL}`);
    }
}