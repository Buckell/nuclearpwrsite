import styled from "styled-components";

export default styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
    
    padding-top: 150px;

    background: #f1f2ed;

    .AboutsContainer {
        display: flex;
        justify-content: space-evenly; 
        align-items: flex-start; 
        margin: 50px auto;
        padding: 0 80px;

        .column {
            text-align: center;
        }
    }

    .column img {
        width: 200px;
        height: 275px;
        border-radius: 75%; 
        object-fit: cover; 
        margin-bottom: 15px;
    }

    .column p {
        font-size: 16px;
        line-height: 1.5;
        color: #333;
        max-width: 350px; 
        margin: 0 auto;
        word-wrap: break-word;
    }
    
    h1 {
        color: #033220;
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        text-shadow: 2px 2px 5px rgba(255, 105, 180, 0.2);
    }
`;