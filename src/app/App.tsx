import { FloatingCtaRail } from '@/components/organisms/FloatingCtaRail';
import { FloatingNavigationRail } from '@/components/organisms/FloatingNavigationRail';
import { HomePage } from '@/components/templates/HomePage';
import { homePageContent } from '@/data/homePage';

export function App() {
  return (
    <>
      <FloatingCtaRail
        contactHref={homePageContent.floatingCtaRail.contactHref}
        contactLabel={homePageContent.floatingCtaRail.contactLabel}
        downloadFileName={homePageContent.floatingCtaRail.downloadFileName}
        downloadHref={homePageContent.floatingCtaRail.downloadHref}
        downloadLabel={homePageContent.floatingCtaRail.downloadLabel}
      />
      <FloatingNavigationRail
        items={homePageContent.navigation.items}
        statusLabel={homePageContent.navigation.statusLabel}
        statusValue={homePageContent.navigation.statusValue}
      />
      <HomePage />
    </>
  );
}
