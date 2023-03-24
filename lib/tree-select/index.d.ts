import * as React from 'react';
import { FormikFieldProps } from '../FieldProps';
import { TreeSelectProps as $TreeSelectProps } from 'antd/es/tree-select';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
export type TreeSelectProps<ValueType = any, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType> = FormikFieldProps & $TreeSelectProps<ValueType, OptionType> & {
    children?: React.ReactNode;
};
export declare const TreeSelect: {
    ({ name, validate, fast, onChange, onBlur, ...restProps }: TreeSelectProps): JSX.Element;
    TreeNode: React.FC<import("rc-tree-select/lib/TreeNode").TreeNodeProps>;
};
export default TreeSelect;
//# sourceMappingURL=index.d.ts.map