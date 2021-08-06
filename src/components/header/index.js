import Logo from "../../assets/images/logo.svg"
import { Container, InputSearchContainer } from "./styles"


export default function header() {
    return(
    <Container>
        <img src={Logo} alt='MyContacts' width='201px'></img>
    </Container>
    )
};
