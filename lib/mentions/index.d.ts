import * as React from 'react';
import { FormikFieldProps } from '../FieldProps';
import { MentionProps as $MentionProps } from 'antd/es/mentions';
export type MentionProps = FormikFieldProps & $MentionProps;
export declare const Mentions: {
    ({ name, validate, fast, onChange: $onChange, onBlur: $onBlur, ...restProps }: MentionProps): JSX.Element;
    Option: React.FC<import("rc-mentions/lib/Option").OptionProps>;
};
export default Mentions;
//# sourceMappingURL=index.d.ts.map