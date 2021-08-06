import { Container, InputSearchContainer, Header, ListContainer, Card } from "./styles"
import Arrow from '../../assets/images/icons/setinha.svg'
import Trash from '../../assets/images/icons/lixo.svg'
import Edit from '../../assets/images/icons/editar.svg'
import { Link } from "react-router-dom"
import Modal from "../../components/Modal/Modal"
import Loader from "../../components/Loader"

export default function Home() {
    return(
        <Container>

        <InputSearchContainer>
         <input type="text" placeholder='Pesquisar Contato'/>
         </InputSearchContainer>

         <Header>
             <strong>3 Contatos</strong>
             <Link to="/new">Novo Contato</Link>
         </Header>

         <ListContainer>
             <header>
                 <button type="buttons" className='sort-button'>
                 <span>Nome</span>
                 <img src={Arrow} alt="setinha" />
                 </button>
             </header>

            <Card>
                 <div className='info'>
                   <div className='contact-name'>
                     <strong>Victor Maia</strong>
                     <small>instagram</small>
                 </div>
                 <span>victor07maia@gmail.com</span>
                 <span>(00) 90000-0000</span>
                 </div>
                 <div className='actions'>
                     <Link to='/edit/1'>
                         <img src={Edit} alt='Editar'/>
                     </Link>
                     <button>
                     <img src={Trash} alt='delete'/>
                     </button>
                 </div>
             </Card>

         </ListContainer>
         </Container>)

};

