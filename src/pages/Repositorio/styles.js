import styled from 'styled-components';
import colors from '../../colors.json';

export const Card = styled.li`
    padding: 2rem;
    background-color:${colors.dark};
    height: 100%rem;
    flex-direction: column;
    align-items: left;
    color: ${colors.white};
    border-bottom: 2px solid ${colors.dark_gray};
    h3{
        font-size: 1.3rem;
    }
    h4{
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
        display: flex;
        gap: 0.5rem;
        color: ${colors.gray};
    }
`;

export const IconsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    h5{
        align-items: center;
        font-size: 1.1rem;
        display: flex;
        gap: 1rem;
    }
`;

