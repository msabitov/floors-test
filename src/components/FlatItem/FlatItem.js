import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

const ItemContainer = styled.div`
    background-color: white;
    border: 2px solid grey;
    border-radius: 10px;
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 576px){
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 2fr 2fr 2fr 1fr;
      grid-row-gap: 5px;
    }
`

const FlatInfo = styled.span`
    font-size: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 20px 0 0;
    background-color: brown;
    border-radius: 20px;
    color: white;
    height: 100%;
    
    @media screen and (max-width: 1020px){
      margin-right: 5px;
    }

    @media screen and (max-width: 576px){
      grid-column: ${props => props.col};
      grid-row: ${props => props.row};
    }
  
`
const LinkIcon = styled(Link)`
    margin-left: auto;
    margin-right: 10px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 576px){
      grid-column: ${props => props.col};
      grid-row: ${props => props.row};
    }
`

const Description = styled.span`
    font-size: 0.9rem;
    padding: 5px;
    margin: auto 5px;
  
    @media screen and (max-width: 890px){
      display: none;
    }
`
const Constant = styled.span`
    font-size: 1rem;
    padding: 5px;
    margin: auto 5px;
    @media screen and (max-width: 890px){
      font-size: 0.8rem;
    }
`

const FlatItem = ({item}) => {
    return (
        <ItemContainer>
            <FlatInfo
                col={"1 / span 1"}
                row={"1 / span 2"}
            >
                <Constant>№{item.id}</Constant>
            </FlatInfo>
            <FlatInfo
                col={"2 / span 1"}
                row={"1 / span 1"}
            >
                <Constant>Этаж: {item.floor}</Constant>
            </FlatInfo>
            <FlatInfo
                col={"3 / span 1"}
                row={"1 / span 1"}
            >
                <Description>Общая площадь: </Description>
                <Constant>{item.area_total} м2</Constant>
            </FlatInfo>
            <FlatInfo
                col={"2 / span 1"}
                row={"2 / span 1"}
            >
                <Description>Цена: </Description>
                <Constant>{item.price} р</Constant>
            </FlatInfo>
            <FlatInfo
                col={"3 / span 1"}
                row={"2 / span 1"}
            >
                <Constant>Комнат: {item.rooms}</Constant>
            </FlatInfo>
            <LinkIcon
                to={`/apartaments/${item.id}`}
                col={"4 / span 1"}
                row={"1 / span 2"}
            >
                <FaSearch color='brown'/>
            </LinkIcon>
        </ItemContainer>
    );
};

export default FlatItem;