import { CustomPageModel } from "./custom.page.model";
import { IHeat } from "./Heat";
import { ISponsor } from "./Sponsor";
import { ILink } from "./MSLink";

export interface IEvent {
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
    coverImage: string;
    gatheringTime: string;
    detailsImage: string;
    enrollmentInclude:string;
    secondaryColor: string;
    organizerDetails:string;
    heats: IHeat[];
    customPage: CustomPageModel,
    contactImage: string,
    medicalLinks: ILink[];
    priceDates: string[];
    sponsors: ISponsor[];
    termLinks: ILink[];
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
    generalGallery: string;
    wazeDirection: string;
    showMaps:number,
    gtmId?: string,
    tavTeken: number
}

