import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 80px;
    height: 60px;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
`;

const NavMenu = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    text-align: center;
    margin: 0 auto;
    padding: 0;
`

const NavItem = styled.li`
    height: 60px;
`

const NavLinkMy = styled(NavLink)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: brown;
    }
`

const Navbar = ({links}) => {
    return (
            <NavbarContainer>
                <NavMenu>
                    {links.map((item) => (
                        <NavItem key={item.text}>
                            <NavLinkMy to={item.link}>{item.text}</NavLinkMy>
                        </NavItem>
                    ))}
                </NavMenu>
            </NavbarContainer>
    )
}

export default Navbar;