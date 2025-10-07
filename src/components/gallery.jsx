import React, { useState } from "react";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/Gallery_Photo_1.webp";
import GalleryPhoto2 from "../assets/Gallery_Photo_2.webp";
import GalleryPhoto3 from "../assets/Gallery_Photo_3.webp";
import GalleryPhoto4 from "../assets/Gallery_Photo_4.webp";
import GalleryPhoto5 from "../assets/Gallery_Photo_5.webp";
import GalleryPhoto6 from "../assets/Gallery_Photo_6.webp";

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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 32px;
  
  @media (max-width: 1024px) {
    gap: 10px;
  }
  
  @media (max-width: 768px) {
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    gap: 6px;
  }
  
  /* iPhone 12 Pro Max (428px) 및 iPhone 12 (390px) 대응 */
  @media (max-width: 428px) {
    gap: 4px;
  }
`;

const GridItem = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  z-index: 1001;
  
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  z-index: 1001;
  
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const LeftButton = styled(NavButton)`
  left: 20px;
`;

const RightButton = styled(NavButton)`
  right: 20px;
`;

const images = [
  GalleryPhoto1,
  GalleryPhoto2,
  GalleryPhoto3,
  GalleryPhoto4,
  GalleryPhoto5,
  GalleryPhoto6,
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image) => {
    const index = images.indexOf(image);
    setCurrentIndex(index);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') closeModal();
  };

  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>GALLERY</Title>
      </Divider>
      
      <GridContainer>
        {images.map((image, index) => (
          <GridItem key={index} onClick={() => openModal(image)}>
            <Image src={image} alt={`Gallery ${index + 1}`} />
          </GridItem>
        ))}
      </GridContainer>

      {selectedImage && (
        <ModalOverlay 
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <LeftButton onClick={goToPrevious}>‹</LeftButton>
            <RightButton onClick={goToNext}>›</RightButton>
            <ModalImage src={selectedImage} alt="Full size" />
          </ModalContent>
        </ModalOverlay>
      )}
    </Wrapper>
  );
};

export default Gallery;
