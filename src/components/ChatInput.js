import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
    return (
        <Wrapper>
            <InputWrapper>
            <form>
                <input type='text' placeholder='Type your message here'></input>
                <SendButton>
                    <SendIcon />
                </SendButton>
            </form>
            </InputWrapper>
        </Wrapper>
    )
}

export default ChatInput

const Wrapper = styled.div `
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;`

const InputWrapper = styled.div `
    border: 1px solid #f2345d;
    border-radius: 4px;

form{ 
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;

    input{
        flex: 1;
        border: none;
        font-size: 14px;
    }
    input:focus{
        outline: none;
    }
    .MuiSvgIcon-root{
        color: #f2345d;
        margin-right: 10px;
    }
}`

const SendButton = styled.div `
    cursor: pointer;`