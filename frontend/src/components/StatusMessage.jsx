import styled from "styled-components";

export default function StatusMessage ({ message, type = 'info', list = null }) {
    let classes
    switch (type) {
        case 'error': classes = "error"; break;
        case 'success': classes = "success"; break;
        default: classes = "info"; break;
    }

    return (
        <Message classes={classes}>
            {message}
            {list && (
                <ErrorList>
                    {list.map((err, index) => (
                        <li key={index}>• {err.replace(/"/g, '')}</li>
                    ))}
                </ErrorList>
            )}
        </Message>
    );
};

const Message = styled.div`
    padding: 15px;
    border-radius: var(--border-radius);
    margin-bottom: 20px;
    font-weight: 600;
    border: 1px solid;

    background-color: ${(props)=>props.classes === 'error'?('#FFEBEE'):(props.classes === 'sucess'?('#E8F5E9'):('#E3F2FD'))};
    color: ${(props)=>props.classes === 'error'?('#D32F2F'):(props.classes === 'sucess'?('#388E3C'):('#1976D2'))};
    border-color: ${(props)=>props.classes === 'error'?('#D32F2F'):(props.classes === 'sucess'?('#388E3C'):('#1976D2'))};
`;

const ErrorList = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-top: 10px;
    font-size: 0.85em;
    color: #D32F2F;
`;