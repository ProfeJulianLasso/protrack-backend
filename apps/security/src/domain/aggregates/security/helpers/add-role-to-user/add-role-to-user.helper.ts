import { RoleEntity, UserEntity } from '@security/domain';

export const AddRoleToUserHelper = (
  user: UserEntity,
  role: RoleEntity,
): UserEntity => {
  return user.addRole(role);
};
