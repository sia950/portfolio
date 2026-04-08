import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { Fade } from "react-awesome-reveal";

type ProgressBarPropsType = {
  label: string,
  value: number
}

export const ProgressBar: React.FC<ProgressBarPropsType> = (props: ProgressBarPropsType) => {
  return (
    <Progress>
      <ProgressLabel>{props.label}</ProgressLabel>
      <ProgressTrack>
        <Fade
          triggerOnce
          fraction={0.5}
          direction="left" 
          style={{ width: "100%", height: "100%" }} 
        >
          <ProgressFill
            style={{ width: `${props.value}%` }}
          />
        </Fade>
      </ProgressTrack>
    </Progress>
  );
};

const Progress = styled.div`
  margin-bottom: 20px;
`
const ProgressLabel = styled.div`
    color: ${theme.colors.font};
    margin-bottom: 8px;
    font-size: 24px;
    font-family: 'Playfair Display', sans-serif;
    font-weight: 500;
    
`
const ProgressTrack = styled.div`
    width: 100%;
    height: 10px;
    background: ${theme.colors.accentSecondary}; 
    border-radius: 10px;
    overflow: hidden;

`
const ProgressFill = styled.div`
    height: 100%;
    background: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.font});
    border-radius: 10px;
    transition: width 0.4s ease;
`
