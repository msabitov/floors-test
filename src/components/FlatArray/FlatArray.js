import React, {useMemo, useState} from 'react';
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import FlatItem from '../FlatItem/FlatItem'


const ArrayContainer = styled.div`
    grid-column: ${props => props.col};
    grid-row: ${props => props.row};
    padding: 20px 0;
    display: block;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const PagesCont = styled.div`
    align-self: flex-end;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Page = styled.span`
    color: black;
    margin: 0 10px;
    cursor: pointer;
    width: 20px;
    border-bottom: ${props => props.isActive ? "5px solid brown" : "none"};
`

const FlatArray = ({gridCol, gridRow, ...props}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const dir = useSelector(state => state.sort.direction)
    const sortType = useSelector(state => state.sort.type)
    const price = useSelector(state => state.filter.price)
    const area = useSelector(state => state.filter.area)
    const floor = useSelector(state => state.filter.floor)
    const rooms = useSelector(state => state.filter.rooms)
    const list = useSelector(state => state.flat)

    const arrayFiltered = useMemo(() => {
        return list.filter((item) => {
            if((item.price >= price.min) &&
                (item.price <= price.max) &&
                (item.area_total >= area.min) &&
                (item.area_total <= area.max) &&
                (item.rooms >= rooms.min) &&
                (item.rooms <= rooms.max) &&
                (item.floor >= floor.min) &&
                (item.floor <= floor.max)){
                return true;
            }
        })
    }, [price, area, floor, rooms])

    const arraySorted = useMemo(() => {
        return arrayFiltered.sort((a, b) => {
            if(dir === 'top'){
                return a[sortType] - b[sortType]
            }
            return b[sortType] - a[sortType]
        })
    }, [dir, sortType, arrayFiltered])

    const pageOnScreen = useMemo(() => {
        if(document.documentElement.clientWidth < 576){
            return 5;
        } else {
            return 7;
        }
    },[document.documentElement.clientWidth])
    const pageArray = useMemo(() => {
        const total = Math.ceil(arraySorted.length / pageOnScreen)
        const arr = []
        for(let i = 0; i < total; i++){
            arr.push(i + 1)
        }
        setCurrentPage(1)
        return arr
    }, [arraySorted.length])

    return (
        <ArrayContainer col={gridCol} row={gridRow}>
            {
                arraySorted.length ?
                arraySorted.slice((currentPage-1)*pageOnScreen, currentPage*pageOnScreen).map((item) => (
                    <FlatItem key={item.id} item={item} />
                ))
                    : "Квартиры не найдены :("
            }
            <PagesCont>
                {
                    pageArray.map(item => (
                        <Page
                            isActive={currentPage === item}
                            onClick={e => setCurrentPage(item)}
                            key={item.id}
                        >
                            {item}
                        </Page>
                    ))
                }
            </PagesCont>
        </ArrayContainer>
    );
};

export default FlatArray;