import { ThemeProvider } from '@arcblock/ux/lib/Theme';
import { LocaleProvider } from '@arcblock/ux/lib/Locale/context';
import { SessionProvider } from './libs/session.js';

export default function Provider({ children }) {
  return (
    <ThemeProvider>
      <LocaleProvider translations={{}}>
        <SessionProvider serviceHost="/">{children}</SessionProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
