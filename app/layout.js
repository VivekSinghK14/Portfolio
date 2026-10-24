import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata = {
  metadataBase: new URL("https://portfolio-vert-two-02fklhfwlr.vercel.app"),
  title: "Vivek Kumar Singh — Data, AI & Automation",
  description:
    "MSc Digital Engineering student in Magdeburg. Data pipelines, Power BI dashboards and applied machine learning with Python and SQL. Open to Werkstudent and internship roles.",
  openGraph: {
    title: "Vivek Kumar Singh — Data, AI & Automation",
    description: "Data pipelines, dashboards and applied ML. Open to Werkstudent and internship roles in Germany.",
    images: ["/Asset/headshot.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
