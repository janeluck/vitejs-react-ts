import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Tabs, DragTabList, PanelList, Panel, Tab, helpers } from '@react-tabtab-next/tabtab';
import './tabs.css'

const makeData = (number: number, titlePrefix = 'Tab') => {
  const data = [];
  for (let i = 0; i < number; i++) {
      data.push({
          title: `${titlePrefix} ${i}`,
          content: <div>Content {i}</div>,
      });
  }
  return data;
};
function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [tabs, setTabs] = useState(makeData(10, 'Some Tab'));
  
  const handleTabChange = (index: number) => {
    setActiveIndex(index);
  }
  const handleTabSequenceChange = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number}) => {
    const updateTabs = helpers.simpleSwitch(tabs, oldIndex, newIndex);
    setTabs(updateTabs);
    setActiveIndex(newIndex)
 }
 const tabsTemplate: any[] = [];
 const panelTemplate: any[] = [];
 tabs.forEach((tab, index) => {
     tabsTemplate.push(<Tab key={index}>{tab.title}</Tab>);
     panelTemplate.push(<Panel key={index}>{tab.content}</Panel>);
 });
  return (
    <div className="App">
            <Tabs
                activeIndex={activeIndex}
                onTabChange={handleTabChange}
                onTabSequenceChange={handleTabSequenceChange}
            >
                <DragTabList>{tabsTemplate}</DragTabList>
                <PanelList>{panelTemplate}</PanelList>
            </Tabs>
    </div>
  )
}

export default App
