import { UserEntity } from '../../../user';

export const findUserHelper = (
  user: UserEntity,
  users: UserEntity[],
): number => {
  return users.findIndex((userEntity) => userEntity.userId.equal(user.userId));
};
