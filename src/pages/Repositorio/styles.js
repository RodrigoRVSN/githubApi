import styled from 'styled-components';
import colors from '../../colors.json';

export const Header = styled.header`
    background-color: ${colors.black};
    height: 5vh;
    top: 0;
`;

export const CorpoRepositorios = styled.div`
    height: 85vh;
    bottom: 0;
    display: flex;
    flex-direction: column;
    color: ${colors.white};
    overflow-y: scroll;
`;

export const Card = styled.li`
    padding: 2rem;
    background-color:${colors.dark};;
    height: 100%rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${colors.white};
    border-bottom: 2px solid ${colors.dark_gray};
`;

