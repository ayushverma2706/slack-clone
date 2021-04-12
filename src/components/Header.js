import React from 'react'
import styled from 'styled-components'

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const Header = () => {
    return (
        <Wrapper>
            <Main>
                <AccessTimeIcon/>
                    <SearchWrapper>
                        <Search>
                            <input type='text' placeholder='Search....'/>
                        </Search>
                    </SearchWrapper>
                <HelpOutlineIcon/>
            </Main>
            <UserWrapper>
                <Name>
                    Ayush
                </Name>
                <UserImage>
                    <img src='https://www.mockofun.com/wp-content/uploads/2019/12/circle-photo.jpg' />
                </UserImage>
            </UserWrapper>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div `
    background: #f2345d;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 -15px 20px black;
    position: relative;
`
const Main = styled.div `
    display: flex;
    margin: 0 16px;

    .MuiSvgIcon-root {
        color: white;
    }
`
const SearchWrapper = styled.div `
    min-width: 400px;
    margin: 0 20px;
`

const Search = styled.div `
    width: 100%;
    box-shadow: inset 0 0 0 1px rgba(104 74 104);
    border-radius: 10px;
    display: flex;
    align-items: center;

    input {
        background: transparent;
        border: none;
        color: white;
        padding: 4px;
    }
    input:focus {
        outline: none;
    }
` 

const UserWrapper = styled.div `
    display: flex;
    align-items: center;
    padding: 16px;
    position: absolute;
    right: 0;
`

const Name = styled.div ``

const UserImage = styled.div `
    height: 20px;
    img{
        height: 100%;
        border-radius: 10px;
    }`