import React from 'react'
import styled from 'styled-components'
import db from '../Firebase'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { sidebarItemsData } from '../components/data/SidebarData'
import { useHistory } from 'react-router';


const Sidebar = ({rooms}) => {

    const history = useHistory();

    const goToChannel = (id) => {
        if(id){
            history.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const roomName = prompt("Enter the Channel name");
        if(roomName) {
            db.collection('rooms').add({
                name: roomName
            })
        }
    }

    return (
        <Wrapper>
            <WorkspaceWrapper>
                <Name>
                    AYUSH VERMA
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon/>
                </NewMessage>
            </WorkspaceWrapper>
            <MainChannels>
                    {
                        sidebarItemsData.map(item => (
                            <MainChannelItems>
                                {item.icon}
                                {item.text}
                            </MainChannelItems>
                        ))
                    }
            </MainChannels>
            <ChannelsWrapper>
                <NewChannelWrapper>
                    <div>
                        CHANNELS
                    </div>
                    <AddIcon
                    onClick = {addChannel} />
                </NewChannelWrapper>
                <ChannelList>
                    {
                        rooms.map(item => (
                            <Channel onClick={() => goToChannel(item.id)}>
                                # { item.name}                                                                                                                   
                            </Channel>
                        ))
                    }
                   
                </ChannelList>
            </ChannelsWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div `
    background: #f2345d;
`
const WorkspaceWrapper = styled.div `
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid white;
    color: white;
    `

const NewMessage = styled.div `
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`
const Name = styled.div ``

const MainChannels = styled.div `
    padding: 10px;
    `

const MainChannelItems = styled.div `
    color: white;
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 15px;
    margin-top: 10px;
    cursor: pointer;
`
const ChannelsWrapper = styled.div `
    color: white;
    margin-top: 20px;
    `

const NewChannelWrapper = styled.div `    
    height: 28px;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 30px;
    .MuiSvgIcon-root {
        cursor: pointer;
    }
    .MuiSvgIcon-root:hover {
        padding: 2px;
        border: 1.7px solid white;
        border-radius: 20px;
    }
`
const ChannelList = styled.div ``

const Channel = styled.div `
    height: 30px;
    display: flex;
    align-items: center;
    margin-left: 29px;
    cursor: pointer;
    margin-top: 10px;
    
    :hover {
        background: white;
        color: #f23123;
        border-radius: 0 0 0 30px;
        padding: 10px;
        margin-right: 10px;
        font-weight: 500;
    }`