import { Loader } from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({className}: PageLoaderProps) => {
  return (
    <div className={classNames(classes.PageLoader, [className])}>
      <Loader />
    </div>
  );
};
