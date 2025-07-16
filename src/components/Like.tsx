import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = () => {
  const [status, setStatus] = useState(false);
  if (status)
    return <AiFillHeart color="red" onClick={() => setStatus(false)} />;
  else return <AiOutlineHeart color="red" onClick={() => setStatus(true)} />;
};

export default Like;
