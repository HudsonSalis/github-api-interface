import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;

`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  margin: 8px;
  
  &:hover {
    background-color: rgba(210,210,210,0.4);
    transition: 0.2s;
  }

  &:focus {
    outline: none;
    
  }

  &.is-selected {
    border-bottom: 2px solid rgba(70,150,255,0.9);
    
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
