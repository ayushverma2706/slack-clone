import React, {useState} from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function ChatInput({sendMessage}) {

    const [input,setInput] = useState('');

    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input)
        setInput('')
    }
    return (
        <Wrapper>
            <InputWrapper>
            <form>
                <input onChange={(e)=> setInput(e.target.value)} type='text' placeholder='Type your message here'></input>
                <SendButton type='submit'
                    onClick={send}>
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

const SendButton = styled.button `
    cursor: pointer;
    border: none;
    background: none;
    button:active{
        border:none;
    }
`