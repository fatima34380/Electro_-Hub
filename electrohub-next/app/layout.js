import './globals.css';

export const metadata = {
  title: 'ElectroHub - Premium Electronics & Home Appliances',
  description: 'Shop top-tier electrical goods and smart home appliances at ElectroHub. TVs, ACs, Washing Machines, Laptops, Kitchen Appliances and more with free delivery and official warranty.',
  keywords: 'electronics, home appliances, TVs, air conditioners, washing machines, laptops, kitchen appliances',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
