import { styled, Box, useTheme, SxProps } from '@mui/material';
import { useEffect } from 'react';
import { FormattedMessage, MessageDescriptor } from 'react-intl';
import { useLocation } from 'react-router-dom';
import { colors } from '@notional-finance/styles';
import { HeadingSubtitle, H1, ExternalLink } from '@notional-finance/mui';
import { CardSubNav } from './card-sub-nav/card-sub-nav';
import { CardTable } from './card-table/card-table';
import { CardMobileNav } from './card-mobile-nav/card-mobile-nav';

export interface CardContainerProps {
  heading: MessageDescriptor;
  subtitle: MessageDescriptor;
  linkText: MessageDescriptor;
  docsLink: string;
  children?: React.ReactNode;
  sx?: SxProps;
}

export function CardContainer({
  heading,
  subtitle,
  linkText,
  docsLink,
  children,
  sx,
}: CardContainerProps) {
  const theme = useTheme();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainContainer sx={{ ...sx }}>
      <Background>
        <StyledTopContent>
          <ContentContainer>
            <Box
              sx={{
                marginBottom: {
                  xs: theme.spacing(8),
                  sm: theme.spacing(8),
                  md: theme.spacing(8),
                  lg: '0px',
                  xl: '0px',
                },
              }}
            >
              {/* NOTE: this conditional is temporary until variable borrowing is introduced */}
              {!pathname.includes('borrow') && <CardSubNav />}
              <Title gutter="default">
                <FormattedMessage {...heading} />
              </Title>
              <Box
                sx={{
                  width: {
                    xs: 'auto',
                    sm: 'auto',
                    md: theme.spacing(62),
                    lg: theme.spacing(62),
                  },
                }}
              >
                <HeadingSubtitle
                  fontWeight="regular"
                  maxWidth={theme.spacing(96)}
                  style={{ color: colors.white }}
                >
                  <FormattedMessage {...subtitle} />
                </HeadingSubtitle>
                <ExternalLink
                  href={docsLink}
                  textDecoration
                  style={{ color: theme.palette.info.accent }}
                >
                  <FormattedMessage {...linkText} />
                </ExternalLink>
              </Box>
            </Box>
            <CardTable />
          </ContentContainer>
        </StyledTopContent>
      </Background>
      <StyledCardList>{children}</StyledCardList>
      <CardMobileNav />
    </MainContainer>
  );
}

const MainContainer = styled(Box)(
  ({ theme }) => `
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: ${theme.spacing(25)};
  width: 100%;
`
);

const Title = styled(H1)(
  ({ theme }) => `
  color: ${colors.white};
  ${theme.breakpoints.down('sm')} {
    font-size: 36px;
  }
`
);

const Background = styled(Box)(
  ({ theme }) => `
  background: linear-gradient(90deg, #053542 28.68%, #06657E 126.35%);
  height: ${theme.spacing(69)};
  display: flex;
  align-items: center;
  minWidth: 100%;
  ${theme.breakpoints.down('md')} {
    height: ${theme.spacing(94)};
  }
`
);

const ContentContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
  ${theme.breakpoints.down('md')} {
    flex-direction: column;
    align-items: center;
    margin-bottom: ${theme.spacing(10)};
  }
`
);

const StyledTopContent = styled(Box)(
  ({ theme }) => `
  width: 100%;
  max-width: 1335px;
  min-height: ${theme.spacing(33)};
  display: flex;
  flex-direction: column;
  margin: auto;
  ${theme.breakpoints.down('lg')} {
    margin-left: ${theme.spacing(6)};
    margin-right: ${theme.spacing(6)};
  }
  ${theme.breakpoints.down('sm')} {
    margin-left: ${theme.spacing(2)};
    margin-right: ${theme.spacing(2)};
  }
`
);

const StyledCardList = styled('ul')(
  ({ theme }) => `
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: visible;
  margin-top: -${theme.spacing(24.5)};
  margin-bottom: ${theme.spacing(22)};
  width: 100%;
  grid-gap: ${theme.spacing(5)};
`
);
