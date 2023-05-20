import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import IsLoading from "../IsLoading";

import { Container, Header, NavMenu, HeaderLink } from "./SharedLayout.styled";

const SharedLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header>
        <NavMenu>
          <HeaderLink to="/" active={(location.pathname === "/").toString()}>
            HOME
          </HeaderLink>

          <HeaderLink
            to="/tweets"
            active={(location.pathname !== "/").toString()}
          >
            TWEETS{" "}
          </HeaderLink>
        </NavMenu>
      </Header>
      <Container>
        <main>
          <Suspense fallback={<IsLoading />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default SharedLayout;
