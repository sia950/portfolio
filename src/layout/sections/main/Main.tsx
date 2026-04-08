import React from 'react'
import { Container } from '../../../components/Container'
import { Button } from '../../../components/button/Button'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'
import { S } from './Main_Styles'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll'

export const Main: React.FC = () => {
    return (
        <S.MainSection id="home">

            <S.BgWrapper>
                <S.SectionBgc />
                <S.BgPhoto />
            </S.BgWrapper>

            <Container>
                <S.Content>
                    <S.About>
                        <h2>Hello!</h2>
                        <h2>I’m Zarror Nibors</h2>

                        <h1>
                            <p>
                                I’am freelance <span>web developer</span> based in Indonesia
                                who loves to craft attractive design experiences for the web.
                            </p>

                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true, 
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("I'm freelance <span style='color:rgb(45, 45, 45)'>web developer</span> based in Indonesia")
                                        .pauseFor(200)
                                        .deleteAll()
                                        .typeString("who loves to craft attractive design experiences for the web.")
                                        .pauseFor(20)
                                        .start();
                                }}
                            />
                        </h1>
                    </S.About>

                    <FlexWrapper $gap='20px'>
                        <Button $padding="1em 1.2em" as={Link} to="footer" smooth={true}>
                            <Icon iconId={'envelope'} width='18' height='14' viewBox='0 0 18 14' />
                            Email me
                        </Button>

                        <Button $padding="1em 1.2em" $btnType='transparent' $textDecoration>
                            <Icon iconId={'download'} width='20' height='20' viewBox='0 0 20 20' />
                            Download CV
                        </Button>
                    </FlexWrapper>
                </S.Content>
            </Container>
        </S.MainSection>
    )
}
