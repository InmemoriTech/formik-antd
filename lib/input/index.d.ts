import * as React from 'react';
import { InputProps as $InputProps, InputRef, PasswordProps as $PasswordProps, TextAreaProps as $TextAreaProps } from 'antd/es/input';
import { FormikFieldProps } from '../FieldProps';
import { TextAreaRef } from 'antd/es/input/TextArea';
export type InputProps = FormikFieldProps & $InputProps;
export interface InputType extends React.ForwardRefExoticComponent<FormikFieldProps & $InputProps & React.RefAttributes<InputRef>> {
    Password: React.ForwardRefExoticComponent<FormikFieldProps & $PasswordProps & React.RefAttributes<unknown>>;
    TextArea: React.ForwardRefExoticComponent<FormikFieldProps & $TextAreaProps & React.RefAttributes<TextAreaRef>>;
}
declare const TypedInput: InputType;
export type PasswordProps = FormikFieldProps & $PasswordProps;
export type TextAreaProps = FormikFieldProps & $TextAreaProps;
export { TypedInput as Input };
export default TypedInput;
//# sourceMappingURL=index.d.ts.map