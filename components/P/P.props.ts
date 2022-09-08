import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
export interface PProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>  {
  size?: 's' | 'm' | 'l';
  children: React.ReactNode;
}