import { styled, Box, useTheme, SxProps, alpha } from '@mui/material';
import { colors } from '@notional-finance/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonText } from '../typography/typography';

export interface SideDrawerButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  sx?: SxProps;
  to?: string;
}

// NOTE: The text for the button must be wrapped in a H4
export function SideDrawerButton({
  children,
  sx,
  onClick,
  to,
}: SideDrawerButtonProps) {
  const theme = useTheme();
  const btn = (
    <Button
      theme={theme}
      sx={{ cursor: onClick ? 'pointer' : 'normal', ...sx }}
      onClick={onClick}
    >
      {children}
    </Button>
  );

  return to ? <Link to={to}>{btn}</Link> : btn;
}

const Button = styled(Box)(
  ({ theme }) => `
  height: ${theme.spacing(10)};
  padding: ${theme.spacing(2.5)};
  margin-bottom: ${theme.spacing(2)};
  border-radius: ${theme.shape.borderRadiusLarge};
  background: ${theme.palette.info.light};
  display: flex;
  align-items: center;
  transition: all .3s ease;
  &:hover {
    background: ${alpha(colors.aqua, 0.5)};
  }
  `
);

export const ButtonData = styled(ButtonText)(
  ({ theme }) => `
    float: right;
    border: ${theme.shape.borderStandard};
    border-color: ${theme.palette.primary.light};
    background: ${theme.palette.background.paper};
    padding: ${theme.spacing(1, 2)};
    border-radius: ${theme.shape.borderRadius()};
    color: ${theme.palette.common.black};
    margin-bottom: 0px;
  `
);

export default SideDrawerButton;
