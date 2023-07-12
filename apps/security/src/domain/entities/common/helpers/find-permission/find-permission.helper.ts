import { PermissionEntity } from '../../../permission';

export const findPermissionHelper = (
  permission: PermissionEntity,
  permissions: PermissionEntity[],
): number => {
  return permissions.findIndex((permissionEntity) =>
    permissionEntity.permissionId.equal(permission.permissionId),
  );
};
