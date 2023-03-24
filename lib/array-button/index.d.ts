/// <reference types="react" />
import { FieldArrayRenderProps } from 'formik';
import { ButtonProps } from 'antd/es/button';
export declare function ArrayButton({ name, onClick, ...restProps }: {
    name: string;
    onClick: (arrayProps: FieldArrayRenderProps) => void;
} & Omit<ButtonProps, 'onClick'>): JSX.Element;
export default ArrayButton;
//# sourceMappingURL=index.d.ts.map