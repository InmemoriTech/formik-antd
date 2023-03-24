import * as React from 'react';
import { ComponentMeta } from '@storybook/react';
declare const _default: ComponentMeta<({ children, ...restProps }: Partial<{
    href: string;
    target?: string | undefined;
    onClick?: React.MouseEventHandler<HTMLElement> | undefined;
} & import("antd/es/button/button").BaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, "onClick" | "type"> & {
    htmlType?: "button" | "reset" | "submit" | undefined;
    onClick?: React.MouseEventHandler<HTMLElement> | undefined;
} & Omit<React.ButtonHTMLAttributes<any>, "onClick" | "type">>) => JSX.Element>;
export default _default;
export declare const Default: () => JSX.Element;
//# sourceMappingURL=index.stories.d.ts.map