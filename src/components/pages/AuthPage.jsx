import styled from "styled-components";

import SignIn from "../auth/SignIn";

const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function AuthPage() {
  return (
    <AuthContainer>
      <SignIn />
    </AuthContainer>
  );
}

export default AuthPage;
