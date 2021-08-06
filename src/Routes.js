import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
import EditContact from "./Pages/EditContact/index";
import NewContact from "./Pages/NewContact";

export default function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/new" component={NewContact}/>
            <Route path="/edit/:id" component={EditContact}/>
        </Switch>
    )
}
