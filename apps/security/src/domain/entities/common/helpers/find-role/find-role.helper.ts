import { RoleEntity } from '../../../role';

export const findRoleHelper = (
  role: RoleEntity,
  roles: RoleEntity[],
): number => {
  return roles.findIndex((roleEntity) => roleEntity.roleId.equal(role.roleId));
};
