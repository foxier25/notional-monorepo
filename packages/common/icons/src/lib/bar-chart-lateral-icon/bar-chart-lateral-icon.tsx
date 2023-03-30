import { SvgIcon, SvgIconProps } from '@mui/material';

/* eslint-disable-next-line */
export interface BarChartLateralIcon extends SvgIconProps {}

export function BarChartLateralIcon(props: BarChartLateralIcon) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 15.7364H3.78955V10.1042H0V15.7364ZM6.56856 15.7364H10.3581V5.05141H6.56856V15.7364ZM13.1371 15.7364H16.9267V0H13.1371V15.7364ZM24 19.5339L19.534 15.0679L19.5312 18.2632L0.000252228 18.2632L0.000252133 20.7896L19.5312 20.7896L19.534 24L24 19.5339Z"
        />
      </svg>
    </SvgIcon>
  );
}

export default BarChartLateralIcon;
