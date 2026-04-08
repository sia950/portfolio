import React from 'react'
import { Container } from '../../../components/Container'
import { ProgressBar } from './progressBar/ProgressBar'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { font } from '../../../styles/Common'



export const Technologies: React.FC = () => {
  return (
    <PgSection>
      <Container>
        <h2>Technologies</h2>

        <div>
          <ProgressBar label="Html" value={80} />
          <ProgressBar label="Css, Sass" value={70} />
          <ProgressBar label="React" value={55} />
          <ProgressBar label="Styled components" value={70} />
        </div>

      </Container>
    </PgSection>
  )
}

const PgSection = styled.div`
    padding: 100px 0;
    background-color: ${theme.colors.secondaryBg};

    h2{
      ${font({ Fmax: 46, Fmin: 32, fontFamily: "'Playfair Display', sans-serif", fontWeight: 600 })};
      margin-bottom: 70px;
    }

    @media ${theme.media.mobile}{
      padding: 40px 0;
        h2{
          margin-bottom: 30px;
        }
    }
`