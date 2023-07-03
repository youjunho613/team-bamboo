import * as St from "./Post.style";
import React, { useEffect, useState } from "react";
import { db } from "modules/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import EditModal from "component/Modal/EditModal";
import basic from "assets/basic.jpg";
import { useSelector } from "react-redux";

const Post = ({ photoURL, bamboo, setBamboos }) => {
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    setProfileImg(photoURL);
  }, [photoURL]);

  useEffect(() => {
    const fetchData = async () => {
      const initialValue = [];

      const q = query(collection(db, "feeds"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        initialValue.push({ ...doc.data(), id: doc.id });
      });
      setBamboos(initialValue);
    };
    fetchData();
  }, [setBamboos]);

  const { uid } = useSelector(state => state.userInfo);
  const contentEditOpenModal = () => {
    if (uid === null) {
      alert("로그인이 필요합니다.");
    } else if (uid !== bamboo.uid) {
      alert("게시물을 작성한 유저가 아닙니다.");
    } else {
      setContentEditOpen(true);
    }
  };

  const [contentEditOpen, setContentEditOpen] = useState(false);

  return (
    <St.BambooCard>
      <St.Flex>
        {profileImg === null ? (
          <St.ProfilePhoto src={basic} alt="프로필이미지" />
        ) : (
          <St.ProfilePhoto src={profileImg} alt="프로필이미지" />
        )}
        <St.P fontSize={20}>{bamboo.displayName}</St.P>
        <St.Button onClick={contentEditOpenModal}>{/* 모달 버튼 */}</St.Button>
        {contentEditOpen && (
          <EditModal SetIsOpen={setContentEditOpen} bamboo={bamboo} setBamboos={setBamboos} />
        )}
      </St.Flex>
      <St.P fontSize={30}>{bamboo.title}</St.P>
      <St.P fontSize={20}>{bamboo.content}</St.P>
    </St.BambooCard>
  );
};

export default Post;
