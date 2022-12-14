import styled from "styled-components"

/************/
/** PAGE 3 **/
/************/
export const Page3Fonts = styled.div`
    h2 {
        font-family: Vollkorn;
        font-weight: 500;
        font-size: 34px;
    }
`

export const MilestoneHeading = styled.div`
    .pageSubtext {
        color: #94A3B8;
        font-family: Inter;
        font-weight: 500;
        font-size: 16px;
    }
`

export const AddAMilestone = styled.div`

`

export const MilestoneRoadmapSummary = styled.div`

`

/************/
/** PAGE 4 **/
/************/


/************/
/** PAGE 5 **/
/************/


/*********************/
/** CONGRATULATIONS **/
/*********************/
export const CreatePageWrapper = styled.div`
    color: white;

    margin-left: 8%;
    margin-right: 8%;
    width: -webkit-fill-available;
    width: -moz-available;
    
    h1 {
        font-size: 50px;
        font-family: Vollkorn;
        font-weight: 600;
    }

    .progressBarWrapper {
        margin-top: 30px;
    }
`

export const ButtonsWrapper = styled.div<{pageNo: number}>`
    display: ${(props: any) => props.pageNo == 0 ? 'none' : 'flex'};
    align-items: center;
    justify-content: ${(props: any) => 
        (props.pageNo == 1 || props.pageNo == 2 || props.pageNo == 3 || props.pageNo == 6) ? 'flex-end'
    : (props.pageNo == 4 || props.pageNo == 5) && 'center'};

    margin-bottom: 70px;
    
    .link {
        margin-left: 17vw;
        font-family: Inter;
        font-size: 14px;
        font-weight: 700;
    }

    .link:hover {
        cursor: pointer;
        border-bottom: solid white 2px; 
    }

    .buttonsPage4 {
        display: flex;
        align-items: center;
        width: 60vw;
    }
`