import { useState, useEffect } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

// Test component
export const BugButton = () => {
  const { t } = useTranslation();

  const [error, setError] = useState(false);
  const onThrow = (): void => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={onThrow}>
      {t('throw-error')}
    </Button>
  );
};
