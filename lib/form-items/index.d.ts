/// <reference types="react" />
import { InputProps, TextAreaProps, PasswordProps } from '../input';
import { FormItemProps as $FormItemProps } from '../form-item';
import { CheckboxProps } from '../checkbox';
import { CascaderProps } from '../cascader';
import { DatePickerProps } from '../date-picker';
import { InputNumberProps } from '../input-number';
import { MentionProps } from '../mentions';
import { RadioGroupProps } from '../radio';
import { RateProps } from '../rate';
import { SelectProps } from '../select';
import { SliderProps } from '../slider';
import { SwitchProps } from '../switch';
import { TimePickerProps } from '../time-picker';
import { TransferProps } from '../transfer';
import { TreeSelectProps } from '../tree-select';
import { TransferItem } from 'antd/es/transfer';
import { BaseOptionType, DefaultOptionType } from 'antd/es/cascader';
type FormItemProps = {
    formItem?: Omit<$FormItemProps, 'children' | 'name' | 'id' | 'htmlFor'>;
};
export declare function Input({ formItem, ...rest }: InputProps & FormItemProps): JSX.Element;
export declare namespace Input {
    var TextArea: typeof import(".").TextArea;
    var Password: typeof import(".").Password;
}
export declare function InputNumber({ formItem, ...rest }: InputNumberProps & FormItemProps): JSX.Element;
export declare function TextArea({ formItem, ...rest }: TextAreaProps & FormItemProps): JSX.Element;
export declare function Password({ formItem, ...rest }: PasswordProps & FormItemProps): JSX.Element;
export declare function Checkbox({ formItem, ...rest }: CheckboxProps & FormItemProps): JSX.Element;
export declare function Cascader<OptionType extends DefaultOptionType | BaseOptionType = DefaultOptionType>({ formItem, ...rest }: CascaderProps<OptionType> & FormItemProps): JSX.Element;
export declare function DatePicker({ formItem, ...rest }: DatePickerProps & FormItemProps): JSX.Element;
export declare function Mentions({ formItem, ...rest }: MentionProps & FormItemProps): JSX.Element;
export declare function Radio({ formItem, ...rest }: RadioGroupProps & FormItemProps): JSX.Element;
export declare function RadioGroup({ formItem, ...rest }: RadioGroupProps & FormItemProps): JSX.Element;
export declare function Rate({ formItem, ...rest }: RateProps & FormItemProps): JSX.Element;
export declare function Select({ formItem, ...rest }: SelectProps & FormItemProps): JSX.Element;
export declare function Slider({ formItem, ...rest }: SliderProps & FormItemProps): JSX.Element;
export declare function Switch({ formItem, ...rest }: SwitchProps & FormItemProps): JSX.Element;
export declare function TimePicker({ formItem, ...rest }: TimePickerProps & FormItemProps): JSX.Element;
export declare function Transfer<RecordType extends TransferItem = TransferItem>({ formItem, ...rest }: TransferProps<RecordType> & FormItemProps): JSX.Element;
export declare function TreeSelect({ formItem, ...rest }: TreeSelectProps & FormItemProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map