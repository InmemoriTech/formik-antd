import * as React from 'react';
import { Field } from 'formik';
import { Form as $Form } from 'antd';
import { FormItem } from '../form-item';
export function Form(props) {
    return (React.createElement(Field, null, ({ form: { handleReset, handleSubmit } }) => (React.createElement($Form, Object.assign({ onReset: handleReset, onFinish: handleSubmit }, props)))));
}
Form.Item = FormItem;
export default Form;
//# sourceMappingURL=form.js.map