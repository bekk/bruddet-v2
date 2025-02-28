import Footer from '@/components/footer/Footer';
import MobileFooterExtension from '@/components/footer/MobileFooterExtension';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background-event text-foreground min-h-front-page-height-mobile-event h-full mb-footer-height">
      {children}
      <MobileFooterExtension isEventPage={true} />
      <div className="fixed inset-x-0 bottom-0 h-footer-height bg-background-event text-foreground">
        <Footer isEventPage={true} />
      </div>
    </div>
  );
}
