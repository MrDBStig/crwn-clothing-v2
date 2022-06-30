import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemWrapper,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const navigateTo = () => navigate(route);
  return (
    <DirectoryItemWrapper onClick={navigateTo}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemWrapper>
  );
};

export default DirectoryItem;
