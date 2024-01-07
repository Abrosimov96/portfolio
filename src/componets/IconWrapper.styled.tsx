import styled from 'styled-components';

export const IconWrapper = styled.div`
  max-height: 50px;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.1);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;
