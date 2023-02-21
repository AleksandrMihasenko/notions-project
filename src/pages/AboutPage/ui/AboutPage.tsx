import { useTranslation } from 'react-i18next';

const AboutPage = (): JSX.Element => {
  const { t } = useTranslation('about');

  return (
    <div>
      <div>{t('about')}</div>
    </div>
  );
};

export default AboutPage;
