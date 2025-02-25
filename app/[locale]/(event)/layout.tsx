import Footer from "@/components/footer/Footer";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-background-event text-foreground min-h-screen h-full mb-footer-height">
            {children}
            <div className="fixed inset-x-0 bottom-0 h-footer-height bg-background-event text-foreground">
                <Footer />
            </div>
        </div>
    );
}
