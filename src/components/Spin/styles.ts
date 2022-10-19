import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 2px solid #ccc;
  width: 2rem;
  height: 2rem;
  border-top: 2px solid green;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
