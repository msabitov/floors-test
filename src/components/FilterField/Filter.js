import React from 'react';
import styled from 'styled-components'
import {GrFilter, GrPowerReset} from 'react-icons/gr'

const FilterWrapper = styled.div`
    grid-column: ${props => props.gridCol};
    grid-row: ${props => props.gridRow};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 20;
`

const Filter = ({onActive, onReset, gridCol, gridRow, ...props}) => {
    return (
        <FilterWrapper gridCol={gridCol} gridRow={gridRow}>
            <span onClick={e => onReset()} >Сбросить <GrPowerReset /></span>
            <span onClick={e => onActive(true)} >Фильтр <GrFilter /></span>
        </FilterWrapper>
    );
};

export default Filter;