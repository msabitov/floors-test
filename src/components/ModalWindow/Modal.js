import React from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import Slider from '../Slider/Slider'
import MyButton from '../MyButton/MyButton'
import {FaPlusCircle, FaCheckCircle, FaMinusCircle} from 'react-icons/fa'

const Background = styled.div`
    display: ${props => props.visible ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
`

const ModaWrapper = styled.div`
    width: 80%;
    height: auto;
    background-color: white;
    border-radius: 30px;
    padding: 10px;
    z-index: 101;
`

const ButtonsWrapper = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Modal = (props) => {
    const dispatch = useDispatch()
    const visibleModal = useSelector(state => state.filter.visible)
    const visibleSection = useSelector(state => state.filter.section)
    const price = useSelector(state => state.filter.price)
    const priceLim = useSelector(state => state.filter.priceLim)
    const area = useSelector(state => state.filter.area)
    const areaLim = useSelector(state => state.filter.areaLim)
    const floor = useSelector(state => state.filter.floor)
    const floorLim = useSelector(state => state.filter.floorLim)
    const rooms = useSelector(state => state.filter.rooms)
    const roomsLim = useSelector(state => state.filter.roomsLim)

    const setValue = (type, value) => {
        dispatch({type: type, payload: value})
    }

    const applyFilter = (event) => {
        event.preventDefault()
        dispatch({type: "APPLY"})
    }

    const showModal = (value) => {
        dispatch({type: 'RESET'})
        dispatch({type: 'SHOW_MODAL', payload: false})
    }
    return (
        <Background
            visible={visibleModal}
            onClick={e => showModal(false)}
        >
            <ModaWrapper
                onClick={(e) => e.stopPropagation()}
            >
                <Slider
                    lim={priceLim}
                    val={price}
                    step={100}
                    typeRed={'SET_PRICE'}
                    name={'price'}
                    reduce={setValue}
                >
                    Цена:
                </Slider>
                <Slider
                    lim={areaLim}
                    val={area}
                    step={0.1}
                    typeRed={'SET_AREA'}
                    name={'area'}
                    reduce={setValue}
                >
                    Площадь:
                </Slider>
                {
                    visibleSection &&
                    <>
                        <Slider
                            lim={floorLim}
                            val={floor}
                            step={1}
                            typeRed={'SET_FLOOR'}
                            name={'floor'}
                            reduce={setValue}
                        >
                            Этаж:
                        </Slider>
                        <Slider
                            lim={roomsLim}
                            val={rooms}
                            step={1}
                            typeRed={'SET_ROOMS'}
                            name={'rooms'}
                            reduce={setValue}
                        >
                            Комнаты:
                        </Slider>
                    </>
                }
                <ButtonsWrapper>
                    <MyButton
                        value={true}
                        isActive={true}
                        onClick={e => applyFilter(e)}
                        text={"Применить"}
                    >
                        <FaCheckCircle />
                    </MyButton>
                    <MyButton
                        isActive={false}
                        onClick={e => setValue("SHOW_SECTION", !visibleSection)}
                        text={visibleSection? "Меньше опций" : "Больше опций"}
                    >
                        {
                            visibleSection? <FaMinusCircle /> : <FaPlusCircle />
                        }
                    </MyButton>
                </ButtonsWrapper>
            </ModaWrapper>
        </Background>
    );
};

export default Modal;