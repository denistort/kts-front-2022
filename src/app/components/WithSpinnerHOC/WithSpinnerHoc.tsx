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

export function WithSpinner<P>(WrappedComponent: ComponentType<P>) {
  return ({ isLoading, ...otherProps }: P & WithSpinnerProps) => {
    return isLoading ? (
      <Spinner />
    ) : (
      <WrappedComponent {...(otherProps as P & WithSpinnerProps)} />
    );
  };
}
