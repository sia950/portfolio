import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { S } from './Slider_Styles';
import dog from '../../../../assets/images/dog.jpg'
import cat from '../../../../assets/images/cat.jpg'
import human from '../../../../assets/images/photo-1.png'
import { Icon } from '../../../../components/icon/Icon';
import '../../../../styles/Slider.css'

type SlidePropsType = {
    userPhoto: string,
    userText: string
}

const Slide = (props:SlidePropsType) => {
    return (
        <S.FeedbackWrapper>
            <S.ClientPhoto src={props.userPhoto} alt="client photo" />
            <S.Note>
                {props.userText}
            </S.Note>
        </S.FeedbackWrapper>
    )
}

export const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        <Slide userPhoto={cat} userText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent '}/>,
        <Slide userPhoto={dog} userText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent '}/>,
        <Slide userPhoto={human} userText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent '}/>,
    ];

    return (
        <S.SliderWrapper>
            <AliceCarousel
                mouseTracking
                items={items}
                activeIndex={activeIndex}
                onSlideChanged={(e) => setActiveIndex(e.item)} // e.item — индекс текущего слайда
                renderPrevButton={() => (
                    <S.ArrowButton style={{ opacity: activeIndex === 0 ? 0.3 : 1 }}>
                        <Icon iconId="arrow-left" width="29" height="26" viewBox="0 0 29 26" />
                    </S.ArrowButton>
                )}
                renderNextButton={() => (
                    <S.ArrowButton
                        style={{
                            opacity: activeIndex === items.length - 1 ? 0.3 : 1,
                        }}
                    >
                        <Icon iconId="arrow-right" width="29" height="26" viewBox="0 0 29 26" />
                    </S.ArrowButton>
                )}
            />
        </S.SliderWrapper>
    );
};

// import React from 'react'
// import dog from '../../../../assets/images/dog.jpg'
// import { Icon } from '../../../../components/icon/Icon'
// import { S } from './Slider_Styles'

// export const Slider:React.FC = () => {
//     return (
//         <S.SliderWrapper>
//             <S.FeedbackWrapper>
//                 <S.ClientPhoto src={dog} alt="client photo" />

//                 <S.Note>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
//                     molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
//                     accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
//                     Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti
//                     sociosqu ad litora torquent
//                 </S.Note>
//             </S.FeedbackWrapper>

//             <S.ArrowWrapper>
//                 <S.ArrowButton className="noMoreNotes">
//                     <Icon iconId={'arrow-left'} width="29" height="26" viewBox="0 0 29 26" />
//                 </S.ArrowButton>

//                 <S.ArrowButton>
//                     <Icon iconId={'arrow-right'} width="29" height="26" viewBox="0 0 29 26" />
//                 </S.ArrowButton>
//             </S.ArrowWrapper>
//         </S.SliderWrapper>
//     )
// }
