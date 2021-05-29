import styled from 'styled-components';
import colors from '../../colors.json';

export const Navbar = styled.nav`
    background-color: ${colors.white};
    width: 100vw;
    height: 10vh;
    border-radius: 1rem 1rem 0 0;
    display: flex;
    bottom: 0;
    position: absolute;
    align-items: center;
    justify-content: space-evenly;
`;

export const DivIcon = styled.div`
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    svg{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    h3{
        font-size: 1rem;
    }
    a{
        text-decoration: none;
    }
`;