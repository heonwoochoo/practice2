import styled from "styled-components";
import { useRecoilState } from "recoil";
import { treeLevelState } from "../atom";

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 170px;
  background-color: rgba(1, 1, 1, 0.5);
  padding: 10px;
  border-radius: 10px;
`;

const ControllerBox = styled.span`
  display: flex;
  justify-content: space-between;
`;

const ControllerName = styled.h3`
  font-size: 0.8rem;
  color: white;
`;

const BtnBox = styled.div``;

const Btn = styled.button`
  background-color: white;
  font-size: 0.8rem;
  border: none;
  margin: 3px;
  border-radius: 3px;
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

function Controller() {
  const [treeLevel, setTreeLevel] = useRecoilState(treeLevelState);

  const clickBtnUp = () => setTreeLevel((level) => level + 1);
  const clickBtnDown = () => {
    if (treeLevel > 0) setTreeLevel((level) => level - 1);
  };

  return (
    <Container>
      <ControllerBox>
        <ControllerName>Tree Level : {treeLevel}</ControllerName>
        <BtnBox>
          <Btn onClick={clickBtnDown}>-1</Btn>
          <Btn onClick={clickBtnUp}>+1</Btn>
        </BtnBox>
      </ControllerBox>
    </Container>
  );
}

export default Controller;
