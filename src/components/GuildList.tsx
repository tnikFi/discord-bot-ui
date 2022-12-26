import { Avatar, Collapse, List, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import React from 'react'

interface Guild {
    id: number,
    name: string,
    icon: string
}

const GuildList = ({ guilds }: { guilds: Guild[] }) => {
    const [open, setOpen] = React.useState(false)
    const [selectedGuild, setSelectedGuild] = React.useState<Guild | undefined>(guilds[0])

    const handleClick = () => {
        setOpen(!open)
    }

    const handleGuildClick = (guild: Guild) => {
        setSelectedGuild(guild)
    }

    return (
        <>
            <ListItemButton onClick={handleClick}>
                {selectedGuild
                    ? <>
                        <ListItemAvatar>
                            <Avatar src={selectedGuild.icon} />
                        </ListItemAvatar>
                        <ListItemText primary={selectedGuild.name} />
                    </>
                    : <>
                        <ListItemIcon>
                            <CancelOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="No guilds available" />
                    </>
                }
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {guilds.filter(guild => guild.id !== selectedGuild?.id).map(guild => (
                        <ListItemButton sx={{ pl: 4 }} key={guild.id} onClick={() => handleGuildClick(guild)}>
                            <ListItemAvatar>
                                <Avatar src={guild.icon} />
                            </ListItemAvatar>
                            <ListItemText primary={guild.name} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </>
    )
}

export default GuildList
export type { Guild }