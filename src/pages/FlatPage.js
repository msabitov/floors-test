import {PageContainer} from './PageContainer'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Sceme = styled.div`
    background-image: url(${props => props.src});
    grid-column: 2 /span 5;
    grid-row: 2 / span 9;
    background-size: contain;
    background-repeat: no-repeat;
    @media screen and (max-width: 890px){
      grid-column: 2 /span 10;
      grid-row: 1 / span 6;
    }
`
const Title = styled.h2`
    color: black;
    background-color: white;
    border-radius: 30px;
    padding: 10px;
    width: 100%;
    border: 3px solid brown;
    z-index: 10;
`

const Info = styled.div`
    color: white;
    background-color: brown;
    grid-column: 7 /span 5;
    grid-row: 2 / span 9;
    border-radius: 30px;
    position: relative;

    @media screen and (max-width: 890px){
      grid-column: 2 /span 10;
      grid-row: 7 / span 6;
      margin-bottom: 20px;
    }
`
const List = styled.ul`
    color: white;
    list-style-type: none;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    width: 100%;
`
const ListItem = styled.li`
    margin: 10px 5%;
    padding: 0 30px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    &:hover {
      background-color: white;
      color: brown;
      border-radius: 20px;
    }
`

const Sup = styled.sup`
    font-size: 1rem;
`

const FlatPage = () => {
    const { id } = useParams();
    const flats = useSelector(state => state.flat)
    const oneFlat = flats.find((item) => item.id === Number(id))
    return (
        <PageContainer>
            <Sceme src={oneFlat["layout_image"]} />
            <Info>
                <Title>Квартира №{oneFlat.id}</Title>
                <List>
                    <ListItem>
                        <span>Этаж:</span>
                        <span>{oneFlat.floor}</span>
                    </ListItem>
                    <ListItem>
                        <span>Номер на этаже:</span>
                        <span>{oneFlat.pos_on_floor}</span>
                    </ListItem>
                    <ListItem>
                        <span>Цена:</span>
                        <span>{oneFlat.price} &#8381;</span>
                    </ListItem>
                    <ListItem>
                        <span>Количество комнат:</span>
                        <span>{oneFlat.rooms}</span>
                    </ListItem>
                    <ListItem>
                        <span>Общая площадь:</span>
                        <span>{oneFlat.area_total} м<Sup>2</Sup></span>
                    </ListItem>
                    <ListItem>
                        <span>Площадь кухни:</span>
                        <span>{oneFlat.area_kitchen} м<Sup>2</Sup></span>
                    </ListItem>
                    <ListItem>
                        <span>Жилая площадь:</span>
                        <span>{oneFlat.area_live} м<Sup>2</Sup></span>
                    </ListItem>
                </List>
            </Info>
        </PageContainer>
    );
};

export default FlatPage;