import { SvgIcon, SvgIconProps } from '@mui/material';

/* eslint-disable-next-line */
export interface BlocksIconProps extends SvgIconProps {}

export function BlocksIcon(props: BlocksIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M21.5018 14.3349H15.3313V8.1669C15.3313 8.03477 15.2788 7.90804 15.1854 7.81461C15.092 7.72117 14.9652 7.66868 14.8331 7.66868H8.66512V1.49822C8.66512 1.36608 8.61263 1.23936 8.5192 1.14593C8.42576 1.05249 8.29904 1 8.1669 1H1.49822C1.36608 1 1.23936 1.05249 1.14593 1.14593C1.05249 1.23936 1 1.36608 1 1.49822V21.5018C1 21.6339 1.05249 21.7606 1.14593 21.8541C1.23936 21.9475 1.36608 22 1.49822 22H21.5018C21.6339 22 21.7606 21.9475 21.8541 21.8541C21.9475 21.7606 22 21.6339 22 21.5018V14.8331C22 14.701 21.9475 14.5742 21.8541 14.4808C21.7606 14.3874 21.6339 14.3349 21.5018 14.3349ZM7.66868 21.0036H1.99644V15.3313H7.66868V21.0036ZM7.66868 14.3374H1.99644V8.66512H7.66868V14.3374ZM7.66868 7.67117H1.99644V1.99644H7.66868V7.67117ZM14.3349 21.0036H8.66512V15.3313H14.3349V21.0036ZM14.3349 14.3374H8.66512V8.66512H14.3349V14.3374ZM21.0036 21.0036H15.3313V15.3313H21.0036V21.0036Z" />
    </SvgIcon>
  );
}

export default BlocksIcon;
