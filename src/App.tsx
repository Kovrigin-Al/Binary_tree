import { useEffect, useRef, useState } from "react";
import { ArcherContainer } from "react-archer";
import Tree from "./Components/Tree";
import { BinaryTree } from "./utils/binaryTreeModel";

const randomNumber = () => {
  const number = Math.floor(Math.random() * 201) - 100;
  return number; // random number between -100 and 100
};

function App() {
  const [countChild, setCountChild] = useState(0);

  const parentNode = useRef<BinaryTree | null>(null);

  const addRandomNode = () => {
    if (!parentNode.current) {
      parentNode.current = new BinaryTree(randomNumber(), 1, "parent");
      setCountChild(1);
      return;
    }
    const number = randomNumber();
    parentNode.current.insert(number);
    setCountChild(countChild + 1);
  };

  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32   ) {
        e.preventDefault();
        addRandomNode();
      }
      console.log("dsfdsf");
    };

    window.addEventListener("keydown", callback);
    return ()=>window.removeEventListener("keydown", callback);
  });

  return (
    <>
      <div
        className="text-center w-full text-white font-bold text-xl my-5"
      >
        Press SpaceBar to randomly generate new Node
      </div>
      {parentNode.current && (
        <ArcherContainer strokeColor="brown">
          <Tree parentNode={parentNode.current} />
        </ArcherContainer>
      )}
    </>
  );
}

export default App;
