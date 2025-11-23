import { useState, useCallback, useEffect } from 'react'
import GlobalStyle from './styles/globalStyle.js'
import Header from './components/Header.jsx';
import TabContainer from './components/TabContainer.jsx';
import AnimalPage from './pages/AnimalPage.jsx';
import styled from 'styled-components';
import CuidadoPage from './pages/CuidadoPage.jsx';


export default function App() {
  const TABS = { ANIMAL: 'animais', CUIDADO: 'cuidados' };
  
  const [activeTab, setActiveTab] = useState(TABS.ANIMAL);
  const [animais, setAnimais] = useState([]);
  const [cuidados, setCuidados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchAnimais = useCallback(async () => {
    setLoading(true);
    setError(null);    
    try {
            const response = await fetch(`http://localhost:5000/api/animais`);
            const data = await response.json();
            if (response.ok) {
                setAnimais(data);
            } else {
                throw new Error(data.message || 'Falha ao buscar animais.');
            }
        } catch (err) {
            console.error('Erro de API:', err);
            setError(`Erro ao buscar dados: ${err.message}. Verifique se a API está rodando.`);
        } finally {
            setLoading(false);
        }
        
    }, []);
   
    const fetchCuidados = useCallback(async () => {
      setLoading(true);
      setError(null);    
      try {
            const response = await fetch(`http://localhost:5000/api/cuidados`);
            const data = await response.json();
            if (response.ok) {
                setCuidados(data);
            } else {
                throw new Error(data.message || 'Falha ao buscar cuidados.');
            }
        } catch (err) {
            console.error('Erro de API:', err);
            setError(`Erro ao buscar dados: ${err.message}. Verifique se a API está rodando.`);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (activeTab === TABS.ANIMAL) {
          fetchAnimais();
        } else if (activeTab === TABS.CUIDADO) {
          fetchCuidados();
        }
    }, [activeTab, fetchAnimais, fetchCuidados]);

    const handleSubmitAnimal = useCallback(async (dataToSend) => {
        const url = `http://localhost:5000/api/animais`;
        const method = 'POST';
        try {
            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend),
            });
            const data = await response.json();

            if (response.ok) {
                fetchAnimais(); 
                return { success: true };
            } else {
                return { success: false, status: response.status, errors: data.errors, message: data.message };
            }
        } catch (err) {
            return { success: false, status: 500, message: err.message };
        }
    }, [fetchAnimais]);

  const handleSubmitCuidado = useCallback(async (dataToSend) => {
        const url = `http://localhost:5000/api/cuidados`;
        const method = 'POST';
        try {
            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend),
            });
            const data = await response.json();

            if (response.ok) {
                fetchCuidados(); 
                return { success: true };
            } else {
                return { success: false, status: response.status, errors: data.errors, message: data.message };
            }
        } catch (err) {
            return { success: false, status: 500, message: err.message };
        }
    }, [fetchCuidados]);

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <TabContainer 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        TABS={TABS}/>
      <Pages>
      {activeTab === TABS.ANIMAL && (
        <AnimalPage 
          animais={animais} 
          onSubmit={handleSubmitAnimal}
          loading = {loading}
          error = {error}
          onError={setError}
        />
      )}
      {activeTab === TABS.CUIDADO && (
        <CuidadoPage 
          cuidados={cuidados} 
          onSubmit={handleSubmitCuidado}
          loading = {loading}
          error = {error}
          onError={setError}
        />
      )}
      </Pages>
    </>
    
  )
}

const Pages=styled.div`
  display:flex;
  margin:auto;
  flex-direction: column;
  width:80%;
`