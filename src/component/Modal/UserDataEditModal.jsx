import * as St from "./Modal.style";
import { useState } from "react";
import { auth, storage } from "modules/firebase";
import { Button } from "component/Button/Button.style";
import usePrintError from "component/Hook/usePrintError";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const UserDataEditModal = ({ setIsOpen }) => {
  const navigator = useNavigate();
  const closeModal = () => setIsOpen(false);

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
        <St.Form onSubmit={update}>
          <St.FileLabel htmlFor="photoUrl">프로필 이미지 입력</St.FileLabel>
          <St.Input
            type="file"
            id="photoUrl"
            accept="image/*"
            onChange={onChangeAddFile}
            style={{ display: "none" }}
          ></St.Input>
          <St.Label htmlFor="email">이메일 {requiredPoint}</St.Label>
          <St.Input value={auth.currentUser.email} disabled></St.Input>
          <St.Label htmlFor="displayName">닉네임 </St.Label>
          <St.Input {...inputCaption("text", "displayName")}></St.Input>
          {errorMsg && <St.ErrorMsg>{errorMsg}</St.ErrorMsg>}
          <St.Flex>
            <Button position={"modal"} onClick={update}>
              수정하기
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

export default UserDataEditModal;
