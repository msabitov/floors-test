import styled from 'styled-components'
import SortField from '../SortField/SortField'
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";
import {GrFilter, GrPowerReset} from 'react-icons/gr'
import {useDispatch, useSelector} from 'react-redux'
import MyButton from '../MyButton/MyButton'

const ControlContainer = styled.form`
    grid-column: ${props => props.col};
    grid-row: ${props => props.row};
    grid-row-gap: 10px;
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    @media screen and (max-width: 890px){
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
`

const Container = styled.div`
    width: 15%;
    height: 100%;
    position: relative;
    margin: 0;
    padding: 10px;
    @media screen and (max-width: 890px){
      padding: 0 10%;
      width: 100%;
      grid-column: ${props => props.col};
      grid-row: ${props => props.row};
    }
`

const ControlField = ({gridCol, gridRow, ...props}) => {
    const dispatch = useDispatch()
    const dir = useSelector(state => state.sort.direction)
    const filterActive = useSelector(state => state.filter.active)

    const setTop = (event) => {
        event.preventDefault()
        dispatch({type: "SET_DIR", payload: 'top'})
    }
    const setBottom = (event) => {
        event.preventDefault()
        dispatch({type: "SET_DIR", payload: 'bottom'})
    }

    const showModal = (event) => {
        event.preventDefault()
        dispatch({type: 'SHOW_MODAL', payload: true})
    }
    const resetFilter = (event) => {
        event.preventDefault()
        dispatch({type: 'SHOW_SECTION', payload: false})
        dispatch({type: 'RESET'})
    }
    const sortValues = [
        {value: 'price', name: 'По цене'},
        {value: 'floor', name: 'По этажу'},
        {value: 'area_total', name: 'По общей площади'},
        {value: 'rooms', name: 'По количеству комнат'},
    ]
    return (
        <ControlContainer col={gridCol} row={gridRow}>
            <Container
                col={"1 / span 4"}
                row={"2 / span 2"}
            >
                <SortField
                    sortValues = {sortValues}
                />
            </Container>
            <Container
                col={"1 / span 1"}
                row={"1 / span 1"}
            >
                <MyButton
                    isActive={dir === "bottom"}
                    onClick={e => setBottom(e)}
                    value='bottom'
                    text={"По убыванию"}
                >
                    <BiArrowToBottom />
                </MyButton>
            </Container>
            <Container
                col={"2 / span 1"}
                row={"1 / span 1"}
            >
                <MyButton
                    isActive={dir === "top"}
                    onClick={e => setTop(e)}
                    value='top'
                    text={"По возрастанию"}
                    Mini={BiArrowToTop}
                >
                    <BiArrowToTop />
                </MyButton>
            </Container>
            <Container
                col={"3 / span 1"}
                row={"1 / span 1"}
            >
                <MyButton
                    isActive={!filterActive}
                    onClick={e => resetFilter(e)}
                    text={"Сбросить"}
                >
                    <GrPowerReset />
                </MyButton>
            </Container>
            <Container
                col={"4 / span 1"}
                row={"1 / span 1"}
            >
                <MyButton
                    value={true}
                    isActive={filterActive}
                    onClick={e => showModal(e)}
                    text={"Фильтр"}
                >
                    <GrFilter />
                </MyButton>
            </Container>
        </ControlContainer>
    );
};

export default ControlField;