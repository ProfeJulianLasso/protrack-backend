import { UserEntity } from '../entities';
import { IRepository } from './interfaces';

export interface IUserRepository extends IRepository<UserEntity> {}
