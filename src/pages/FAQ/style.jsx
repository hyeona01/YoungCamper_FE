import React from 'react'
import { styled } from "styled-components";
import useMediaQueries from "../../hooks/useMediaQueries";


export const FAQWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1500px;
  padding: ${(props) =>
    props.isMobile
      ? "52px 24px" /* 모바일 뷰 */
      : props.isTablet
      ? "80px 48px"  /* 태블릿 뷰 */
      : "132px 170px"}; /* 데스크탑 뷰 */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
`

export const FAQBox = styled.div`
  display: flex;
  width: 100%;
  min-width: 240px;
  min-height: 80px;

  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-direction: column;

  border-radius: 8px;
  border: solid 1px #CED7DE;
  background: #FFFFFF;

  cursor: pointer;
`;

export const FAQContent = styled.div`
  display: flex;
  padding: 12px 16px;
  min-height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const FAQTextContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 3px;
`;

export const FAQText1 = styled.div`
  color: #0068FF;
  font-family: "MonRegular";
  font-size: ${(props) => (props.isMobile ? "18px" : "22px")};
  font-weight: ${(props) => (props.isMobile ? "400" : "600")};
  line-height: ${(props) => (props.isMobile ? "22px" : "30px")};
  letter-spacing: ${(props) => (props.isMobile ? "-0.09px" : "-0.22px")};
`;

export const FAQText2 = styled.div`
  color: #0A0B0A;
  font-family: "MonRegular";
  font-size: ${(props) => (props.isMobile ? "18px" : "22px")};
  font-weight: ${(props) => (props.isMobile ? "400" : "600")};
  line-height: ${(props) => (props.isMobile ? "22px" : "30px")};
  letter-spacing: ${(props) => (props.isMobile ? "-0.09px" : "-0.22px")};
  
  a {
    color: #0068FF;
    text-decoration: underline; /* 하이퍼링크 부분에 속성 추가*/
    
    &:hover {
      color: #004aad; /* hover 시 폰트 색상 변경 */ 
    }
  }
`;

export const FAQText3 = styled.div`
  color: #15B097;
  font-family: "MonRegular";
  font-size: ${(props) => (props.isMobile ? "18px" : "22px")};
  font-weight: ${(props) => (props.isMobile ? "400" : "600")};
  line-height: ${(props) => (props.isMobile ? "22px" : "30px")};
  letter-spacing: ${(props) => (props.isMobile ? "-0.09px" : "-0.22px")};
`

export const FAQButton = styled.div`
  display: flex;
  width: ${(props) => (props.isMobile ? "28px" : "46px")};
  height: ${(props) => (props.isMobile ? "28px" : "46px")};
  justify-content: center;
  align-items: center;
`;

export const AnswerBox = styled.div`
  display: flex;
  width: 100%;
  min-height: 80px;
  padding: 12px 16px;
  align-items: center;
  border-radius: 0px 0px 8px 8px;
  border-top: solid 1px #CED7DE;
  background: rgba(0, 104, 255, 0.12);
`;

export const PagenationWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0px;
  justify-content: center;
  gap: 8px;

    button {
      padding: 10px 15px;
      background-color: #fff;
      cursor: pointer;
      border-radius: 10px;
      
      &:hover {
        background-color: #e7ebef;
      }
        
      &.active {
        background-color: #E7EBEF;
        color: #000;
    }
  }
`