import { Circle } from "better-react-spinkit";
import styled from "styled-components";

function Loading() {
  return (
    <LoadingContainer>
      <Circle color="#3CBC28" size={60} />
    </LoadingContainer>
  );
}

export default Loading;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
