import { FC } from "react";
import { BinaryTree } from "../utils/binaryTreeModel";
import Node from "./Node";
import { ArcherElement } from "react-archer";
import { RelationType } from "react-archer/lib/types";



type Props = {
  parentNode: BinaryTree;
};

const defineRelations = (parentNode: BinaryTree) => {
  let result = Array<RelationType>(0);
  if (parentNode.left !== null) {
    result.push({
      targetId: parentNode.left.id,
      targetAnchor: "top",
      sourceAnchor: "bottom",
    });
  }
  if (parentNode.right !== null) {
    result.push({
      targetId: parentNode.right.id,
      targetAnchor: "top",
      sourceAnchor: "bottom",
    });
  }

  return result.length === 0 ? undefined : result;
};

const Tree: FC<Props> = ({ parentNode }) => {
  return (
    <>
      <div className={'flex justify-center'}>
        <ArcherElement
          id={parentNode.id}
          relations={defineRelations(parentNode)}
        >
          <Node className="" value={parentNode.value} />
        </ArcherElement>
      <div className="flex justify-between my-[100px]">
        {parentNode.left && <Tree parentNode={parentNode.left} />}
        {parentNode.right && <Tree parentNode={parentNode.right} />}
      </div>
      </div>
    </>

  );
};
export default Tree;


