import styled from "styled-components";
import useMediaQueries from "../../hooks/useMediaQueries";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${(props) => (props.isMobile ? "0px" : "100px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  row-gap: ${(props) => (props.isMobile ? "20px" : "50px")};
`;

export const TitleSet = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${(props) =>
    props.isMobile ? "40px 24px" : props.isTablet ? "30px" : "48px"};
  box-sizing: border-box;
  row-gap: 24px;
  font-family: "Montserrat";
  margin-bottom: ${(props) => (props.isMobile ? "20px" : "50px")};
`;

export const Title = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.08em;
  font-weight: 800;
  font-size: ${(props) =>
    props.isMobile ? "24px" : props.isTablet ? "30px" : "38px"};
  color: #0a0b0a;
`;

export const Subtitle = styled.div`
  align-self: stretch;
  position: relative;
  font-size: ${(props) =>
    props.isMobile ? "8px" : props.isTablet ? "14px" : "22px"};
  color: #637d92;
`;

export const Textfiled = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${(props) => (props.isMobile ? "20px 0px" : "0px 20px")};
  box-sizing: border-box;
  text-align: left;
  font-family: Pretendard;
`;

export const Textarea = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${(props) => (props.isMobile ? "0px 24px" : "0px")};
  box-sizing: border-box;
  text-align: left;
  row-gap: 20px;
`;

export const Review = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: #fafafa;
  border: 1px solid #ced7de;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  row-gap: 15px;
  font-size: ${(props) =>
    props.isMobile ? "16px" : props.isTablet ? "18px" : "20px"};
  line-height: ${(props) =>
    props.isMobile ? "24px" : props.isTablet ? "28px" : "30px"};
`;

export const ReviewInput = styled.textarea`
  width: 100%;
  padding: 12px 16px; /* input 박스 내부 여백 설정 */
  color: #000;
  font-size: ${(props) =>
    props.isMobile ? "12px" : props.isTablet ? "12px" : "20px"};
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  line-height: 30px;
  word-wrap: break-word;
  border: none;
  border-radius: 8px;
  background-color: #fafafa;
  box-sizing: border-box;
  resize: none;

  ::placeholder {
    color: #ced7de;
  }

  :focus {
    outline: none;
    border-color: transparent;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: 15px 0;
`;

// 사진 선택시 관련 -> 수정 필요
export const PhotoGrid = styled.div`
  width: 488px;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  display: flex;
`;

export const PhotoBox = styled.div`
  width: 107px;
  height: 107px;
  border-radius: 8px;
  border: 1px solid #ced7de;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
  position: relative;
  overflow: hidden;

  & > div {
    color: #ced7de;
    font-size: 24px;
    font-family: "Noto Sans KR";
    font-weight: 400;
    line-height: 38.83px;
    word-wrap: break-word;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    top: 0;
    left: 0;
  }
`;

export const PhotoInputContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

export const PhotoButton = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px;
  color: #4a5e6d;
  font-size: ${(props) =>
    props.isMobile ? "14px" : props.isTablet ? "14px" : "20px"};
  font-family: "Pretendard";
  line-height: ${(props) =>
    props.isMobile ? "18px" : props.isTablet ? "18px" : "24px"};
  font-weight: 600;
  letter-spacing: 0.4px;
  word-wrap: break-word;
  cursor: pointer;
  text-align: center;
  column-gap: 10px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  input {
    display: none;
  }

  img {
    width: 28px;
    height: 21px;
  }
`;

export const InputButton = styled.button`
  color: #0068ff;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  background-color: transparent;
  border: 1px solid #0068ff;
  border-radius: 100px;
  padding: 8px 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e7ebef;
  }

  &:focus {
    outline: none;
  }
`;

//우측 정렬을 위한 wrapper
export const PasswordWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  width: 290px;
`;

export const PasswordLabel = styled.div`
  color: #757575;
  font-size: ${(props) =>
    props.isMobile ? "12px" : props.isTablet ? "12px" : "16px"};
  font-family: "Pretendard";
  font-weight: 400px;
  line-height: ${(props) =>
    props.isMobile ? "18px" : props.isTablet ? "18px" : "24px"};
  word-wrap: break-word;
  flex-shrink: 0;
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background: white;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  color: #b3b3b3;
  font-size: ${(props) =>
    props.isMobile ? "12px" : props.isTablet ? "12px" : "16px"};
  font-family: "Pretendard";
  font-weight: 400px;
  line-height: ${(props) =>
    props.isMobile ? "18px" : props.isTablet ? "18px" : "24px"};
  word-wrap: break-word;
  box-sizing: border-box;

  ::placeholder {
    color: #b3b3b3;
    text-align: center;
    line-height: 24px;
    word-wrap: break-word;
  }

  :focus {
    outline: none;
    border-color: #92a5b5;
  }
`;

export const Comments = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  text-align: left;
  font-size: ${(props) =>
    props.isMobile ? "18px" : props.isTablet ? "20px" : "22px"};
  color: #323f49;
  font-family: Pretendard;
`;
