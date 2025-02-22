import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../../styles/globals.css";
import { ThemeProvider } from '@/providers/ThemeProvider';
import Favicon from "@/app/favicon.ico";

const roboto = Roboto({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '300', "400", "500", "700", "900"],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "my portfolio",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default async function LocaleLayout({ children }: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  
  const message = await getMessages();

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={message}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
