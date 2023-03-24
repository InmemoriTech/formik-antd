import { __rest } from "tslib";
import React from 'react';
import { Form, Formik } from 'formik';
export function StoryTemplate(_a) {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return (React.createElement(Formik, Object.assign({}, rest, { onSubmit: (values, formikHelpers) => {
            console.log('submit', { values });
            formikHelpers.setSubmitting(false);
        } }), (f) => (React.createElement(Form, null,
        React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 } },
            children,
            React.createElement("pre", null, JSON.stringify(Object.assign({}, f), null, 4)))))));
}
//# sourceMappingURL=shared.js.map