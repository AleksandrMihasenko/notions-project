import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = (): JSX.Element => {
  const { t } = useTranslation('main');

  return (
    <div>
      <BugButton/>
      {t('main')}
    </div>
  );
};

export default MainPage;
