import { FloatingNavigationRail } from '@/components/organisms/FloatingNavigationRail';
import { HomePage } from '@/components/templates/HomePage';
import { homePageContent } from '@/data/homePage';

export function App() {
  return (
    <>
      <FloatingNavigationRail
        items={homePageContent.navigation.items}
        statusLabel={homePageContent.navigation.statusLabel}
        statusValue={homePageContent.navigation.statusValue}
      />
      <HomePage />
    </>
  );
}
