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

const Content = styled.div`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const TransportSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0px;
  padding: 20px 0;
  border-bottom: 2px solid #ccc;
  
  &:first-child {
    margin-top: 0;
    border-top: 2px solid #ccc;
  }
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const TransportContent = styled.div`
  flex: 1;
  text-align: left;
`;

const TransportTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 12px 0;
`;

const TransportDetails = styled.div`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #444;
  font-weight: 500;
`;

const ParkingInfo = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 12px;
  padding: 20px;
  margin-top: 24px;
  border-left: 4px solid var(--title-color);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
`;

const ParkingTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 12px 0;
`;

const ParkingDetails = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #444;
  font-weight: 500;
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
        <TransportSection>
          <TransportContent>
            <TransportTitle>지하철</TransportTitle>
            <TransportDetails>
              강남구청역 3-1번 출구로 나와서 <br />
              좌측 방향으로 570m 도보 후 <br />
              좌측 건물
            </TransportDetails>
          </TransportContent>
        </TransportSection>

        <TransportSection>
          <TransportContent>
            <TransportTitle>자가용</TransportTitle>
            <TransportDetails>
              '더채플앳 청담' 검색<br />
              주소: 서울특별시 강남구 선릉로 757
            </TransportDetails>
          </TransportContent>
        </TransportSection>

        <TransportSection>
          <TransportContent>
            <TransportTitle>셔틀버스</TransportTitle>
            <TransportDetails>
              강남구청역 3번 출구 앞 <br />  
              (10분 간격 운행)
            </TransportDetails>
          </TransportContent>
        </TransportSection>

        <TransportSection>
          <TransportContent>
            <TransportTitle>버스</TransportTitle>
            <TransportDetails>
              간선 : 301, 342, 472 <br /> 
              지선 : 3011, 4312 <br />
              영동고교 앞 하차 후 학동사거리 방면 100m내 건물
            </TransportDetails>
          </TransportContent>
        </TransportSection>

        <ParkingInfo>
          <ParkingTitle>주차 안내</ParkingTitle>
          <ParkingDetails>
            1시간 30분 무료 자동 적용<br />
            초과시 10분당 1,000원 주차비 발생
          </ParkingDetails>
        </ParkingInfo>
      </Content>
    </Wrapper>
  );
};

export default Location;