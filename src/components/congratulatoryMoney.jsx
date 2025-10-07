import React, { useState } from "react";
import { Button, Divider, message } from "antd";
import { DownOutlined, UpOutlined, CopyOutlined } from "@ant-design/icons";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import Flower from "../assets/flower3.png";
import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  GROOM_FATHER_NAME,
  GROOM_FATHER_ACCOUNT_NUMBER,
  GROOM_MOTHER_NAME,
  GROOM_MOTHER_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
  BRIDE_FATHER_NAME,
  BRIDE_FATHER_ACCOUNT_NUMBER,
  BRIDE_MOTHER_NAME,
  BRIDE_MOTHER_ACCOUNT_NUMBER,
} from "../../config";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-bottom: 18px;
  width: 70%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;
`;

const SubContent = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;
`;

const ButtonWrap = styled.div`
  margin-bottom: 3.125rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

const ContactButton = styled.div`
  width: 10.75rem;
  border: 1px solid #efddde;
  padding: 2.188rem 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const ExpandableSection = styled.div`
  margin-top: 24px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const ExpandableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: #f8f9fa;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  
  &:hover {
    background: #e9ecef;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
   
  &:focus {
    background: #e9ecef;
    box-shadow: 0 0 0 3px rgba(66, 139, 202, 0.3);
  }
`;

const ExpandableTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const ExpandableContent = styled.div`
  padding: ${props => props.isOpen ? '20px' : '0 20px'};
  background: white;
  border-top: ${props => props.isOpen ? '1px solid #e0e0e0' : 'none'};
  max-height: ${props => props.isOpen ? '1000px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-out;
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
`;

const AccountItem = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const AccountHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const AccountName = styled.div`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`;

const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  position: relative;
`;

const BankName = styled.div`
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
  margin-bottom: 8px;
`;

const AccountNumber = styled.div`
  font-family: 'Courier New', monospace;
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const CopyButton = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 0.8rem;
  height: 28px;
  padding: 0 8px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #d9d9d9;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #40a9ff;
    color: #40a9ff;
  }
