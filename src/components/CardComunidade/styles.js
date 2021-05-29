import styled from 'styled-components';
import colors from '../../colors.json';

export const CardComunidade = styled.li`
    background-color:${colors.dark};
    color: ${colors.white};
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 2px solid ${colors.dark_gray};
    h3{
        font-size: 1.3rem;
        padding-right: 2rem;
    }
`;