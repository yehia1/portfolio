import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/lib/providers";
const title = "Yehia Hossam | Data Engineer";
const description =
  "Data Engineer at Teradata building enterprise ETL pipelines, cloud data warehouses, and reliable data layers. Explore my experience, projects, and certifications. Open to mid-to-senior roles and freelance projects.";
export const metadata: Metadata = {
  metadataBase: new URL("https://yehia-hossam.vercel.app"),
  title,
  description,
  creator: "Yehia Hossam",
  keywords: [
    "Data Engineer",
    "Yehia Hossam",
    "Teradata",
    "ETL",
    "Data Warehouse",
    "Python",
    "SQL",
    "Freelance Data Engineer",
  ],
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#home">
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
