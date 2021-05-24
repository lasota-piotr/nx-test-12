import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedLibPublishableProps {}

const StyledSharedLibPublishable = styled.div`
  color: pink;
`;

export function SharedLibPublishable(props: SharedLibPublishableProps) {
  return (
    <StyledSharedLibPublishable>
      <h1>Welcome to shared-lib-publishable!</h1>
    </StyledSharedLibPublishable>
  );
}

export default SharedLibPublishable;
