
export type ComptSize = 'mini' | 'small' | 'medium' | 'large';
// status
export type ButtonStatus = 'normal' | 'warning' | 'success' | 'danger';
// shape
export type ButtonShape = 'square' | 'circle' | 'round';
// type
export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'dashed'
  | 'outline'
  | 'text';
// htmltype
export type ButtonHtmlType = 'button' | 'reset' | 'submit';
export interface ButtonProps {
    type?: ButtonType;
    shape?: ButtonShape;
    status?: ButtonStatus;
    size?: ComptSize;
    long?: boolean;
    loading?: boolean;
    disabled?: boolean;
    htmlType?: ButtonHtmlType;
  }
  