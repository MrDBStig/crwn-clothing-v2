import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { AuthenticationWrapper } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationWrapper>
      <SignInForm />
      <SignUpForm />
    </AuthenticationWrapper>
  );
};

export default Authentication;
