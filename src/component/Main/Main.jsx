import * as St from "./Main.style";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "modules/firebase";
import { Button } from "component/Button/Button.style";
import PostModal from "component/Modal/PostModal";
import Post from "component/Post/Post";

const Main = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const openModal = () => SetIsOpen(true);

  const [bamboos, setBamboos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const initialValue = [];

      const q = query(collection(db, "feeds"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => initialValue.push({ ...doc.data(), id: doc.id }));
      setBamboos(initialValue);
    };
    fetchData();
  }, []);

  return (
    <St.Main>
      <Button position={"main"} onClick={openModal} hoverStyle={"shadow"}>
        지금 무슨 생각을 하고 계신가요?
      </Button>
      {isOpen && <PostModal bamboos={bamboos} setBamboos={setBamboos} setIsOpen={SetIsOpen} />}

      {bamboos.map(bamboo => (
        <Post key={bamboo.id} photoURL={bamboo.photoURL} bamboo={bamboo} setBamboos={setBamboos} />
      ))}
    </St.Main>
  );
};

export default Main;
