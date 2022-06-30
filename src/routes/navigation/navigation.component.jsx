import { Outlet } from "react-router-dom";

import { useUserContext } from "../../contexts/user.context";
import { useCartContext } from "../../contexts/cart.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import {
  NavigationWrapper,
  LogoWrapper,
  NavLinksWrapper,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useUserContext();
  const { isCartOpen } = useCartContext();

  return (
    <>
      <NavigationWrapper>
        <LogoWrapper to="/">
          <CrwnLogo className="logo" />
        </LogoWrapper>
        <NavLinksWrapper>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksWrapper>
        {isCartOpen && <CartDropdown />}
      </NavigationWrapper>
      <Outlet />
    </>
  );
};

export default Navigation;
