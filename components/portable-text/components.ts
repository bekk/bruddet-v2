import { faq } from "@/sanity/schemaTypes/portable-text/faq";
import CustomImageComponent from "./CustomImageComponent";
import VideoComponent from "./VideoComponent";
import QuoteBombComponent from "./QuoteBombComponent";
import ExpandableBlockComponent from "./ExpandableBlockComponent";
import FaqComponent from "./FaqComponent";
import ReviewComponent from "./ReviewComponent";

export const portableTextComponents = {
  types: {
    customImage: CustomImageComponent,
    video: VideoComponent,
    // googleMaps: GoogleMapsComponent,
    review: ReviewComponent,
    faq: FaqComponent,
    expandableBlock: ExpandableBlockComponent,
    quoteBomb: QuoteBombComponent,
  },
};
