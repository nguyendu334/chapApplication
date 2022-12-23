import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button } from '../../../utils/styles';
import { CreateUserParams } from '../../../utils/types';
import styles from '../index.module.scss';
import { EmailField } from '../register/EmailField';

export const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserParams>({ reValidateMode: 'onBlur' });

  const onSubmit = async (data: CreateUserParams) => {
    
  };

  const formFieldProps = { errors, register };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <EmailField {...formFieldProps} />
      <Button className={styles.button}>Send Password</Button>
      <div className={styles.footerText}>
        <Link to="/login">
          <span>Cancel</span>
        </Link>
      </div>
    </form>
  );
};
