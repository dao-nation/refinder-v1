import { useState } from 'react';
import List from '@mui/material/List';
import ListItems from './ListItems';
import ConditionalContent from './ConditionalContent';
export default function AnalyticsContent() {
  const [chosenContent, setChosenContent] = useState('Overview');
  const headerNameArr = [
    'Overview',
    'Token Health',
    'Community Health',
    'Talent Needed',
  ];
  return (
    <>
      <List>
        <ListItems
          headerNameArr={headerNameArr}
          setStateFunction={setChosenContent}
        />
      </List>
      <ConditionalContent currentState={chosenContent} />
    </>
  );
}
