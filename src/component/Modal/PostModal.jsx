import * as St from "./Modal.style";
import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "modules/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Button } from "component/Button/Button.style";

const PostModal = ({ bamboos, setBamboos, setIsOpen }) => {
  // user redux
  const { uid, displayName, photoURL } = useSelector(state => state.userInfo);

  // modal
  const closeModal = () => setIsOpen(false);

  // input change handler
  const INITIAL = { title: "", content: "" };

  const [content, setContent] = useState({});

  const onChangeHandler = event => {
    const { name, value } = event.target;
    setContent({ ...content, [name]: value });
  };

  // form submit handler
  const onSubmitHandler = async event => {
    event.preventDefault();

    if (uid === null) return alert("로그인이 필요합니다."); // user 유효성 검사

    const newBamboo = { ...content, uid, displayName, photoURL };
    setBamboos(() => [...bamboos, newBamboo]);
    setContent(INITIAL);

    const collectionRef = collection(db, "feeds");
    await addDoc(collectionRef, newBamboo);
    closeModal();
  };

  const inputCaption = name => ({
    name,
    value: content[name],
    required: "required",
    onChange: onChangeHandler
  });

  return (
    <St.Outer>
      <St.Inner>
        <St.Form onSubmit={onSubmitHandler}>
          <St.Label htmlFor="title">제목</St.Label>
          <St.Input {...inputCaption("title")} height={40} />
          <St.Label htmlFor="content">내용</St.Label>
          <St.Input {...inputCaption("content")} height={250} as={"textarea"} />
          <St.Flex>
            <Button position={"modal"} sideMargin={100}>
              작성하기
            </Button>
            <Button position={"modal"} type={"button"} onClick={closeModal} sideMargin={100}>
              닫기
            </Button>
          </St.Flex>
        </St.Form>
      </St.Inner>
    </St.Outer>
  );
};

export default PostModal;
