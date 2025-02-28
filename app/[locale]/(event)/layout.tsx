import Footer from "@/components/footer/Footer";
import MobileFooterExtension from "@/components/footer/MobileFooterExtension";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-background-event text-foreground min-h-front-page-height-mobile-event h-full mb-footer-height">
            {children}
            <Footer isEventPage={true} />
        </div>
    );
}