`;

const ArrowIcon = styled.div`
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  return (
    <Wrapper>
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <Title style={{ fontSize: "1.2rem" }}>마음 전하실 곳</Title>
      </Divider>
      <Image src={Flower} />

      <ExpandableSection>
        <ExpandableHeader 
          onClick={() => setGroomVisible(!groomVisible)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setGroomVisible(!groomVisible);
            }
          }}
          tabIndex={0}
          role="button"
          aria-expanded={groomVisible}
          aria-controls="groom-accounts"
        >
          <ExpandableTitle>신랑측 계좌번호</ExpandableTitle>
          <ArrowIcon isOpen={groomVisible}>
            <DownOutlined />
          </ArrowIcon>
        </ExpandableHeader>
        <ExpandableContent isOpen={groomVisible} id="groom-accounts">
          <AccountItem>
            <AccountHeader>
              <AccountName>신랑</AccountName>
              <AccountName>이영광</AccountName>
            </AccountHeader>
            <AccountInfo>
              <BankName>신한은행</BankName>
              <AccountNumber>{GROOM_ACCOUNT_NUMBER}</AccountNumber>
              <CopyToClipboard
                text={GROOM_ACCOUNT_NUMBER}
                onCopy={() => message.success("계좌번호가 복사되었습니다.")}
              >
                <CopyButton>
                  <CopyOutlined />
                </CopyButton>
              </CopyToClipboard>
            </AccountInfo>
          </AccountItem>
          <AccountItem>
            <AccountHeader>
              <AccountName>신랑 아버지</AccountName>
              <AccountName>{GROOM_FATHER_NAME}</AccountName>
            </AccountHeader>
            <AccountInfo>
              <BankName>국민은행</BankName>
              <AccountNumber>{GROOM_FATHER_ACCOUNT_NUMBER}</AccountNumber>
              <CopyToClipboard
                text={GROOM_FATHER_ACCOUNT_NUMBER}
                onCopy={() => message.success("계좌번호가 복사되었습니다.")}
              >
                <CopyButton>
                  <CopyOutlined />
                </CopyButton>
              </CopyToClipboard>
            </AccountInfo>
          </AccountItem>
          <AccountItem>
            <AccountHeader>
              <AccountName>신랑 어머니</AccountName>
              <AccountName>{GROOM_MOTHER_NAME}</AccountName>
            </AccountHeader>
            <AccountInfo>
              <BankName>국민은행</BankName>
              <AccountNumber>{GROOM_MOTHER_ACCOUNT_NUMBER}</AccountNumber>
              <CopyToClipboard
                text={GROOM_MOTHER_ACCOUNT_NUMBER}
                onCopy={() => message.success("계좌번호가 복사되었습니다.")}
              >
                <CopyButton>
                  <CopyOutlined />
                </CopyButton>
              </CopyToClipboard>
            </AccountInfo>
          </AccountItem>
        </ExpandableContent>
      </ExpandableSection>

      <ExpandableSection>
        <ExpandableHeader 
          onClick={() => setBrideVisible(!brideVisible)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setBrideVisible(!brideVisible);
            }
          }}
          tabIndex={0}
          role="button"
          aria-expanded={brideVisible}
          aria-controls="bride-accounts"
        >
          <ExpandableTitle>신부측 계좌번호</ExpandableTitle>
          <ArrowIcon isOpen={brideVisible}>
            <DownOutlined />
          </ArrowIcon>
        </ExpandableHeader>
        <ExpandableContent isOpen={brideVisible} id="bride-accounts">
          <AccountItem>
            <AccountHeader>
              <AccountName>신부</AccountName>
              <AccountName>박미선</AccountName>
            </AccountHeader>
            <AccountInfo>
              <BankName>신한은행</BankName>
              <AccountNumber>{BRIDE_ACCOUNT_NUMBER}</AccountNumber>
              <CopyToClipboard
                text={BRIDE_ACCOUNT_NUMBER}
                onCopy={() => message.success("계좌번호가 복사되었습니다.")}
              >
                <CopyButton>
                  <CopyOutlined />
                </CopyButton>
              </CopyToClipboard>
            </AccountInfo>
          </AccountItem>
          <AccountItem>
            <AccountHeader>
              <AccountName>신부 아버지</AccountName>
              <AccountName>{BRIDE_FATHER_NAME}</AccountName>
            </AccountHeader>
            <AccountInfo>
              <BankName>국민은행</BankName>
              <AccountNumber>{BRIDE_FATHER_ACCOUNT_NUMBER}</AccountNumber>
              <CopyToClipboard
                text={BRIDE_FATHER_ACCOUNT_NUMBER}
                onCopy={() => message.success("계좌번호가 복사되었습니다.")}
              >
                <CopyButton>
                  <CopyOutlined />
                </CopyButton>
              </CopyToClipboard>
            </AccountInfo>
          </AccountItem>
          <AccountItem>
            <AccountHeader>
              <AccountName>신부 어머니</AccountName>
              <AccountName>{BRIDE_MOTHER_NAME}</AccountName>
            </AccountHeader>
            <AccountInfo>
              <BankName>신한은행</BankName>
              <AccountNumber>{BRIDE_MOTHER_ACCOUNT_NUMBER}</AccountNumber>
              <CopyToClipboard
                text={BRIDE_MOTHER_ACCOUNT_NUMBER}
                onCopy={() => message.success("계좌번호가 복사되었습니다.")}
              >
                <CopyButton>
                  <CopyOutlined />
                </CopyButton>
              </CopyToClipboard>
            </AccountInfo>
          </AccountItem>
        </ExpandableContent>
      </ExpandableSection>
    </Wrapper>
  );
};

export default CongratulatoryMoney;