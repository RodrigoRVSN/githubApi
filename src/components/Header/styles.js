import styled from 'styled-components';
import colors from '../../colors.json';

export const Header = styled.header`
    background-color: ${colors.black};
    color: ${colors.white};
    height: 10vh;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    padding: 2rem;
    h3{
        font-size: 1.3rem;
        padding: 5rem;
    }
    a{
        text-decoration: none;
        color: ${colors.white};
    }
`;