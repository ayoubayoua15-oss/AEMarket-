export const metadata = {
  title: "AEMarket",
  description: "Digital marketplace for creators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
      }
