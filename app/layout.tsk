import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
export const metadata = {
  title: "Global Bite",
  description: "Discover cultural treasures from around the world."
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-cream text-charcoal">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
