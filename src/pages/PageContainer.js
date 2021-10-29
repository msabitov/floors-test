import styled from "styled-components";

export const PageContainer = styled.div`
    margin-top: 60px;
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    height: calc(100vh - 50px);
    background-color: white;
`