import { ComponentType } from 'react';

import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles';

interface WithSpinnerProps {
  isLoading: boolean;
}
const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};
export const WithSpinner =
  <P extends WithSpinnerProps>(WrappedComponent: ComponentType<P>) =>
  ({ isLoading, ...otherProps }: P & WithSpinnerProps) => {
    return isLoading ? (
      <Spinner />
    ) : (
      <WrappedComponent {...(otherProps as P)} />
    );
  };
