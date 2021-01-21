import React from "react";
import { LinkWrapper, StyledLink } from "../Style";

const Navbar = (props) => {
  return (
    <div>
      <LinkWrapper>
        <StyledLink to="/"> Home </StyledLink>
        <StyledLink to="/mytasks"> My Tasks </StyledLink>
      </LinkWrapper>
    </div>
  );
};

export default Navbar;
