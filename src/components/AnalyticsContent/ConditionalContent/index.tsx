export default function ConditionalContent({ currentState }: any) {
  if (currentState === 'Overview') {
    return <h1>High Level Analytics Coming Soon</h1>;
  }
  if (currentState === 'Token Health') {
    return <h1>Token Health Analytics Coming Soon</h1>;
  }
  if (currentState === 'Community Health') {
    return <h1>Community Health Analytics Coming Soon</h1>;
  }
  if (currentState === 'Talent Needed') {
    return <h1>Open Positions Coming Soon</h1>;
  } else {
    return <></>;
  }
}
