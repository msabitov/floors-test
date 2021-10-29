import {PageContainer} from './PageContainer'
import ControlField from "../components/ControlField/ControlField";
import FlatArray from "../components/FlatArray/FlatArray"
import Modal from '../components/ModalWindow/Modal'

const Apartments = () => {
    return (
        <PageContainer>
            <Modal />
            <ControlField
                gridCol={"2 / span 10"}
                gridRow={"1 / span 3"}
            />
            <FlatArray
                gridCol={"2 / span 10"}
                gridRow={"4 / span 9"}
            />
        </PageContainer>
    )
};

export default Apartments;