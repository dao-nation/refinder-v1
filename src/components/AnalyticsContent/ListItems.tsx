import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function ListItems({ headerNameArr, setStateFunction }: any) {
  return (
    <>
      {headerNameArr.map((headerName: string) => {
        return (
          <ListItem button key={headerName}>
            <ListItemText
              primary={headerName}
              onClick={() => {
                setStateFunction(headerName);
                console.log(headerName);
              }}
            />
          </ListItem>
        );
      })}
    </>
  );
}
