import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');
  
  return (
    <div>
      <div>{t('about')}</div>
    </div>
  );
};

export default AboutPage;
