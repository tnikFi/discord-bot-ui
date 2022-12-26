import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';

// Placeholder for now. Eventually this will be a component that checks the response
// time of the bot and displays the status accordingly.
const ping = null

const degradedThreshold = 1000

const Status = () => {
    return (
        <ListItem>
            <Tooltip title={`${ping} ms`}>
                <ListItemIcon>
                    <AdjustOutlinedIcon color={ping ? ping < degradedThreshold ? 'success' : 'warning' : 'error'} />
                </ListItemIcon>
            </Tooltip>
            <ListItemText primary={ping ? ping < degradedThreshold ? 'Online' : 'Online' : 'Offline'} />
        </ListItem>
    )
}

export default Status