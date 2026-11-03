import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/main-nav";
import Footer from "@/components/dashboard/footer";
import MotionProvider from "@/components/motion/MotionProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anfords Bangladesh",
  description:
    "Anfords Bangladesh brings you premium quality oral and personal care products, trusted by millions worldwide.",
};

export const viewport: Viewport = {
  themeColor: "#005AAA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          poppins.variable
        )}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-blue focus:px-5 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <div id="main">{children}</div>
          {/* footer  */}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
