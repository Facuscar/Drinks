import { Modal, Image } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

const DrinkModal = () => {
    const { showModal, handleModalClick } = useDrinks();
    return (
        <Modal show={showModal} onHide={handleModalClick}>
            <Modal.Body>
                Modal body
            </Modal.Body>
        </Modal>
    );
}

export default DrinkModal;