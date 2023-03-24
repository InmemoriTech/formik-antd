import * as React from 'react';
import { FieldConfig } from 'formik';
import { FormItemProps as $FormItemProps } from 'antd/es/form/FormItem';
export type FormItemProps = {
    showValidateSuccess?: boolean;
    showInitialErrorAfterTouched?: boolean;
    children: React.ReactNode;
    __debug?: boolean;
} & {
    name: string;
} & $FormItemProps & Pick<FieldConfig, 'validate'>;
export declare const FormItem: ({ name, __debug, showValidateSuccess, showInitialErrorAfterTouched, children, validate, ...restProps }: FormItemProps) => JSX.Element;
export default FormItem;
//# sourceMappingURL=index.d.ts.map