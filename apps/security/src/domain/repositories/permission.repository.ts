import { PermissionEntity } from '../entities';
import { IRepositoryBase } from './interfaces';

export interface IPermissionRepository
  extends IRepositoryBase<PermissionEntity> {}
