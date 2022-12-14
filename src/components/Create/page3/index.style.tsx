import styled from "styled-components" 

export const NoMilestoneYet = styled.div`
    background-color: var(--brand-deep-dark-blue);
    padding: 40px;
    font-family: Inter;
    font-weight: 700;
    font-style: italic;
    color: var(--brand-baby-blue);
    box-shadow: 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`

export const AddMilestoneFormWrapper = styled.div`
    background-color: var(--brand-deep-dark-blue);
    border: solid var(--brand-ocean-blue) 1px;
    border-radius: 10px;
    padding: 30px 40px 30px 40px;
    box-shadow: 2px 5px rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: space-between;

    .estimatedDuration {
        margin: 20px 0px 20px 0px;
    }

    .deliverable {
        display: flex;
    }

    .buttons {
        font-size: 13px;
        margin-top: 2em;
    }

    .buttons a {
        font-size: 15px;
        font-family: Inter;
        font-weight: 700;

        margin-left: 2em;
    }

    .buttons a:hover {
        cursor: pointer;
    }

    .firstColumn {
        width: 80%;
        margin-right: 4em;
    }

    .secondColumn {
        width: 100%;
    }

    .clearFields { 
        color: var(--brand-baby-blue);
    }
`

export const AddedMilestones = styled.div`
    display: flex;

    font-family: Inter;
    font-weight: 700;
`
