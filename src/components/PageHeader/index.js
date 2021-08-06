import { Link } from "react-router-dom";
import { Container } from "./Styles";
import propTypes from "prop-types"
import Arrow from '../../assets/images/icons/setinha.svg'

export default function PageHeader({ title }){
    return(<Container>
        <Link to="/">
            <img src={Arrow} alt='Voltar'/>
            <span>Voltar</span>
        </Link>
        <h1>{title}</h1>
    </Container>)
};
PageHeader.propTypes = {
    title: propTypes.string.isRequired,
}
