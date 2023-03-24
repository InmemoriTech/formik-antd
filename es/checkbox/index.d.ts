/// <reference types="react" />
import { CheckboxProps as $CheckboxProps } from 'antd/es/checkbox/Checkbox';
import { FormikFieldProps } from '../FieldProps';
import { CheckboxGroupProps as $CheckboxGroupProps } from 'antd/es/checkbox/Group';
export type CheckboxProps = FormikFieldProps & $CheckboxProps;
export declare const Checkbox: {
    ({ name, validate, fast, onChange, ...restProps }: CheckboxProps): JSX.Element;
    Group({ name, validate, onChange, ...restProps }: CheckboxGroupProps): JSX.Element;
};
export default Checkbox;
export type CheckboxGroupProps = FormikFieldProps & $CheckboxGroupProps;
//# sourceMappingURL=index.d.ts.map