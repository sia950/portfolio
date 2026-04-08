import { theme } from "./Theme"

type FontPropsType = {
    fontFamily?: string
    fontWeight?: number
    color?: string
    lineHeight?: number
    Fmax?: number
    Fmin?: number
}

export const font = ({fontFamily, fontWeight, color, lineHeight, Fmax, Fmin}: FontPropsType) => `
    font-family: ${fontFamily || "Poppins"};
    font-weight: ${fontWeight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    // font-size: calc((100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px)
    
    font-size: clamp(${Fmin}px, calc((100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
    
    // font-size:
    //     clamp(
    //         ${Fmin}px,                                        /* МИН: нижний порог */
    //         calc((100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px), /* ПРЕДПОЧТИТЕЛЬНОЕ: динамика */
    //         ${Fmax}px                                         /* МАКС: верхний порог */
    //     );

`
