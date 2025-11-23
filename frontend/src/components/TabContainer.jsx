import TabButton from "./TabButton";
import styled from "styled-components"
import { List } from "lucide-react";

export default function TabContainer({activeTab, setActiveTab, TABS}){
    return(
        <Container>
            <TabButton 
                tabActive = {activeTab === TABS.ANIMAL}
                onClick={() => setActiveTab(TABS.ANIMAL)}
            >
                <List size={18} style={{ marginRight: 5 }} /> Animais
            </TabButton>
            <TabButton 
                tabActive = {activeTab === TABS.CUIDADO}
                onClick={() => setActiveTab(TABS.CUIDADO)}
            >
                <List size={18} style={{ marginRight: 5 }} /> Cuidados
            </TabButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    margin-bottom: 20px;
    gap: 10px;
    justify-content:center;
`;