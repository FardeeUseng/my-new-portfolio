import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '300', "400", "500", "700", "900"],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        {children}
      </body>
    </html>
  );
}
