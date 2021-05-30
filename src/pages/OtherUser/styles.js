import styled from 'styled-components';
import colors from '../../colors.json';

export const HeaderOutro = styled.header`
    background-color: ${colors.black};
    color: ${colors.white};
    height: 15vh;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    h4{
        font-size: 1.1rem;
        font-weight: 100;
        display: flex;
    }
    svg{
        font-size: 1.8rem;
    }
    h3{
        padding-left: 2.7rem;
    }
`;
