import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 70%;
  font-family: 'Noto Sans KR', sans-serif;
`;

const Title = styled.p`
  font-size: 1.2rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.9rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 1.2rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

// const BoldName = styled.span`
//   font-weight: 900;
//   font-size: 1.2rem;
// `;

const ParentInfo = styled.span`
  font-size: 0.85em;
  opacity: 0.8;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">초대합니다</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up">
        함께 가자,
        <br />
        먼 길
        <br />
        <br />
        너와 함께라면
        <br />
        멀어도 가깝고
        <br />
        <br />
        아름답지 않아도
        <br />
        아름다운 길
        <br />
        <br />
        - 나태주, '먼 길' 중에서
        <br />
        <br />
        두 사람이 함께 걷는 첫 걸음에
        <br />
        소중한 분들을 모시고자 합니다.
        <br />
        <br />
        함께라면, 먼 길도
        <br />
        즐거운 여행이 될 것 같습니다
        <br />
        <br />
        저희의 시작을 함께 축복해 주신다면
        <br /> 
        더 없는 기쁨으로 간직하겠습니다.
        <br />
        <br />
      </Content>
      <GroomBride data-aos="fade-up">
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}<ParentInfo>의 장남</ParentInfo> {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}<ParentInfo>의 장녀</ParentInfo> {BRIDE_NAME}
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
