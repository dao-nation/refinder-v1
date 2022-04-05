export default function ConditionalContent({ currentState }: any) {
  if (currentState === 'Overview') {
    return <h1>Content</h1>;
  }
  if (currentState === 'Token Health') {
    return <h1>Token Health</h1>;
  }
  if (currentState === 'Community Health') {
    return <h1>Community Health</h1>;
  }
  if (currentState === 'Talent Needed') {
    return <h1>Talent Needed</h1>;
  } else {
    return <></>;
  }
}
