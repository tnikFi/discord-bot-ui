import { Avatar, Collapse, List, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

interface Guild {
    id: number,
    name: string,
    icon: string
}

const GuildList = ({ guilds }: { guilds: Guild[] }) => {
    const [open, setOpen] = React.useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(`guild id is ${searchParams.get('guild')}`)
    const [selectedGuild, setSelectedGuild] = React.useState<Guild | undefined>(
        guilds.find(guild => guild.id.toString() === searchParams.get('guild')) || guilds[0]
    )

    useEffect(() => {
        if (selectedGuild) {
            setSearchParams({ guild: selectedGuild.id.toString() })
        }
    }, [selectedGuild])

    const handleClick = () => {
        setOpen(!open)
    }

    const handleGuildClick = (guild: Guild) => {
        setSelectedGuild(guild)
        setSearchParams({ guild: guild.id.toString() })
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