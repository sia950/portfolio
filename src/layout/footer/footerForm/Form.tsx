import React, { useRef } from 'react'
import { Icon } from '../../../components/icon/Icon'
import { S } from './Form_Styles'
import emailjs from '@emailjs/browser';
// Добавляем импорты:
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form: React.FC = () => {
    const form = useRef<HTMLFormElement>(null); // Теперь ошибок нет

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return

        emailjs
            .sendForm('service_8ehz00d', 'template_dm826us', form.current, {
                publicKey: 'NfxWlz8GN5F-duWeb',
            })
            .then(
                () => {
                    toast.success('Сообщение улетело! ✨'); 
                    form.current?.reset(); 
                },
                (error) => {
                    toast.error('Что-то пошло не так...'); 
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <S.Form ref={form} onSubmit={sendEmail}>
            <S.FieldWrapper>
                <label htmlFor="userName">Your name:</label>
                <S.Field required id='userName' type="text" name='user_name' />
            </S.FieldWrapper>
            <S.FieldWrapper>
                <label htmlFor="emailAddress">Your email  address:</label>
                <S.Field required id='emailAddress' type="email" name='user_email' />
            </S.FieldWrapper>
            <S.FieldWrapper>
                <label htmlFor="aboutProject">Tell about the project:</label>
                <S.Field required id='aboutProject' name='about_the_project' as={'textarea'} />
            </S.FieldWrapper>
            <button type='submit'>Send<Icon iconId={'arrow-right'} width="29" height="25" viewBox="0 0 29 25" />
            </button>
        </S.Form>
    )
}

