import styled, { css } from 'styled-components'

interface ButtonProps {
  width?: string
  classType: 'primary' | 'success' | 'info' | 'alert' | 'danger' | 'disable'
}

const bgColorButton = {
  primary: '#004e9a',
  success: '#5eb924',
  info: '#428cd4',
  alert: '#fa9806',
  danger: '#ad1212',
  disable: '#dddddd'
}

const bgColorButtonHover = {
  primary: '#0B5394',
  success: '#5eb924',
  info: '#5497d8',
  alert: '#ffb006',
  danger: '#b52929',
  disable: '#cccccc'
}

export const ButtonDefault = styled.button<ButtonProps>`
  min-width: 13.12rem;
  width: ${(props) => props.width};
  padding: 2rem 6rem;
  cursor: pointer;

  ${({ classType }) =>
    classType === 'disable'
      ? css`
          :disabled {
            background: ${bgColorButton[classType]};
            opacity: 0.5;
            cursor: not-allowed;
            border: 1px dashed white;
          }
        `
      : ''}

  background: ${({ classType }) => bgColorButton[classType]};
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;

  transition: 0.2s ease background;

  :hover {
    background: ${({ classType }) => bgColorButtonHover[classType]};
  }
`
