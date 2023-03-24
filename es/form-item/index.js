import { __rest } from "tslib";
import * as React from 'react';
import { Field, getIn } from 'formik';
import { Form } from 'antd';
export const FormItem = (_a) => {
    var { name, __debug, showValidateSuccess, showInitialErrorAfterTouched = false, children, validate } = _a, restProps = __rest(_a, ["name", "__debug", "showValidateSuccess", "showInitialErrorAfterTouched", "children", "validate"]);
    return (React.createElement(Field, { name: name, validate: validate }, ({ form: { errors = {}, touched = {}, initialErrors = {} }, }) => {
        const error = getIn(errors, name, undefined);
        const initialError = getIn(initialErrors, name, undefined);
        let isTouched = getIn(touched, name, false);
        if (Array.isArray(isTouched)) {
            isTouched =
                isTouched.length === 0
                    ? true
                    : isTouched.reduce((acc, value) => acc || value, false);
        }
        const hasError = error !== undefined && isTouched;
        const hasInitialError = initialError !== undefined;
        const isValid = !error && isTouched;
        const showHelp = hasError ||
            (hasInitialError && (!isTouched || showInitialErrorAfterTouched));
        return (React.createElement(Form.Item, Object.assign({ htmlFor: name, id: name, name: name, validateStatus: hasError || (hasInitialError && !isTouched)
                ? 'error'
                : isValid && showValidateSuccess
                    ? 'success'
                    : undefined, hasFeedback: isValid, help: showHelp ? (React.createElement(React.Fragment, null,
                hasError && React.createElement("li", null, error),
                hasInitialError &&
                    (!isTouched || showInitialErrorAfterTouched) && (React.createElement("li", null, initialError)))) : null }, restProps),
            React.createElement(React.Fragment, null, children)));
    }));
};
export default FormItem;
//# sourceMappingURL=index.js.map