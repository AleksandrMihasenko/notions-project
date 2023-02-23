import { type FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './PageError.module.scss';
import { useTranslation } from 'react-i18next';

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(classes.PageError, [className as string])}>
      <p>{t('page-error')}</p>
      <Button onClick={reloadPage}>
        {t('reload-page')}
      </Button>
    </div>
  );
};
