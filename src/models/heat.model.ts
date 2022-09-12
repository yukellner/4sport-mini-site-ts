import { PrizeModel } from "./price.model";
import { SectionModel } from "./section.model";

    export interface HeatModel {
        Rolls: number;
        description: string;
        startHeat: string;
        distance?: number;
        minAge: number;
        maxAge: number;
        prices: number[];
        prizes: PrizeModel[];
        mapUrl: string;
        sections: SectionModel[];
        amami: number
    }



