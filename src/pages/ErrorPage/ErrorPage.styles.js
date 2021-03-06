import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import { colors } from '../../styles/colors'

export const ErrorStyled = styled.div`
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  display: flex;

  img {
    width: 100%;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    color: ${colors.secondary};
    font-weight: 600;
    font-size: 30px;
    text-align: center;
  }

  ${breakpoint.sm`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
    width: 100%;
  }

  h1 {
    font-size: 40px;
  }

    
  `}
`
