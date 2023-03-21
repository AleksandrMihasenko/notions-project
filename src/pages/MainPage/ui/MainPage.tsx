import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

const MainPage = (): JSX.Element => {
  const { t } = useTranslation('main');

  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      {t('main')}
      <Input placeholder="Input text" value={value} onChange={onChange} />
    </div>
  );
};

export default MainPage;
