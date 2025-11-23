import styled from 'styled-components'
import { PawPrint } from 'lucide-react';

export default function Header(){
    return (
            <Container>
                <PawPrint size={50}></PawPrint>
                <h1>Sistema de gerenciamento de Zoológico</h1>
            </Container>
           
    )
}

const Container = styled.div`
    width: 100vw;
    margin: 0 auto;
    gap: 10px;
    display: flex;
    background: linear-gradient(135deg, #4CAF50 0%, #388E3C 100%);
    color: white;
    padding: 30px 20px;
    border-radius: 0px 0px 8px 8px;
    margin-bottom: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    justify-content:center;
    h1 {
        margin: 0;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 2.2rem;
        size=20px
    }
 `;


