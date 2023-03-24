/// <reference types="react" />
import { TableProps as $TableProps } from 'antd/es/table/Table';
import { FormikFieldProps } from '../FieldProps';
export type TableProps<RecordType> = FormikFieldProps & $TableProps<RecordType>;
export declare function Table<RecordType extends object = any>({ name, ...restProps }: TableProps<RecordType>): JSX.Element;
export default Table;
//# sourceMappingURL=index.d.ts.map