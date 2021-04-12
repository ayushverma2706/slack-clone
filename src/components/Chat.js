import React from 'react'
import styled from 'styled-components'
import ChatInput from './ChatInput'

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatMessage from './ChatMessage';

const Chat = () => {
    return (
        <Wrapper>
            <Header>
                <ChannelName>
                    # channel name
                    <ChannelInfo>
                        here comes the information part of channel
                    </ChannelInfo>  
                </ChannelName>
                <ChannelDetails>
                    Details 
                    <Info />
                </ChannelDetails>
            </Header>

            <MessageWrapper>
                <ChatMessage/>
            </MessageWrapper>

            <ChatInput/>
        </Wrapper>
    )
}

export default Chat

const Wrapper = styled.div `
    display: grid;
    grid-template-rows: 64px auto min-content;
`
const ChannelName = styled.div `
    font-weight: 700;
`
const ChannelInfo = styled.div `
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 6px;
    margin-left: 10px;
`
const ChannelDetails = styled.div `
    display: flex;
    align-items: center;
    padding: 10px;
    font-weight: 600;
    opacity:0.7;
    :hover {
        opacity: 1;
    }
`
const Info = styled(InfoOutlinedIcon) `
    color: #f2345d;
    margin-left: 10px;
    cursor: pointer;
`
const Header = styled.div `
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f2345d`

const MessageWrapper = styled.div ``
