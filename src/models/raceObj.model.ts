import { HeatModel } from "./heat.model";
import { SponserModel } from "./sponser.model";

    export interface RaceObjModel {
        eventId: number;
        codeName: string;
        description: string;
        date: string;
        dateTime: string;
        location: string;
        contactPhone:string;
        backgroundColor: string;
        foregroundColor: string;
        comments:string;
        secondaryColor: string;
        organizerDetails:string;
        heats: HeatModel[];
        priceDates: string[];
        sponsors: SponserModel[];
        showParticipants: number;
        participationMedal: number;
        eventType: string;
        logo: string;
        registrationUrl: string;
        participantsListUrl: string;
        resultsUrl: string;
        endDate: string;
        isRegistrationInEventDay: boolean;
        status: string;
        coverImages: string[];
        gallery: string;
        wazeDirection: string;
    }

