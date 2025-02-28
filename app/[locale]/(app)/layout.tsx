import Footer from '@/components/footer/Footer';
import MobileFooterExtension from '@/components/footer/MobileFooterExtension';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-foreground min-h-front-page-height-mobile md:min-h-front-page-height h-full mb-footer-height-mobile md:mb-footer-height">
      {children}
      <div className="fixed inset-x-0 bottom-0 h-footer-height-mobile md:h-footer-height bg-background text-foreground">
        <div className="md:hidden h-footer-height-extension">
          <MobileFooterExtension isEventPage={false} />
        </div>
        <div className="h-footer-height">
          <Footer isEventPage={false} />
        </div>
      </div>
    </div>
  );
}
