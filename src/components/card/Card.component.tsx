import styled from "styled-components";

const SCardContainer = styled.div`
  position: relative;
  padding: 20px 0;
  width: 100%;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  text-align: center;
  z-index: 5;
`;

const SCardImage = styled.div`
  position: relative;
  background: #fff;
  padding: 5px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 30px;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

export const Card = (user: any) => {
  return (
    <SCardContainer>
      <SCardImage>{user.picture.large}</SCardImage>
    </SCardContainer>
  );
};
