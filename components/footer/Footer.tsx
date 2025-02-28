import FooterLink from "./FooterLink";
import DesktopMiddleFooter from "./DesktopMiddleFooter";
import MobileFooterExtension from "./MobileFooterExtension";
import { sanityFetch } from "@/sanity/lib/live";
import { FOOTER_QUERY } from "@/sanity/lib/queries/footer";

type FooterProps = {
    isEventPage: boolean;
    lang: string;
};

export default async function Footer({ isEventPage, lang }: FooterProps) {
    const { data } = await sanityFetch({
        query: FOOTER_QUERY,
        params: { lang },
    });
    if (!data) return null;
    const { scrollingText, hoverText, link, showNewsletter } = data;
    const footerHeight = isEventPage
        ? "h-footer-height"
        : "h-footer-height-mobile";
    const footerBackground = isEventPage
        ? "bg-background-event"
        : "bg-background";
    return (
        <footer
            className={`fixed bottom-0 ${footerHeight} ${footerBackground} w-full md:h-footer-height flex flex-col`}
        >
            <div
                className={`${!isEventPage ? "md:hidden h-footer-height-extension" : ""}`}
            >
                <MobileFooterExtension
                    isEventPage={isEventPage}
                    scrollingText={scrollingText ?? ""}
                />
            </div>
            <div className="h-footer-height flex justify-between border-t border-foreground">
                <FooterLink
                    translationKey="menu"
                    allyTranslationKey="menu-a11y"
                    link="meny"
                />
                <DesktopMiddleFooter
                    isEventPage={isEventPage}
                    scrollingText={scrollingText ?? ""}
                    hoverText={hoverText ?? ""}
                    link={link ?? ""}
                    showNewsletter={showNewsletter ?? true}
                />
                <FooterLink
                    translationKey="program"
                    allyTranslationKey="program-a11y"
                    link="program"
                />
            </div>
        </footer>
    );
}
