import CuidadoCard from "../components/CuidadoCard";
import { useState, useCallback } from "react";
import styled from "styled-components";
import { PlusCircle, ChevronDown, XCircle } from "lucide-react";
import StatusMessage from "../components/StatusMessage";

export default function CuidadoPage({cuidados,onSubmit,loading, error, onError}){
    const initialFormData = {
            name: '',
            description:'',
            frequency:'',
        }
        
        const [formData, setFormData] = useState(initialFormData);
        const [showForm, setShowForm] = useState(false);
        const [formErrors, setFormErrors] = useState(null);

    const renderCuidadoList = () =>{
        if (loading) return <StatusMessage message="Carregando dados dos cuidados..." />;
        if (error) return <StatusMessage message={error} type="error" />;
        if (cuidados.length === 0) return <StatusMessage message="Nenhum cuidado cadastrado. Comece adicionando um novo!" type="info" />;

        return (
            <div>
                {cuidados.map((cuidado) => (
                    <CuidadoCard  key={cuidado.id} cuidado = {cuidado}/>
                ))}
            </div>
        )
    }
    const resetForm = useCallback(() => {
            setFormData(initialFormData);
            setShowForm(false);
            setFormErrors(null);
        }, [initialFormData]);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleLocalSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(null);

        const dataToSend = {
            ...formData
        };
        
        const response = await onSubmit(dataToSend);

        if (response.success) {
            resetForm();
        } else {
            if (response.status === 400 && response.errors) {
                setFormErrors(response.errors);
            } else {
                onError(`Falha na operação: ${response.message}`);
            }
        }
    };

    const renderCuidadoForm = () => {
        return (
            <FormContainer onSubmit={handleLocalSubmit}>
                <FormHeader>{'Cadastrar Novo Cuidado'}</FormHeader>
                {formErrors && (
                    <FormItemFull>
                        <StatusMessage
                            message="Por favor, corrija os seguintes erros de validação:"
                            type="error"
                            list={formErrors}
                        />
                    </FormItemFull>
                )}
                <FormItem >
                    <FormLabel htmlFor="name" >Nome *</FormLabel>
                    <FormInput type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} required/>
                </FormItem>
                
                <FormItem >
                    <FormLabel htmlFor="frequency" >Frequencia *</FormLabel>
                    <FormInput type="text" id="frequency" name="frequency" value={formData.frequency} onChange={handleFormChange} required/>
                </FormItem>

                <FormItemFull>
                    <FormLabel htmlFor="description" >Descrição</FormLabel>
                    <FormTextArea id="description" name="description" value={formData.description} onChange={handleFormChange} rows="3"></FormTextArea>
                </FormItemFull>

                <FormActions>
                    <ShowFormButton type="button" 
                        onClick={resetForm}
                    >
                        <XCircle size={16} /> Cancelar
                    </ShowFormButton>
                    <ShowFormButton type="submit" 
                        buttonsucess="sucess"
                    >
                        <PlusCircle size={16} /> {'Cadastrar'}
                    </ShowFormButton>
                </FormActions>
            </FormContainer>
        );
    };

    return(
        <>
            <ShowFormButton buttonsucess={'sucess'} onClick={() => setShowForm(!showForm)}> 
                <PlusCircle size={18} style={{ marginRight: 5 }} /> {showForm ? 'Esconder Formulário' : 'Adicionar Novo Cuidado'}
                <ChevronDown size={18} style={{ marginLeft: 10, transition: 'transform 0.3s', transform: showForm ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
            </ShowFormButton>
            
            {showForm && renderCuidadoForm()}
            {renderCuidadoList()}
        </>
    )
}

const ShowFormButton = styled.button`
    color: ${(props)=> props.buttonsucess? "#388E3C":"#D32F2F"};
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    margin-bottom:10px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.3s ease, transform 0.1s;
    display: flex;
    align-items: center;
    gap: 5px;
    text-transform: uppercase;
    font-size: 0.9rem;
    &:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }
`;

const FormContainer = styled.form`
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
`;

const FormHeader =styled.h1`
    grid-column: 1 / -1;
    font-size: 1.75rem;
    font-weight: 600;
    color: #388E3C;
    margin-bottom: 10px;
`;

const FormLabel = styled.label`
    margin-bottom: 5px;
    font-weight: 600;
    color: #388E3C;
`;

const FormItem = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormItemFull = styled(FormItem)`
    grid-column: 1 / -1;
`;

const FormActions =styled.div`
    grid-column: 1 / -1;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

const FormInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1em;
    transition: border-color 0.3s, box-shadow 0.3s;
    &:focus {
        border-color: #388E3C;
        outline: none;
        box-shadow: 0 0 0 2px rgba(56, 142, 60, 0.2);
    }
`;  

const FormTextArea = styled.textarea`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius:  8px;
    font-size: 1em;
     resize: none;
    transition: border-color 0.3s, box-shadow 0.3s;
    &:focus {
        border-color: #388E3C;
        outline: none;
        box-shadow: 0 0 0 2px rgba(56, 142, 60, 0.2);
    }
`;