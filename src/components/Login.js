import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../Firebase'

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            props.setUser(newUser);
        })
        .catch((error) => {
            alert(error.message)
        })
    }
    return (
        <Wrapper>
            <Content>
                <SlackImg src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'/>
                <h1>
                    Sign in Slack
                </h1>
                <SingInButton onClick={() => signIn()}>
                    Sign In With Google
                </SingInButton>
            </Content>
        </Wrapper>
    )
}

export default Login

const Wrapper = styled.div `
    width: 100%;
    height: 100vh;
    background: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div `
    background: white;
    padding: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgb(0 0 0 /12%), 0 1px 2px rgb(0 0 0 /24%);`

const SlackImg = styled.img `
    height: 100px;
    `
const SingInButton = styled.button `
    margin-top: 50px;
    background: green;
    color: white;
    border: none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px; `