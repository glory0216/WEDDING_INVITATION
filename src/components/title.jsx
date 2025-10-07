import React from "react";
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
import BackgroundVideo from "../assets/BackgroundVideo_Sunny.mp4";
import GroovePaper from "../assets/GroovePaper.png";

const Layout = styled.div`
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const VideoBackground = styled.video`
  width: 100%;
`;

const WeddingInvitation = styled.p`
  font-size: 0.825rem;
  opacity: 0.45;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  opacity: 0.9;
  margin: 0 40px 24px 40px;
  letter-spacing: 0.05em;
  line-height: 1.5;
  color: var(--title-color);
`;

const Separator = styled.span`
  margin: 0 20px;
  opacity: 0.6;
`;

const Schedule = styled.p`
  font-size: 1.2rem;
  opacity: 0.65;
  margin-bottom: 24px;
`;
const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
        <GroomBride>
          이영광<Separator>|</Separator>박미선
        </GroomBride>
      </TitleWrapper>
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src={BackgroundVideo} type="video/mp4" />
      </VideoBackground>
      <TitleWrapper>
        <Schedule style={{ fontSize: "1.0rem" }}>
            {WEDDING_DATE}
            <br />
            {WEDDING_LOCATION}
        </Schedule>
      </TitleWrapper>
    </Layout>
  );
};

export default Title;
