import { IPrize } from "./Prize";
import { ISection } from "./Section";

export interface IHeat {
    Rolls: number;
    description: string;
    startHeat: string;
    distance?: number;
    minAge: number;
    maxAge: number;
    prices: number[];
    prizes: IPrize[];
    mapUrl: string;
    sections: ISection[];
    amami: number;
    routeDescription: string;
}



