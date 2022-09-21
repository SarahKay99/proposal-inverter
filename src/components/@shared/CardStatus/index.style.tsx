import styled from "styled-components"

export const Status = styled.div<{status: String}>`
    border-radius: 87px;
    width: fit-content;
    padding: 0em 0.5em;
    border: solid ${(props) =>
        props.status == 'ReFi Grants' ? '#FEDF72'
        : props.status == 'Celo Grants' ? '#A3CC7B' 
        : props.status == 'Gitcoin Grants' ? '#72EED0'
        : props.status == 'DeFi Grants' ? '#3E557A'
        : props.status == 'ETH Grants' ? '#FF01DD'
        : props.status == 'DeSci Grants' && '#F27121'
    } 1.5px;
    margin-bottom: 18px;
`