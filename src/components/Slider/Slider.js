import styled from 'styled-components'

const SilderCont = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 3fr;
    grid-template-rows: repeat(3, 1fr);
`

const MyLabel = styled.label`
    display: inline;
    margin-right: auto;
`

const Container = styled.div`
    display: ${props => props.grid ? "grid" : "flex"};
    justify-content: flex-end;
    align-items: center;
    grid-row: ${props => props.row} / span 1;
    grid-column: ${props => props.col} / span 1;
    padding-right: 0;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: repeat(2, 1fr);
}
  
`
const Title = styled(Container)`
    display: flex;
    justify-content: flex-start;
    color: brown;
    font-weight: bold;
`

const Range = styled.input`
    color: brown;
    grid-row: ${props => props.row};
    grid-column: ${props => props.col};
`

const Slider = ({lim, val, reduce, step, typeRed, children, name, ...props}) => {
    const checkInt = (num) => {
        if(Number.isInteger(num)){
            return Number(num)
        } else {
            return Number(Number(num).toFixed(1))
        }
    }
    return (
        <SilderCont>
            <Title col={1} row={1}>
                {children}
            </Title>
            <Container col={1} row={2}>
                <MyLabel for={"min" + name}>Минимум:</MyLabel>
            </Container>
            <Container col={2} row={2}>
                <MyLabel>{val.min}</MyLabel>
            </Container>
            <Container
                col={3}
                row={2}
                grid={true}
            >
                {lim.min}
                <Range
                    onChange={e => reduce(typeRed, {min: checkInt(e.target.value)})}
                    type="range"
                    id={"min" + name}
                    value={val.min}
                    name={name}
                    min={lim.min}
                    max={lim.max}
                    step={step}
                    col={"1 / span 2"}
                    row={"2 / span 1"}
                />
                {val.max}
            </Container>
            <Container
                col={1}
                row={3}
            >
                <MyLabel for={"max" + name}>Максимум: </MyLabel>
            </Container>
            <Container
                col={2}
                row={3}
            >
                <MyLabel>{val.max}</MyLabel>
            </Container>
            <Container
                col={3}
                row={3}
                grid={true}
            >
                {val.min}
                <Range
                    onChange={e => reduce(typeRed, {max: checkInt(e.target.value)})}
                    type="range"
                    id={"max" + name}
                    value={val.max}
                    name={name}
                    min={val.min}
                    max={lim.max}
                    step={step}
                    col={"1 / span 2"}
                    row={"2 / span 1"}
                />
                {lim.max}
            </Container>
        </SilderCont>
    );
};

export default Slider;