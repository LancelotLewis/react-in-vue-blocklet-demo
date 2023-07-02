import { useEffect } from 'react';
import Header from '@blocklet/ui-react/lib/Header';
import Footer from '@blocklet/ui-react/lib/Footer';
import { useLocaleContext } from '@arcblock/ux/lib/Locale/context';

import Provider from './Provider';
import { useSessionContext } from './libs/session';

console.log({ useLocaleContext });

export default function Layout({ ...props }) {
  return (
    <Provider>
      <InnerApp {...props} />
    </Provider>
  );
}

function InnerApp({ children, changeLocale, changeSession }) {
  const { locale } = useLocaleContext();
  const { session } = useSessionContext();
  useEffect(() => {
    changeLocale(locale);
  }, [locale]);
  useEffect(() => {
    changeSession(session);
  }, [session]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Header maxWidth={false} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
