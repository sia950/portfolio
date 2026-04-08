import React from "react";
import styled from "styled-components";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";

type TimelineItem = {
    year: string;
    text: string;
};

const data: TimelineItem[] = [
    { year: "2017", text: "Lorem ipsum dolor sit amet..." },
    { year: "2019", text: "Lorem dolor sit amet..." },
    { year: "2021", text: "Lorem ipsum dolor met..." },
    { year: "2023", text: "Lorem ipsum amet..." },
];

export const Experience: React.FC = () => {
    return (
        <ExperienceSection>
            <Container>
                <Title>Experience</Title>
                <TimelineWrapper>
                    <Line />
                    <Items>
                        {data.map((item) => (
                            <Item key={item.year}>
                                {/* <Dot /> */}
                                <Year>{item.year}</Year>
                                <Text>{item.text}</Text>
                            </Item>
                        ))}
                    </Items>
                </TimelineWrapper>
            </Container>
        </ExperienceSection>

    );
};

const ExperienceSection = styled.section`
    position: relative;
    z-index: 1;
    padding: 100px 0;
    background-color: ${theme.colors.primaryBg};
    
    @media ${theme.media.mobile}{
    padding: 40px 0;
    }
`

const Title = styled.h2`
    ${font({ Fmax: 46, Fmin: 32, fontFamily: "'Playfair Display', sans-serif", fontWeight: 600 })};
    margin-bottom: 70px;
    
    @media ${theme.media.mobile}{
    margin-bottom: 30px;
    }

    @media ${theme.media.tablet}{
        margin-bottom: 50px;
    }
`

const TimelineWrapper = styled.div`
  position: relative;
  padding: 40px 20px;

    @media ${theme.media.mobile}{
        min-height: 300px;
        padding: 20px 20px 40px;
    }
`

const Line = styled.div`
  border-radius: 12px;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, ${theme.colors.primaryBg}, ${theme.colors.accent}, ${theme.colors.font});

  @media ${theme.media.mobile}{
    bottom: 40px;
    top: 0;
    left: 9.5px;
    right: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(180deg, ${theme.colors.primaryBg}, ${theme.colors.accent}, ${theme.colors.font});
  }
`

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

    @media ${theme.media.mobile}{
        flex-direction: column;
    }
`

const Item = styled.div`
  text-align: center;
  width: 200px;
  position: relative;
  margin: 0 10px;

   &::before {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        background: #000000;
        border-radius: 50%;
        
        /* Центрирование точки */
        margin: 0 auto;
        
        /* Позиционирование относительно линии */
        position: relative;
        top: -6px; /* Половина высоты точки + смещение, чтобы она была на линии */
        z-index: 2;

        @media ${theme.media.mobile}{
            position: absolute;
            top: 21px;
            left: -26px;
        }
    }

    @media ${theme.media.mobile}{
        text-align: start;
        width: 100%;
    }

`

// const Dot = styled.div`
//   width: 16px;
//   height: 16px;
//   background: #000000;
//   border-radius: 50%;
//   margin: 0 auto;
//   position: relative;
//   top: -8px;
//   z-index: 2;
// `

const Year = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 24px;
    font-family: 'Playfair Display', sans-serif;
    font-weight: 500;

`

const Text = styled.p`
    font-size: 20px;
`