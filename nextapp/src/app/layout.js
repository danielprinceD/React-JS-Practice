export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="winter">
      <body>{children}</body>
    </html>
  );
}
