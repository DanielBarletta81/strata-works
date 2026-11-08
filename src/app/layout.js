import localFont from 'next/font/local';
import './globals.css';

const sans = localFont({
  src: [
    { path: '../../public/fonts/space-grotesk-400.ttf', weight: '400' },
    { path: '../../public/fonts/space-grotesk-600.ttf', weight: '600' },
  ],
  variable: '--font-grotesk',
  display: 'swap',
});
const serif = localFont({ src: '../../public/fonts/spectral-400.ttf', variable: '--font-spectral', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://strata.works'),
  title: 'Strata Works — Software, science, and structure, built in layers.',
  description: 'Strata Works is the engineering studio of Daniel C. Barletta: full-stack product engineering, scientific dashboards, data pipelines, operations tooling, interactive 3D systems, and design-led web presence.',
  openGraph: {
    title: 'Strata Works',
    description: 'Software, science, and structure — built in layers.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return <html lang="en" className={`${sans.variable} ${serif.variable}`}><body>{children}</body></html>;
}
