import styled from 'styled-components';
import colors from '../../colors.json';

export const Header = styled.header`
    background-color: ${colors.black};
    color: ${colors.white};
    height: 15vh;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    h4{
        font-size: 1.2rem;
        font-weight: 100;
        display: flex;
        gap: 1rem;
    }
    svg{
        font-size: 1.8rem;
    }
`;

export const CorpoInicio = styled.div`
    background-color: ${colors.light_gray};
    width: 100vw;
    height: 75vh;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: ${colors.white};
`;

export const ImgInicio = styled.img`
    align-self: center;
    position: absolute;
    margin-top: -37vh; 
    width: 6rem;
    border: 3px solid ${colors.white};
    border-radius: 50%;
`;

export const DescricaoInicio = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: left;
    border-left: 4px solid ${colors.yellow};
    h2{
        text-transform: uppercase;
    }
    h3{
        color: ${colors.gray};
        font-size: 1rem;
        font-weight: 200;
    }
`;

export const MetricasInicio = styled.div`
    background: ${colors.card_gray};
    width: 100%;
    height: 6.5rem;
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    h2{
        font-size: 2.4rem;
        font-weight: 800;
    }
    h3{
        font-size: 1rem;
        font-weight: 100;
    }
`;

export const DivMetricas = styled.div`
    flex-direction: column;
`;

export const BioInicio = styled.div`
    padding: 2rem;
    gap: 2rem;
    border-left: 4px solid ${colors.yellow};
    border-radius: 1rem;
    font-size: 1rem;
    h3{
        margin-top: 1rem;
        color: ${colors.white};
        font-size: 1rem;
        font-weight: 200;
    }
`;