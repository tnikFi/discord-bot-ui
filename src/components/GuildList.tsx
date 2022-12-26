import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import constants from "../constants"

interface Guild {
    icon: string,
    guildId: number
}

const GUILD_PADDING = constants.guildListPadding
const GUILD_SIZE = constants.guildListWidth

const GuildList = ({ guilds }: { guilds: Array<Guild> }) => {
    return (
        <Box sx={{ overflowY: 'auto', overflowX: 'hidden', width: GUILD_SIZE, maxHeight: 1, paddingRight: 11 }}>
            <List sx={{ padding: `${GUILD_PADDING}px` }}>
                {guilds.map((guild) => (
                    <ListItem key={guild.guildId} sx={{ marginTop: `${GUILD_PADDING*2}px`, padding: 0 }}>
                        <ListItemButton sx={{ padding: 0, backgroundColor: 'red' }}>
                            <ListItemIcon sx={{ padding: 0, width: GUILD_SIZE-GUILD_PADDING*2, height: GUILD_SIZE-GUILD_PADDING*2 }}>
                                <img src={guild.icon} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default GuildList