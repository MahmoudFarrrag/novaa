export type AnmarFieldType = 'text' | 'textarea' | 'number' | 'select' | 'checkbox' | 'date' | 'array-text';

export interface AnmarFieldOption {
  label?: string;
  value: string | number | boolean;
}

export interface AnmarFieldConfig {
  name: string;
  label: string;
  type: AnmarFieldType;
  required?: boolean;
  readonly?: boolean;
  options?: Array<string | number | boolean | AnmarFieldOption>;
}

export interface AnmarResourceConfig {
  key: string;
  route: string;
  title: string;
  endpoint: string;
  icon: string;
  allowCreate: boolean;
  fields: AnmarFieldConfig[];
  columns: string[];
}
