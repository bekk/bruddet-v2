import { faq } from "@/sanity/schemaTypes/portable-text/faq";
import CustomImageComponent from "./CustomImageComponent";
import VideoComponent from "./VideoComponent";
import QuoteBombComponent from "./QuoteBombComponent";

export const portableTextComponents = {
    types: {
        customImage: CustomImageComponent,
        video: VideoComponent,
        // dice: DiceComponent,
        // googleMaps: GoogleMapsComponent,
        // review: ReviewComponent,
        // faq: FaqComponent,
        // expandableBlock: ExpandableBlockComponent,
        quoteBomb: QuoteBombComponent,
    }
}