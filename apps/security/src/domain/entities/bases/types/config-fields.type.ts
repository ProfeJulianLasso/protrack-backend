type ConfigFieldNameType = {
  fieldName: string;
};

type ConfigRegexType = {
  regex?: RegExp;
  regexMessage?: string;
};

export type ConfigStringType = {
  minLength?: number;
  maxLength?: number;
} & ConfigFieldNameType &
  ConfigRegexType;

export type ConfigBooleanType = ConfigFieldNameType;
