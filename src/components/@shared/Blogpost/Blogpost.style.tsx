import styled from "styled-components"

export const BlogpostWrapper = styled.div`
    border-radius: 10px;
    border: solid white 1px;
    color: white;    

    margin-bottom: 30px;

    .contentWrapper {
        
    }

    img {
        width: 9em;
        height: auto;
        border-radius: 10px;
    }

    .bottom {
        padding: 10px 10px 10px 10px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .title {
        padding: 0px 10px 10px 10px;
        font-size: 18px;
        font-weight: 700;
        border-bottom: solid white 0.5px;
    }
`