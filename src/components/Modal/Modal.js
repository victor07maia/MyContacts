import { Container, Overlay, Footer } from "./Styles";
import propTypes from 'prop-types'
import Button from "../Button/Button"
import reactDom from "react-dom";


export default function Modal({ danger }) {
    return reactDom.createPortal(
        <Overlay>
            <Container danger={danger}>
                <h1>Titulo do modal</h1>
                <p>texto do modal</p>
                <Footer>
                    <button type='button' className='cancel-button'>
                        Cancelar
                    </button>
                    <Button danger={danger}>
                        Deletar
                    </Button>
                </Footer>
            </Container>
        </Overlay>,
        document.getElementById('modal-root')
    )
};

Modal.propTypes = {
    danger: propTypes.bool,
};
Modal.defaultProps = {
    danger: false,
};
