import { AxiosError } from 'axios';
import { FC } from 'react';
import { checkEmailExists } from '../../../utils/api';
import {
  InputContainer,
  InputContainerHeader,
  InputError,
  InputField,
  InputLabel,
} from '../../../utils/styles';
import { RegisterFormFieldProps } from '../../../utils/types/form';

export const EmailField: FC<RegisterFormFieldProps> = ({
  register,
  errors,
}) => {
  console.log('Email Errors: ', errors.email);
  return (
    <InputContainer>
      <InputContainerHeader>
        <InputLabel htmlFor="email">Email</InputLabel>
        {errors.email && <InputError>{errors.email.message}</InputError>}
      </InputContainerHeader>
      <InputField
        type="text"
        id="email"
        {...register('email', {
          required: 'Email is required',
          validate: {
            checkUsername: async (username: string) => {
              try {
                await checkEmailExists(username);
              } catch (err) {
                return (
                  (err as AxiosError).response?.status === 409 &&
                  'Email already exists'
                );
              }
            },
          },
        })}
      />
    </InputContainer>
  );
};
