import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'

const MySelect = styled.select`
    padding: 10px;
    margin: 20px 0;
    background-color: white;
    width: 100%;
    height: 80px;
    border: 3px solid black;
    border-radius: 20px;
    box-shadow: 3px 3px 6px grey;
    font-size: 0.75rem;
    z-index: 10;
    @media screen and (max-width: 890px){
      padding: 10px;
      margin: 20px 0;
      height: 40px;
    }
`

const MyOption = styled.option`
    font-size: 0.75rem;
    &:hover {
        background-color: brown;
        color: white;
    }
`

const SortField = ({sortValues, ...props}) => {
    const dispatch = useDispatch()
    const sortType = useSelector(state => state.sort.type)
    const sortItems = (value) => {
        dispatch({type: "SET_SORT", payload: value})
        //dispatch({type: "SORT", payload: [sortType, sortDir]})
    }
    return (
        <MySelect
            value={sortType}
            onChange={e => sortItems(e.target.value)}
            size={1}
        >
            <MyOption value='' disabled>Сортировка по ...</MyOption>
            {
                sortValues.map((item) => (
                    <MyOption key={item.value} value={item.value}>{item.name}</MyOption>
                ))
            }
        </MySelect>
    );
};

export default SortField;