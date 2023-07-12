import { UserEntity } from 'apps/security/src/domain/entities';

export const RegisterUserHelper = (user: UserEntity): UserEntity => {
  return user.create();
};
