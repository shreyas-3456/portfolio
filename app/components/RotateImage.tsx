'use client'

import { motion } from 'framer-motion'

const RotatingImage = ({ src, alt = 'Rotating Image' }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      style={{ width: '45px', margin: 'auto', display: 'block' }}
      animate={{ rotateY: 360 }}
      transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
    />
  )
}

export default RotatingImage
