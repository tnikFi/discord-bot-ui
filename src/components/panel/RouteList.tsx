import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface Route {
    path: string,
    name: string,
    icon: JSX.Element
}

const RouteList = ({ routes }: { routes: Array<Route> }) => {
    console.log(location.search)
    return (
        <List>
            {routes.map((route) => (
                <ListItem key={route.name} disablePadding>
                    <ListItemButton
                        component={RouterLink}
                        to={{
                            pathname: route.path,
                            search: location.search
                        }}
                    >
                        <ListItemIcon>
                            {route.icon}
                        </ListItemIcon>
                        <ListItemText primary={route.name} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

export default RouteList;
export type { Route };