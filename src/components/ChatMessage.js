import React from 'react'
import styled from 'styled-components'

function ChatMessage({ text, name, image, timeStamp }) {
    return (
        <Wrapper>
            <UserAvatar>
                <img src={{image}}/>
            </UserAvatar>
            <MessageContent>
                <Name>
                    {name}:
                    <span>{new Date(timeStamp.toDate())}</span>
                </Name>
                <Content>
                    {text}
                </Content>
            </MessageContent>
        </Wrapper>
    )
}

export default ChatMessage

const Wrapper = styled.div `
    padding: 8px 20px;
    display: flex;
    align-items: center;`

const UserAvatar = styled.div `
    width: 37px;
    height: 37px;
    border-radius: 2px;
    margin-right: 8px;
    overflow: hidden;
    
    img{
        width: 100%;
    }`

const MessageContent = styled.div `
    display: flex;
    flex-direction: column;
    padding: 5px;
    `

const Name = styled.span `
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;

    span{
        margin-left: 10px;
        font-weight: 400;
        color: rgb(97,97,97);
    }
    `

const Content = styled.span `
    font-weight: 400;`