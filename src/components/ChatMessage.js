import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
    return (
        <Wrapper>
            <UserAvatar>
                <img src='https://randomuser.me/api/portraits/women/72.jpg'/>
            </UserAvatar>
            <MessageContent>
                <Name>
                    Ayush
                    <span>02/04/2021 11:40 AM</span>
                </Name>
                <Content>
                    this is the sound oooh aaah
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