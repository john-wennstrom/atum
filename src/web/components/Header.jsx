import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    z-index: 99;
    width: 100%;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid #aaa;
`;

const InnerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;

    nav {
        ul {
            margin: 0;
            padding: 0;
            display: flex;
            li {
            list-style: none;
            margin: 0 60px;
            a {
                text-transform: capitalize;
                text-decoration: none;
                color: #000;
            }
            }
        }
    }
`;

const Header = () => (
    <Wrapper>
        <InnerHeader>
            <nav>
                <ul>
                    <li>
                        <a href="/">Link 1</a>
                    </li>
                    <li>
                        <a href="/">Link 2</a>
                    </li>
                    <li>
                        <a href="/">Link 3</a>
                    </li>
                    <li>
                        <a href="/">Link 4</a>
                    </li>
                    <li>
                        <a href="/">Link 5</a>
                    </li>
                </ul>
            </nav>
        </InnerHeader>
    </Wrapper>
);

export default Header;
