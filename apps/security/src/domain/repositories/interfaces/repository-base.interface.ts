import { IdValueObject, ValueObjectBase } from '../../entities';

export interface IRepositoryBase<T> {
  findAll(): Promise<T[]>;
  findBy(
    ...args: ValueObjectBase<string | number | bigint | Date | boolean>[]
  ): Promise<T[]>;
  findOneBy(
    ...args: ValueObjectBase<string | number | bigint | Date | boolean>[]
  ): Promise<T>;
  create(entity: T): Promise<T>;
  update(id: IdValueObject, entity: T): Promise<T>;
  delete(id: IdValueObject): Promise<boolean>;
}
