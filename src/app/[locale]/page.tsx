'use client';

import { Button } from "antd";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Title } from "@/components/Common/Typography";
import CustomButton from "@/components/Common/Button";

export default function Home() {
  const t = useTranslations('Index');
  const router = useRouter();

  const handleChangeLocale = (locale: 'en' | 'th') => {
    router.replace(`/`, { locale: locale })
  }

  return (
    <div className="bg-primary">
      <div>
        <p>{t('description')}</p>
        <Button type="primary" onClick={() => handleChangeLocale('en')}>EN</Button>
        <Button onClick={() => handleChangeLocale('th')}>TH</Button>
      </div>

      <div>
        <Title>Button</Title>
        <CustomButton type="primary">Primary Buttom</CustomButton>
        <CustomButton>Initial Buttom</CustomButton>
      </div>

    </div>
  );
}
