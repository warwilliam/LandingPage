
import cv from '../Perfil/cv-William.pdf'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
    AOS.init({
        duration: 1200,
    })
    return (
        <Div data-aos="fade-up" data-aos-delay="300">
            <A 
                onClick={() => window.open(cv)} 
                target = "_blank" 
                >Experiências Profissionais
            </A>
        </Div>
    );
}

const Div = styled.div`
    padding-top: 3rem;

@media (max-width: 500px){
        margin: 1rem 1rem 4rem 1rem;  
        padding: 1.3rem 2rem; 
        font-size: 1.2rem;
        }
`
const A = styled.a`
    font-weight: bold;
    font-size: 1rem;
    padding: 1.2rem 2.5rem;
    margin-top: 5vh;
    color: lightgrey;
    transition: all 0.5s ease;
    outline: none;
    background: rgb(33, 37, 41);
    border-radius: 5rem;
    text-transform: uppercase;
    &:hover {
        background-color: #fff;
        
        }
@media (max-width: 1024px){
        margin: 0 1rem 3rem 1rem;   
        }
@media (max-width: 500px){
        margin: 1rem 1rem 5rem 1rem;  
        padding: 1.3rem 2rem; 
        font-size: 1.2rem;
        }
`

export default Resume;