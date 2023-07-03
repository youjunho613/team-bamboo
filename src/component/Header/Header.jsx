import * as St from "./Header.style";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "modules/firebase";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import bamboo_logo from "assets/bamboo_logo.png";
import basic from "assets/basic.jpg";
import { Button } from "component/Button/Button.style";
import SignInModal from "component/Modal/SignInModal";
import SignUpModal from "component/Modal/SignUpModal";
import { logoutUser } from "redux/modules/userInfo";

// @Todo 모달 공통 컴포넌트로 만들기
const Header = () => {
  const dispatch = useDispatch();
  const { uid, photoURL } = useSelector(state => state.userInfo);
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    setProfileImg(photoURL);
  }, [photoURL]);

  const navigate = useNavigate();

  const signInOpenModal = () => SetSignInOpen(true);
  const [signInOpen, SetSignInOpen] = useState(false);

  const signUpOpenModal = () => setSignUpOpen(true);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const logOut = async () => {
    navigate("/"); // 로그아웃 시 home으로
    await signOut(auth);
    dispatch(logoutUser());
  };

  return (
    <St.Header>
      <h1 style={{ display: "none" }}>&lt;&gt;Bamboo&lt;&#47;&gt;</h1>
      <Link to={"/"}>
        <St.Logo src={bamboo_logo} alt="Logo" />
      </Link>
      <St.ButtonBox>
        {uid === null ? (
          <Button position={"header"} onClick={signInOpenModal}>
            로그인
          </Button>
        ) : (
          <Button position={"header"} onClick={logOut}>
            로그아웃
          </Button>
        )}
        {signInOpen && <SignInModal SetIsOpen={SetSignInOpen} />}

        {uid === null ? (
          <Button position={"header"} onClick={signUpOpenModal}>
            회원가입
          </Button>
        ) : profileImg === null ? (
          <Link to={`profile/${uid}`}>
            <St.ProfileImg src={basic} alt="프로필이미지" />
          </Link>
        ) : (
          <Link to={`profile/${uid}`}>
            <St.ProfileImg src={profileImg} alt="프로필이미지" />
          </Link>
        )}
        {signUpOpen && <SignUpModal SetIsOpen={setSignUpOpen} />}
      </St.ButtonBox>
    </St.Header>
  );
};

export default Header;
