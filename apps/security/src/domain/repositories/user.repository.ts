import { UserEntity } from '../entities';
import { IRepositoryBase } from './interfaces';

export interface IUserRepository extends IRepositoryBase<UserEntity> {}
