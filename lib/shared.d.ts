import React from 'react';
import { FormikConfig, FormikValues } from 'formik';
export declare function StoryTemplate<Values extends FormikValues>({ children, ...rest }: {
    children: React.ReactNode;
} & Omit<FormikConfig<Values>, 'onSubmit'>): JSX.Element;
//# sourceMappingURL=shared.d.ts.map