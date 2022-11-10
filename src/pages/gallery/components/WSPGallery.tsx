import React, { useState } from 'react'
import { IGallery } from '../../../models/Gallery'

const WSPGallery: React.FC<{ galleryImages: IGallery }> = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = (index: number) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
        ? setSlideNumber(galleryImages.gallery.length - 1)
        : setSlideNumber(slideNumber - 1)
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.gallery.length
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1)
  }

  return (
      <div>
        {openModal &&
            <div className='sliderWrap'>
            <span className="material-icons btnClose" onClick={handleCloseModal}>
          close
          </span>
              <span className="material-icons btnNext" onClick={prevSlide}>
          navigate_next
          </span>
              <span className="material-icons btnPrev" onClick={nextSlide}>
          navigate_before
          </span>

              <div className='fullScreenImage'>
                <img src={galleryImages.gallery[slideNumber].original} alt='' />
              </div>
            </div>
        }

        <div className='galleryWrap'>
          {
              galleryImages && galleryImages.gallery.map((slide, index: number) => {
                return (
                    <div
                        className='single'
                        key={index}
                        onClick={() => handleOpenModal(index)}
                    >
                      <img src={slide.thumbnail} alt='' />
                    </div>
                )
              })
          }
        </div>
      </div>
  )
}

export default WSPGallery