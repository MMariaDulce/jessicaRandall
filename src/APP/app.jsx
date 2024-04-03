import Profile from '../Profile/profile';
import './app.css';
import Button from'../Button/button';
import jessicaImage from '../../assets/images/avatar-jessica.jpeg';

const App = () => {
    return(
        <main className="container_main">
            <div className='container_card'>
                <Profile
                image={jessicaImage}
                name="Jessica Randall"
                location="London, united kingdom"
                role="Web Developer"
                />
                <Button source={"https://www.github.com"} text="GitHub" />
                <Button text="LinkedIn" />
            </div>
        </main>
    )
}

export default App;