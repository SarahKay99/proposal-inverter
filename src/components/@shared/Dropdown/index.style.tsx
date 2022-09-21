import styled from "styled-components"

export const DropdownFieldWrapper = styled.div<{
  selected: boolean
  width: 'default' | number
  backgroundColorDropdown: 'light' | 'dark'
}>`
  margin: 5px 0px 0px 0px;
  text-align: center;

  .selectButton {
    font-family: Inter;
    border-radius: ${(props) => props.selected ? '10px 10px 0px 0px': '10px'};
    border-bottom: ${(props) => props.selected ? 'solid var(--brand-ocean-blue) 1px': 'none'};
    padding-left: 12px;
    padding-right: 12px;
    width: ${(props) => (props.width == 'default' || props.width == undefined) ? "-webkit-fill-available" : `${props.width}em`};
    width: ${(props) => (props.width == 'default' || props.width == undefined) ? "-moz-available" : `${props.width}em`};
    height: 2.8em;
    text-align: left;
    border: none;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .scrolling {
    display: ${(props) => props.selected ? 'flex' : 'none'};
    flex-direction: column;
    font-size: 14px;

    width: ${(props) => (props.width == 'default' || props.width == undefined) ? "-webkit-fill-available" : `${props.width}em`};
    width: ${(props) => (props.width == 'default' || props.width == undefined) ? "-moz-available" : `${props.width}em`};

    background-color: none;
    max-height: 200px;
    border-radius: 0px 0px 0px 10px;

    resize: both;
    overflow-y: scroll;
    overflow-x: hidden
  }
  .scrolling::-webkit-scrollbar {
    width: 6px;
    background-color: var(--brand-deep-dark-blue);
  }
  .scrolling::-webkit-scrollbar-thumb {
    background-color: var(--brand-medium-gray);
  }

  .buttons {
    display: ${(props: any) => props.selected ? 'flex' : 'none'};
    align-items: center;
    background-color: none;
    justify-content: flex-end;

    margin: 10px 0px 10px 0px;
  }

  ul {
    border-radius: 0px 0px 10px 10px;
    background-color: var(--brand-deep-dark-blue);
    flex-direction: column;

    width: ${(props) => (props.width == 'default' || props.width == undefined) ? "-webkit-fill-available" : `${props.width}em`};
    width: ${(props) => (props.width == 'default' || props.width == undefined) ? "-moz-available" : `${props.width}em`};

    border-bottom: ${(props: any) => props.backgroundColorDropdown == 'light' ? 'none' : 'solid white 1.5px'};
    border-left: ${(props: any) => props.backgroundColorDropdown == 'light' ? 'none' : 'solid white 1.5px'};
    
    color: ${(props: any) => props.backgroundColorDropdown == 'light' ? 'black' : 'white'};

    margin: 0px;
    padding: 0px;
  }

  li {
    display: ${(props) => props.selected ? 'flex' : 'none'};

    background-color: ${(props: any) => props.backgroundColorDropdown == 'light' ? 'var(--brand-white-blend)' : 'none'};
    border-radius: 0px;
    border: none;
    list-style-type: none;
    height: 1.8em;
    border-radius: 10px;

    padding-bottom: 5px;
  }

  li button {
    display: ${(props) => props.selected ? 'flex' : 'none'};
    align-items: center;

    background-color: transparent;
    border-radius: 0px;
    border: none;
    color: ${(props: any) => props.backgroundColorDropdown == 'light' ? 'black' : 'white'};

    height: 35px;
    width: ${(props) => (props.width == 'default' || props.width == undefined) ? "-webkit-fill-available" : `${props.width}em`};
    width: ${(props) => (props.width == 'default' || props.width == undefined) ? "-moz-available" : `${props.width}em`};
  }

  li :hover {
    background-color: var(--brand-ocean-blue);
    overflow: hidden;
    cursor: pointer;
  }
`