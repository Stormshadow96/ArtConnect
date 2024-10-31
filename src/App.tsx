import { ThemeProvider } from '@/components/theme-provider';
import ArtConnect from '@/components/art-connect';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="art-connect-theme">
      <ArtConnect />
    </ThemeProvider>
  );
}

export default App;