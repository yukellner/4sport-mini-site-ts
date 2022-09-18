import { HeatModel } from "./heat.model";
import { SponserModel } from "./sponser.model";
import { TermsLinksModel } from "./TermsLinksModel";

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
        gatheringTime: string;
        enrollmentInclude:string;
        secondaryColor: string;
        organizerDetails:string;
        heats: HeatModel[];
        medicalLinks: TermsLinksModel[];
        priceDates: string[];
        sponsors: SponserModel[];
        termLinks: TermsLinksModel[];
        showParticipants: number;
        participationMedal: number;
        eventType: string;
        logo: string;
        terms: string;
        ceremonyTime: string;
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

