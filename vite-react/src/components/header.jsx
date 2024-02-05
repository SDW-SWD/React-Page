
import Img from '../../public/assets/react-icon-small.png'
import './header.css'
function Header(params) {
    return(
            <nav>
                <img src={Img} alt='Logo of React'></img>
                <h1>ReactFacts</h1>
                <h2>React Course - Project 1</h2>
            </nav>
    )
}
export default Header