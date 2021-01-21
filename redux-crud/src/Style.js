import styled from "styled-components";
import { Link } from "react-router-dom";
export const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template: 0.1fr 1fr/1fr;
`;

//Navbar
export const Nav = styled.div`
  background-color: #ffa31a;
  border-bottom: 1px solid black;
`;

//MainContent
export const Main = styled.div`
  background-color: white;
  box-sizing: content-box;
`;

// Link
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 3%;
  padding-top: 1.5%;
`;

export const StyledLink = styled(Link)`
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.25rem;
  display: inline-block;
  width: 8.5%;
  margin-right: 0.625%;
  text-align: center;
  color: white;
  &:hover {
    color: black;
  }
  &:active {
    color: black;
  }
`;
export const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  content: {
    top: "20%",
    left: "30%",
    right: "auto",
    bottom: "auto",
    marginRight: " -50%",
    transform: " translate (-50% , -50%)",
    minHeight: "40%",
    minWidth: "40%",
  },
};
