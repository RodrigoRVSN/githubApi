import styled from 'styled-components';
import colors from '../../colors.json';

export const BodyPage = styled.div`
    height: 80vh;
    bottom: 0;
    display: flex;
    flex-direction: column;
    color: ${colors.white};
    overflow-y: scroll;
    overflow-x: hidden;
    a{
        text-decoration: none;
    }
`;