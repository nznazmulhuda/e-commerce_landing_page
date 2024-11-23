import "./globals.css";
import Navbar from "@/shared/navbar/Navbar";
import Footer from "@/shared/footer/Footer";

export const metadata = {
  title: "E-Commerce Landing Page",
  description: "Shop top-quality products at unbeatable prices on We5ive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased font-manrope bg-[#F4F8FF]`}>
        {/* navbar */}
        <Navbar />

        {/* dynamically component added */}
        {children}

        {/* footer */}
        <Footer>&copy; 2024 | We5ive</Footer>
      </body>
    </html>
  );
}
