import * as St from "./Modal.style";
import { useState } from "react";
import { Button } from "component/Button/Button.style";
import usePrintError from "component/Hook/usePrintError";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, storage } from "modules/firebase";
import { useNavigate } from "react-router-dom";

const SignUpModal = ({ SetIsOpen }) => {
  const navigator = useNavigate();
  const closeModal = () => SetIsOpen(false);

  const [errorMsg, setErrorMsg] = usePrintError();

  const [user, setUser] = useState({});
  const onChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const [imgFile, setImgFile] = useState();
  const onChangeAddFile = event => {
    setImgFile(event.target.files[0]);
  };

  const update = async event => {
    event.preventDefault();
    try {
      const imageRef = ref(storage, `profileImg/${auth.currentUser.uid}`);
      await uploadBytes(imageRef, imgFile);
      const url = await getDownloadURL(imageRef);
      updateProfile(auth.currentUser, {
        displayName: user.displayName,
        photoURL: url
      });
    } catch (error) {
      setErrorMsg(error.code);
    }
  };

  const signUp = async event => {
    event.preventDefault();
    if (user.password !== user.passwordConfirm) return setErrorMsg("비밀번호가 일치하지 않습니다.");

    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      update(event);
    } catch (error) {
      setErrorMsg(error.code);
    }
    navigator(0);
    closeModal();
  };

  const inputCaption = (type, name) => ({
    type,
    name,
    id: name,
    value: user[name],
    onChange
  });

  const requiredPoint = <span style={{ color: "red" }}>*</span>;

  return (
    <St.Outer>
      <St.Inner>
        <St.Form onSubmit={signUp}>
          <St.FileLabel htmlFor="photoUrl">프로필 이미지 입력</St.FileLabel>
          <St.Input
            type="file"
            id="photoUrl"
            accept="image/*"
            onChange={onChangeAddFile}
            style={{ display: "none" }}
          ></St.Input>
          <St.Label htmlFor="email">이메일 {requiredPoint}</St.Label>
          <St.Input {...inputCaption("email", "email")}></St.Input>
          <St.Label htmlFor="password">비밀번호 {requiredPoint}</St.Label>
          <St.Input {...inputCaption("password", "password")}></St.Input>
          <St.Label htmlFor="passwordConfirm">비밀번호 확인 {requiredPoint}</St.Label>
          <St.Input {...inputCaption("password", "passwordConfirm")}></St.Input>
          <St.Label htmlFor="displayName">닉네임 </St.Label>
          <St.Input {...inputCaption("text", "displayName")}></St.Input>
          {errorMsg && <St.ErrorMsg>{errorMsg}</St.ErrorMsg>}
          <St.Flex>
            <Button position={"modal"}>회원가입</Button>
            <Button position={"modal"} type={"button"} onClick={closeModal}>
              닫기
            </Button>
          </St.Flex>
        </St.Form>
      </St.Inner>
    </St.Outer>
  );
};

export default SignUpModal;
