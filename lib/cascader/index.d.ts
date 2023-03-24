/// <reference types="react" />
import { FormikFieldProps } from '../FieldProps';
import { BaseOptionType, CascaderProps as $CascaderProps, DefaultOptionType } from 'antd/es/cascader';
export type CascaderProps<OptionType> = FormikFieldProps & $CascaderProps<OptionType>;
export declare const Cascader: <OptionType extends DefaultOptionType | BaseOptionType = DefaultOptionType>(props: CascaderProps<OptionType>) => JSX.Element;
export default Cascader;
//# sourceMappingURL=index.d.ts.map