'use client';

import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Index');
  const router = useRouter();

  const handleChangeLocale = (locale: 'en' | 'th') => {
    router.replace(`/`, { locale: locale })
  }

  return (
    <div className="bg-primary">
      <p>{t('description')}</p>
      <button onClick={() => handleChangeLocale('en')}>EN</button>
      <button onClick={() => handleChangeLocale('th')}>TH</button>
    </div>
  );
}
