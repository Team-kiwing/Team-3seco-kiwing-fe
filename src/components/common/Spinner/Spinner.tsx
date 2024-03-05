import SyncLoader from 'react-spinners/SyncLoader';
import { useTheme } from 'styled-components';

import { SpinnerWrapper } from './Spinner.style';

const Spinner = () => {
  const theme = useTheme();

  return (
    <SpinnerWrapper>
      <SyncLoader color={theme.symbol_secondary_color} />
    </SpinnerWrapper>
  );
};

export default Spinner;
