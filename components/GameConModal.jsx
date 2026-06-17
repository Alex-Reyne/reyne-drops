import { useState, useEffect } from 'react'
import styles from '../styles/GameConModal.module.css'

export default function GameConModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissable, setIsDismissable] = useState(false)

  useEffect(() => {
    // Small delay to let the page load first, then show modal
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    // Prevent dismissal for 2 seconds after page load
    const dismissTimer = setTimeout(() => {
      setIsDismissable(true)
    }, 2000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(dismissTimer)
    }
  }, [])

  const handleClose = () => {
    if (!isDismissable) return
    setIsVisible(false)
  }

  const handleYes = () => {
    localStorage.setItem('gamecon-visitor', 'true')
    window.location.href = 'https://reyneofcolor.com'
  }

  return (
    <>
      {isVisible && (
        <div className={styles.overlay} onClick={handleClose}></div>
      )}

      <div className={`${styles.modal} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.modalContent}>
          <div className={styles.knightLogo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo-knight-white-trans.png"
              alt="Reyne of Color Knight"
              className={styles.knightImage}
            />
          </div>
          <h2 className={styles.title}>Hey there!</h2>
          <p className={styles.question}>Are you visiting from GameCon?</p>

          <div className={styles.buttonGroup}>
            <button className={styles.yesButton} onClick={handleYes}>
              Yes!
            </button>
            <button className={styles.closeButton} onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
