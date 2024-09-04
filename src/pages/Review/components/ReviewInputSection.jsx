import React, { useState } from "react";
import InputModal from "./InputModal";
import * as S from "./ReviewInputSectionStyle";
import { ReviewValidation } from "../hooks/ReviewValidation";
import useMediaQueries from "../../../hooks/useMediaQueries";
import useImageUpload from "../hooks/useImageUpload";
import { uploadFilesToS3 } from "../hooks/uploadFilesToS3";
import { postReview } from "../../../lib/apis/api/postReview";

// lib(비속어 필터링)
import Filter from "badwords-ko";

const ReviewInputSection = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const filter = new Filter();

  const [review, setReview] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { handleInputButtonClick } = ReviewValidation();

  // 이미지 업로드 훅 사용
  const {
    imagePreviews,
    inputRef,
    handleButtonClick,
    handleFileChange,
    handleRemoveImage,
    uploadedFiles,
    setImagePreviews,
    uploadMessage,
    setUploadMessage,
  } = useImageUpload(5);

  // Review post 처리
  const handleSubmit = async () => {
    handleInputButtonClick(review, password);

    // 필수 입력 확인
    if (!password && !review) {
      setModalMessage(
        "비밀번호와 후기를 작성하지 않았습니다.\n숫자 4자리 비밀번호와 500자 이내의 후기를 작성해주세요."
      );
      setShowModal(true);
      return;
    }

    if (!review) {
      setModalMessage(
        "후기를 작성하지 않았습니다.\n500자 이내 후기를 작성해주세요."
      );
      setShowModal(true);
      return;
    }

    // 리뷰 텍스트 길이 확인
    if (review.length < 10) {
      setModalMessage("10자리 이상 입력해주세요.");
      setShowModal(true);
      return;
    }

    if (!password) {
      setModalMessage(
        "비밀번호를 입력하지 않았습니다.\n숫자 4자리 비밀번호를 입력해주세요."
      );
      setShowModal(true);
      return;
    }

    let fileUrls = [];
    if (uploadedFiles.length > 0) {
      setUploadMessage("이미지 업로드 중입니다...");
      fileUrls = await uploadFilesToS3(uploadedFiles, setUploadMessage);
    }

    const reviewData = {
      password: password,
      content: filter.clean(review),
      imageUrls: fileUrls,
    };

    console.log("Submitting review data:", reviewData);

    try {
      const response = await postReview(reviewData);

      if (response) {
        alert("Review submitted successfully!");
        setReview("");
        setPassword("");
        setImagePreviews([]);
        setUploadMessage("");
      } else {
        setModalMessage("리뷰 제출에 실패했습니다.");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error submitting review:", error);

      // 서버의 상세한 오류 메시지를 모달에 표시
      if (error.response && error.response.data) {
        setModalMessage(
          `오류: ${
            error.response.data.message || "리뷰 제출 중 오류가 발생했습니다."
          }`
        );
      } else {
        setModalMessage("리뷰 제출 중 오류가 발생했습니다.");
      }
      setShowModal(true);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.replace(/\D/g, ""));
  };

  return (
    <S.Textarea $isMobile={isMobile}>
      <S.Review $isMobile={isMobile} $isTablet={isTablet}>
        <S.ReviewInput
          value={review}
          onChange={(e) => setReview(e.target.value)}
          $isMobile={isMobile}
          $isTablet={isTablet}
          maxLength={499}
          placeholder="모든 후기는 익명이며, 500자 이내로 작성해 주세요. (비방, 욕설 등은 숨김처리 됩니다.)"
        />
        <S.ImagePreviewContainer $isMobile={isMobile}>
          {imagePreviews.map((preview, index) => (
            <S.ImagePreviewBox key={index} $isMobile={isMobile}>
              <img
                src={preview}
                alt={`미리보기 ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <S.ImageCanel onClick={() => handleRemoveImage(index)}>
                X
              </S.ImageCanel>
            </S.ImagePreviewBox>
          ))}
        </S.ImagePreviewContainer>

        <S.Divider />
        <S.PhotoInputContainer>
          <S.PhotoButton
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
            onClick={handleButtonClick}
          >
            <img src={`${mediaUrl}Review/gellery.png`} alt="gellery" />
            사진
          </S.PhotoButton>
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            multiple
          />
          <S.InputButton onClick={handleSubmit}>입력</S.InputButton>
        </S.PhotoInputContainer>
      </S.Review>
      <S.PasswordWrapper>
        <S.PasswordContainer>
          <S.PasswordLabel
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
          >
            비밀번호
          </S.PasswordLabel>
          <S.PasswordInput
            value={password}
            onChange={handlePasswordChange}
            $isMobile={isMobile}
            $isTablet={isTablet}
            $isDesktop={isDesktop}
            type="password"
            placeholder="숫자 4자리를 입력해주세요."
            maxLength={4}
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </S.PasswordContainer>
      </S.PasswordWrapper>
      {showModal && (
        <InputModal
          title="입력 오류"
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
      {uploadMessage && <pre>{uploadMessage}</pre>}
    </S.Textarea>
  );
};

export default ReviewInputSection;
