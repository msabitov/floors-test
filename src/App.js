import {Route, Switch, Redirect, useLocation} from "react-router-dom";
import Apartments from "./pages/Apartments";
import InteractivePage from "./pages/InteractivePage";
import FlatPage from './pages/FlatPage'
import './css/styles.css'
import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
    const links = [
        {text: 'Квартиры', link: '/apartaments'},
        {text: 'Карта', link: '/interact'}
    ]
    const location = useLocation()
    return (
        <div className="App">
            <Navbar links={links} onMenu={true}/>
            <Switch location={location} key={location.key}>
                <Route exact path='/apartaments'>
                    <Apartments />
                </Route>
                <Route exact path='/apartaments/:id'>
                    <FlatPage />
                </Route>
                <Route exact path='/interact'>
                    <InteractivePage />
                </Route>
                <Redirect exact from="/" to="/apartaments"/>
            </Switch>
        </div>
    );
}

export default App;
