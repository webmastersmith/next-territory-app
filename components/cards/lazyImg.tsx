import React, { useEffect, useRef, useState } from 'react'

export const LazyImg = (props: any) => {
  const [inView, setInView] = useState(false)
  const placeholderRef = useRef()
  const placeholder = '/placeholder.jpg'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            obs.disconnect()
          }
        }
      },
      {
        root: null,
        rootMargin: '1000px',
      }
    )
    if (placeholderRef.current) {
      observer.observe(placeholderRef?.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [])

  return inView ? (
    //eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt || ''} />
  ) : (
    //eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      ref={placeholderRef}
      src={placeholder}
      alt={props.alt || ''}
    />
  )
}
