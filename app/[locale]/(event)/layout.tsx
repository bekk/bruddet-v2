import Footer from "@/components/footer/Footer";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background-event text-foreground min-h-front-page-height-mobile md:min-h-front-page-height h-full mb-footer-height">
      {children}
      <div className="fixed inset-x-0 bottom-0 h-footer-height-mobile md:h-footer-height bg-background-event text-foreground">
        <Footer isEventPage={true} />
      </div>
    </div>
  );
}
