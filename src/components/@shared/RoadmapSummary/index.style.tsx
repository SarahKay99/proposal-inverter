import styled from "styled-components"

export const RoadmapSummaryWrapper = styled.div`
    background-color: rgba(14, 23, 40, 0.5);

`

export const RoadmapTile = styled.div<{start: boolean}>`
    background-color: ${(props) => props.start ? '#30425F' : '#171E2E'};
`