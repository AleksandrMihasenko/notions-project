import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import classes from './ProfileCard.module.scss';

export interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profiles');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(classes.ProfileCard, [className])}>
      <div className={classes.header}>
        <div>{t('profile')}</div>
        <Button className={classes.editBtn} theme={ThemeButton.OUTLINE}>
          {t('edit')}
        </Button>
      </div>
      <div className={classes.info}>
        <Input value={data?.username} className={classes.input} placeholder="name" />
        <Input value={data?.lastname} className={classes.input} placeholder="surname" />
      </div>
    </div>
  );
});
