import styled from 'styled-components';
import colors from '../../colors.json';

export const CorpoPagina = styled.div`
    height: 80vh;
    bottom: 0;
    display: flex;
    flex-direction: column;
    color: ${colors.white};
    overflow-y: scroll;
    a{
        text-decoration: none;
    }
`;