import { type FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import classes from './LoginModal.module.scss';
import { LoginFormAsync } from '../LoginForm/loginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const {
    className,
    isOpen,
    onClose,
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
      className={classNames(classes.LoginModal, [className as string])}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
