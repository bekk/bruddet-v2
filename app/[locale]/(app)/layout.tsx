import Footer from "@/components/footer/Footer";

type LayoutProps = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function Layout({ children, params }: LayoutProps) {
    const lang = (await params).locale;
    return (
        <div className="bg-background text-foreground min-h-front-page-height-mobile md:min-h-front-page-height h-full mb-footer-height-mobile md:mb-footer-height">
            {children}
            <Footer isEventPage={false} lang={lang} />
        </div>
    );
}
