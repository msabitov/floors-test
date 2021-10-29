import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { ReactComponent as Logo } from '../../img/svg/result.svg'

const MapSvg = styled(Logo)`
    width: 100%;
    & g {
      fill: white;
      
      &:hover {
        fill: brown;
      }
    }
`

const Wrapper = styled.div`
    grid-row: ${props => props.row};
    grid-column: ${props => props.col};
`

const Map = ({row, col, floor}) => {
    const history = useHistory()
    const select = (event) => {
        const num = event.target.getAttribute('group')
        if(num){
            const id = 100 + num*floor
            history.push('/apartaments/' + id)
        }
    }
    return (
        <Wrapper row={row} col={col}>
            <MapSvg height={"100%"} onClick={e => select(e)} />
        </Wrapper>
    );
};

export default Map;