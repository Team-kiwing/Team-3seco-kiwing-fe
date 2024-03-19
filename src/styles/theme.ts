export const lightTheme: object = {
  theme_mode: 'light',
  background_color: '#F8F8F8',
  container_color: '#D9D9D9',
  symbol_color: '#48DA79',
  symbol_secondary_color: '#009c4d',

  primary_color: '#0F1118',
  secondary_color: '#e6e6e9',

  hotBadge_background_color: ' #f7cece',
  hotBadge_color: '#f84c4c',
  subscribed_background_color: '#ffd73e',
  subscribed_color: '#954200',
  basic_badge_background_color: '#CBCBCB',
  basic_badge_text_color: '#fefefe',

  gray_600: '#565656',
  gray_500: '#5E5E5E',
  gray_400: '#909090',
  gray_300: '#979797',
  gray_200: '#CBCBCB',
  gray_100: '#D9D9D9',

  // 확장, 추가 시 PR에 명시
  error_red: '#F82B2B',
  border_color: '#D9D9D9',

  primary_white_text_color: '#e6e6e9',
  primary_dark_text_color: '#0F1118',
};

export const darkTheme: object = {
  theme_mode: 'dark',
  background_color: '#2C2C2C',
  container_color: '#909090',
  symbol_color: '#48DA79',
  symbol_secondary_color: '#009c4d',

  primary_color: '#e6e6e9',
  secondary_color: '#0F1118',

  hotBadge_background_color: ' #f7cece',
  hotBadge_color: '#f84c4c',
  subscribed_background_color: '#ffd73e',
  subscribed_color: '#954200',
  basic_badge_background_color: '#565656',
  basic_badge_text_color: '#e6e6e9',

  // 사용성 조사 필요, PR시에 명시해주기 혹은 사전에 논의해주기
  gray_600: '#565656',
  gray_500: '#5E5E5E',
  gray_400: '#909090',
  gray_300: '#979797',
  gray_200: '#CBCBCB',
  gray_100: '#D9D9D9',

  // 확장, 추가 시 PR에 명시
  error_red: '#F84A4A',
  border_color: '#5E5E5E',

  primary_white_text_color: '#e6e6e9',
  primary_dark_text_color: '#0F1118',
};

const Theme = {
  lightTheme,
  darkTheme,
};

export default Theme;
