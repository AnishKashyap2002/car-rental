import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components";
import { Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Next learning",
    description: "Way to do something awesome..",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="sm:px-10 px-5 ">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
