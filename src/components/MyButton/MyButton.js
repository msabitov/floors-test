import styled from 'styled-components'

const ButtonWrapper = styled.button`
    padding: 10px;
    margin: 20px 0;
    background-color: ${props => props.isActive ? "brown" : "white"};
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 3px solid black;
    border-radius: 20px;
    box-shadow: 3px 3px 6px grey;
    z-index: 10;
  
    @media screen and (max-width: 890px){
      margin: 0;
      height: 100%;
    }
`
const Description = styled.div`
    font-size: 0.75rem;
    padding: 5px;
  
    @media screen and (max-width: 890px){
      display: none;
    }
`

const Icon = styled.div`
    font-size: 0.75rem;
    padding: 5px;
    @media screen and (min-width: 890px){
      display: none;
    }
`

const MyButton = ({children, text, ...props}) => {
    return (
        <ButtonWrapper {...props}>
            <Description>
                {text}
            </Description>
            <Icon>
                {children}
            </Icon>
        </ButtonWrapper>
    );
};

export default MyButton;