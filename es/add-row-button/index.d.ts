/// <reference types="react" />
import { ButtonProps } from 'antd/es/button';
export declare function AddRowButton<T = any>({ name, createNewRow, ...restProps }: {
    name: string;
    createNewRow: () => T;
} & Omit<ButtonProps, 'onClick'>): JSX.Element;
export default AddRowButton;
//# sourceMappingURL=index.d.ts.map