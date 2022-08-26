import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Nav>
            <Logo src="images/logo.svg" />

            <NavMenu>
                <a>
                    <img alt="" src="/images/home-icon.svg" />
                    <span>Home</span>
                </a>
                <a>
                    <img alt="" src="/images/SEARCH-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img alt="" src="/images/WATCHLIST-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img alt="" src="/images/ORIGINAL-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img alt="" src="/images/MOVIE-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img alt="" src="/images/SERIES-icon.svg" />
                    <span>SERIES</span>
                </a>

            </NavMenu>

            <UserImg alt="" src="https://avatars.githubusercontent.com/u/19980847?v=4" />

        </Nav>
    )
}

const Nav = styled.nav`
    height: 70px;
    background: #090b13 ;
    display: flex;
    align-Items: center;
    padding: 0 36px;
`;

const Logo = styled.img`
    width: 80px;

`;

const NavMenu = styled.div`

    display:flex;
    flex: 1;
    margin-left: 25px;
    align-tems: center;

    a {
        display: flex;
        align-Items: center;
        padding: 0 12px;
        cursor: pointer; 

        img {
        height: 20px;
        }

    span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute; 
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);



        }
    }
    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }





    }

    

    

    

`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;


`







export default Header