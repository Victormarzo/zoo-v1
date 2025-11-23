import styled from 'styled-components'

export default function AnimalCard({animal}){
    const {name, species, id, habitat, description, country_origin, birth_date} = animal
    
    return(
        <Card>
            <Content>
                <h3 key={id}>{name} ({species})</h3>
                    <p>
                        <strong> ID:</strong> {id} | 
                        <strong> Nascimento:</strong> {birth_date ? new Date(birth_date).toLocaleDateString('pt-BR') : 'Desconhecida'} |
                        <strong> Habitat:</strong> {habitat || 'Não especificado'} | 
                        <strong> País de origem:</strong> {country_origin|| 'Não especificado'}
                    </p>
                    <p>{description}</p>               
            </Content>
        </Card>
    )
}

const Card = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
`;

const Content = styled.div`
    flex-grow: 1;
    width: 100%;
    p {
        margin: 5px 0;
        font-size: 0.9em;
        color: #666;
    }
    h2{
        margin-top: 0;
        margin-bottom: 5px;
        color: #388E3C;
        font-size: 1.25rem;
    }
`;