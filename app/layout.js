import './globals.css';

export const metadata = {
  title: 'Da Base ao Topo',
  description: 'O Mundo Corporativo Real',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
