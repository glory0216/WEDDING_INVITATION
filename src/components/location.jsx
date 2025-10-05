import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // 네이버맵 임베드 방식으로 지도 표시
  useEffect(() => {
    const mapContainer = document.getElementById('naverMap');
    if (mapContainer) {
      // 네이버맵 임베드 지도
      mapContainer.innerHTML = `
        <iframe 
          src="https://map.naver.com/v5/search/%EB%8D%94%EC%B1%84%ED%94%8C%EC%95%B3%20%EC%B2%AD%EB%8B%B4?c=15,0,0,0,dh"
          width="100%" 
          height="360" 
          frameborder="0" 
          style="border:0; border-radius: 8px;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `;
    }
  }, []);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />
      <Map id="naverMap"></Map>
      <Content>
        서울 강남구 선릉로 757
        <br />
        더채플앳 청담 3층 커티지홀
        <br />
        <br />
        <Title>버스 이용 시</Title>
        <br />
        <br />
        간선 : 301, 342, 472 / 지선 : 3011, 4312
        <br />
        영동고교 앞 하차 후 학동사거리 방면 100m내 건물
        <br />
        <br />
        <Title>지하철 이용 시</Title>
        <br />
        <br />
        7호선, 수인분당선 강남구청역 3-1번 출구로 나와
        <br />
        좌측 방향으로 570m 도보 후 좌측 건물
        <br />
        <br />
        <Title>셔틀버스 이용 시</Title>
        <br />
        <br />
        강남구청역 3번 출구 (7호선, 수인분당선) 앞
        <br />
        <br />
        <Title>자가용 이용 시</Title>
        <br />
        <br />
        영동대교 방면 : 영동대교 남단에서 청담사거리 방면 -> 학동사거리 방면 1.5km 직진 -> 학동사거리에서 강남구청 방면으로 좌회전 후 50m 앞 우측 건물
        <br />
        성수대교 방면 : 성수대교 남단에서 도산공원 방면 1.5km 직진 -> 도산공원사거리에서 영동대교 방면 좌회전 -> 학동사거리에서 강남구청 방면으로 우회전 후 50m 앞 우측 건물
      </Content>
    </Wrapper>
  );
};

export default Location;