import * as St from "./Modal.style";
import { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { auth } from "modules/firebase";
import { Button } from "component/Button/Button.style";
import usePrintError from "component/Hook/usePrintError";

// 깃허브 로그인 구현 안됨
const SignInModal = ({ SetIsOpen }) => {
  const closeModal = () => SetIsOpen(false);

  const [errorMsg, setErrorMsg] = usePrintError();

  const [user, setUser] = useState({});
  const onChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const signIn = async event => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      closeModal();
    } catch (error) {
      setErrorMsg(error);
    }
    setUser({ email: "", password: "" });
  };

  const googleSignIn = async () => {
    try {
      const providerGoogle = new GoogleAuthProvider();
      await signInWithPopup(auth, providerGoogle);
      closeModal();
    } catch (error) {
      setErrorMsg(error);
    }
  };

  const githubSignIn = async () => {
    try {
      const providerGithub = new GithubAuthProvider();
      await signInWithPopup(auth, providerGithub);
      closeModal();
    } catch (error) {
      setErrorMsg(error);
    }
  };

  const inputCaption = (type, name, required) => ({
    type,
    name,
    id: name,
    value: user[name],
    onChange,
    required
  });

  return (
    <St.Outer>
      <St.Inner>
        <St.Form onSubmit={signIn}>
          <St.Label htmlFor="email">이메일 </St.Label>
          <St.Input {...inputCaption("email", "email")}></St.Input>
          <St.Label htmlFor="password">비밀번호 </St.Label>
          <St.Input {...inputCaption("password", "password")}></St.Input>
          {errorMsg && <St.ErrorMsg>{errorMsg}</St.ErrorMsg>}

          {/* 비밀번호 찾기 만들기 */}
          <St.FindPwLink to={"/"}>비밀번호를 잊으셨습니까?</St.FindPwLink>
          <St.Flex>
            <Button position={"modal"}>로그인</Button>
            <Button position={"modal"} onClick={googleSignIn}>
              google
              <br />
              로그인
            </Button>
            <Button position={"modal"} onClick={githubSignIn}>
              github
              <br />
              로그인
            </Button>
            <Button position={"modal"} type={"button"} onClick={closeModal}>
              닫기
            </Button>
          </St.Flex>
        </St.Form>
      </St.Inner>
    </St.Outer>
  );
};

export default SignInModal;
