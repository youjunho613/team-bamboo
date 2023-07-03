import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query } from "firebase/firestore";
import { db } from "modules/firebase";

import Post from "component/Post/Post";

import styled from "styled-components";
import { Button } from "component/Button/Button.style";
import EditModal from "component/Modal/EditModal";

const Content = () => {
  const param = useParams();
  const [bamboos, setBamboos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const initialValue = [];

      const q = query(collection(db, "feeds"));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(doc => {
        initialValue.push({ id: doc.id, ...doc.data() });
      });

      setBamboos(initialValue);
    };

    fetchData();
  }, []);

  const bamboo = bamboos.find(function (element) {
    return element.id === param.contentId;
  });

  const contentEditOpenModal = () => setContentEditOpen(true);
  const [contentEditOpen, setContentEditOpen] = useState(false);

  return (
    <StMain>
      {bamboo !== undefined && (
        <>
          <Button position={"header"} onClick={contentEditOpenModal}>
            • • •
          </Button>
          {contentEditOpen && (
            <EditModal
              SetIsOpen={setContentEditOpen}
              bamboo={bamboo}
              bamboos={bamboos}
              setBamboos={setBamboos}
            />
          )}

          <Post
            key={bamboo.id}
            title={bamboo.title}
            content={bamboo.content}
            contentId={bamboo.id}
            uid={bamboo.uid}
            displayName={bamboo.displayName}
            photoURL={bamboo.photoURL}
          />
        </>
      )}
    </StMain>
  );
};

const StMain = styled.main`
  display: flex;
  flex-direction: column;

  margin-top: 190px;
`;

export default Content;
