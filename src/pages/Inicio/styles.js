import styled from 'styled-components';
import colors from '../../colors.json';

export const Body = styled.div`
    background-color: ${colors.light_black};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
`;

export const Input = styled.input`
    margin-top: 1rem;
    border-radius: 0.6rem;
    background-color: ${colors.white};
    width: 80%;
    height: 3rem;
    padding: 1rem;
    position: relative;
`;

export const Button = styled.button`
    border-radius: 0.6rem;
    background-color: ${colors.yellow};
    font-size: 1.2rem;
    font-weight: 800;
    width: 80%;
    height: 3rem;
`; 

export const Obrigatorio  = styled.p`
    position: absolute;
    color: red;
    margin-top: 4rem;
    right: 15vw;
    font-size: 1rem;
`;