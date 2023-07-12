import { UserEntity } from '@security/domain';

export const RegisterUserHelper = (user: UserEntity): UserEntity => {
  return user.create();
};
