import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Divider } from "antd";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1.2rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const WeddingInfo = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const WeddingDate = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 8px;
  font-weight: 500;
`;

const WeddingDateEn = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0;
`;

const CalendarContainer = styled.div`
  background: linear-gradient(135deg, #fff 0%, #fafafa 100%);
  border-radius: 16px;
  padding: 24px;
  margin: 24px 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const CalendarHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 20px;
`;

const DayHeader = styled.div`
  text-align: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: ${props => props.isWeekend ? 'var(--title-color)' : '#666'};
  padding: 12px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

const CalendarDay = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  ${props => props.isEmpty && `
    visibility: hidden;
  `}
  
  ${props => props.isWeddingDay && `
    background: linear-gradient(135deg, var(--title-color) 0%, #c96a70 100%);
    color: white;
    font-weight: bold;
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(217, 125, 131, 0.4);
    
  `}
  
  ${props => props.isChristmas && `
    color: #e74c3c;
    font-weight: 600;
  `}
  
  ${props => props.isWeekend && !props.isWeddingDay && `
    color: var(--title-color);
    font-weight: 500;
  `}
  
  ${props => props.isRegularDay && `
    color: #555;
  `}
  
  &:hover:not(${props => props.isEmpty}) {
    background: rgba(217, 125, 131, 0.15);
    transform: scale(1.02);
  }
`;

// const CountdownContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 16px;
//   margin: 32px 0;
//   flex-wrap: wrap;
// `;

// const CountdownBox = styled.div`
//   background: white;
//   border-radius: 12px;
//   padding: 20px 16px;
//   text-align: center;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//   min-width: 80px;
// `;

// const CountdownNumber = styled.div`
//   font-size: 2rem;
//   font-weight: bold;
//   color: #333;
//   margin-bottom: 4px;
// `;

// const CountdownLabel = styled.div`
//   font-size: 0.8rem;
//   color: #666;
//   font-weight: 500;
// `;

const CountdownMessage = styled.div`
  text-align: center;
  margin-top: 24px;
  font-size: 1rem;
  color: #333;
  
  .highlight {
    color: var(--title-color);
    font-weight: bold;
  }
`;

const WeddingDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const weddingDate = new Date('2025-12-20T14:00:00');
  const currentDate = new Date();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // 12월 달력 생성
  const generateCalendar = () => {
    const year = 2025;
    const month = 11; // 12월 (0부터 시작)
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = firstDay.getDay(); // 일요일부터 시작
    const daysInMonth = lastDay.getDate();

    const calendar = [];
    
    // 빈 칸들 (이전 달)
    for (let i = 0; i < startDate; i++) {
      calendar.push({ day: '', isEmpty: true });
    }
    
    // 실제 날짜들
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayOfWeek = date.getDay();
      
      // 2025년 12월 공휴일 및 특별한 날들
      const isWeddingDay = day === 20;
      const isChristmas = day === 25;
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // 일요일, 토요일
      
      calendar.push({ 
        day, 
        isWeddingDay, 
        isChristmas,
        isWeekend,
        isRegularDay: !isWeddingDay && !isChristmas
      });
    }
    
    return calendar;
  };

  const calendar = generateCalendar();
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>WEDDING DAY</Title>
      </Divider>
      
      <WeddingInfo>
        <WeddingDate>2025년 12월 20일 토요일 | 오후 2시</WeddingDate>
        <WeddingDateEn>Saturday, December 20, 2025 | PM 2:00</WeddingDateEn>
      </WeddingInfo>

      <CalendarContainer>
        <CalendarHeader>
          {dayNames.map((day, index) => (
            <DayHeader key={day} isWeekend={index === 0 || index === 6}>
              {day}
            </DayHeader>
          ))}
        </CalendarHeader>
        
        <CalendarGrid>
          {calendar.map((item, index) => (
            <CalendarDay
              key={index}
              isEmpty={item.isEmpty}
              isWeddingDay={item.isWeddingDay}
              isChristmas={item.isChristmas}
              isWeekend={item.isWeekend}
              isRegularDay={item.isRegularDay}
            >
              {item.day}
            </CalendarDay>
          ))}
        </CalendarGrid>
      </CalendarContainer>

      {/* <CountdownContainer>
        <CountdownBox>
          <CountdownNumber>{timeLeft.days}</CountdownNumber>
          <CountdownLabel>DAYS</CountdownLabel>
        </CountdownBox>
        <CountdownBox>
          <CountdownNumber>{timeLeft.hours}</CountdownNumber>
          <CountdownLabel>HOURS</CountdownLabel>
        </CountdownBox>
        <CountdownBox>
          <CountdownNumber>{timeLeft.minutes}</CountdownNumber>
          <CountdownLabel>MINUTES</CountdownLabel>
        </CountdownBox>
        <CountdownBox>
          <CountdownNumber>{timeLeft.seconds}</CountdownNumber>
          <CountdownLabel>SECONDS</CountdownLabel>
        </CountdownBox>
      </CountdownContainer> */}

      <CountdownMessage>
        영광 ♥ 미선 결혼식이 <span className="highlight">{timeLeft.days}일</span> 남았습니다
      </CountdownMessage>
    </Wrapper>
  );
};

export default WeddingDay;
