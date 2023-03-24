/// <reference types="react" />
import { FormikFieldProps } from '../FieldProps';
import { TransferItem, TransferProps as $TransferProps } from 'antd/es/transfer';
export type TransferProps<RecordType extends TransferItem = TransferItem> = FormikFieldProps & $TransferProps<RecordType>;
export declare function Transfer<RecordType extends TransferItem = TransferItem>({ name, validate, fast, onChange, ...restProps }: TransferProps<RecordType>): JSX.Element;
export default Transfer;
//# sourceMappingURL=index.d.ts.map