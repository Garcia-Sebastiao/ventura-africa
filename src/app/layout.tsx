import "@/styles/globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { manrope, cormorant, maven } from "@/constants";

export const metadata = {
  title: "Ventura Africa",
};

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const lang = locale ?? "pt-PT";

  return (
    <html lang={lang}>
      <body
        suppressHydrationWarning={true}
        className={`${cormorant.className}`}
      >
        <main className="bg-[#FDFAF7] overflow-x-hidden">
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
