import "./globals.css";
import Footer from "@/shared/footer/Footer";

export const metadata = {
  title: "E-Commerce Landing Page",
  description: "Shop top-quality products at unbeatable prices on We5ive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased font-manrope`}>
        {children}

        {/* footer */}
        <Footer>&copy; 2024 | We5ive</Footer>
      </body>
    </html>
  );
}
