import React from 'react'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Form } from './footerForm/Form'
import { Container } from '../../components/Container'
import { SocialsList } from './footerSocialsList/SocialsList'
import { S } from './Footer_Styles'

export const Footer:React.FC = () => {
    return (
        <S.Footer id="footer">
            <Container>
                <S.ContentWrapper>
                    <FlexWrapper $direction='column' $gap='30px'>
                        <S.Heading>Let’s<br /> Connect</S.Heading>
                        <SocialsList />
                    </FlexWrapper>
                    <Form />
                </S.ContentWrapper>
            </Container>
            <S.Copyright>Created by <span>Zarror</span> | All Reserved!</S.Copyright>
        </S.Footer>
    )
}
