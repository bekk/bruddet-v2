import Footer from "@/components/footer/Footer";

type LayoutProps = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function Layout({ children, params }: LayoutProps) {
    const lang = (await params).locale;
    return (
        <div className="bg-background-event text-foreground min-h-front-page-height-mobile-event h-full mb-footer-height">
            {children}
            <Footer isEventPage={true} lang={lang} />
        </div>
    );
}
