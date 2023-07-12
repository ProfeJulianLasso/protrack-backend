import { ConfigBooleanType, ConfigStringType } from './types';
import { ValueObjectBase } from './value-object.base';

export abstract class ConfigValueObjectBase<
  Type,
> extends ValueObjectBase<Type> {
  private _config: ConfigStringType | ConfigBooleanType;

  protected get config(): ConfigStringType | ConfigBooleanType {
    return this._config;
  }

  protected set config(config: ConfigStringType | ConfigBooleanType) {
    this._config = config;
  }

  protected abstract configure(): void;
}
