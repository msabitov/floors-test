import React from 'react';
import {PageContainer} from './PageContainer'
import Map from '../components/Map/Map'
import MyButton from '../components/MyButton/MyButton'
import styled from 'styled-components'
import {useState} from 'react'

const Wrapper = styled.div`
    grid-row: ${props => props.row};
    grid-column: ${props => props.col};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5%;
`

const InteractivePage = () => {
    const [floor, setFloor] = useState(1)
    return (
        <PageContainer>
            <Wrapper
                row={"2 / span 1"}
                col={"2 / span 10"}
            >
                <MyButton
                    isActive={floor === 1}
                    onClick={e => setFloor(1)}
                    text={"1 этаж"}
                >
                    1
                </MyButton>
                <MyButton
                    isActive={floor === 2}
                    onClick={e => setFloor(2)}
                    text={"2 этаж"}
                >
                    2
                </MyButton>
                <MyButton
                    isActive={floor === 3}
                    onClick={e => setFloor(3)}
                    text={"3 этаж"}
                >
                    3
                </MyButton>
                <MyButton
                    isActive={floor === 4}
                    onClick={e => setFloor(4)}
                    text={"4 этаж"}
                >
                    4
                </MyButton>
            </Wrapper>
            <Map floor={floor} row={"3 / span 9"} col={"2 / span 10"}/>
        </PageContainer>
    );
};

export default InteractivePage;