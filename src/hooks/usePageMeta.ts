import { useEffect } from 'react'

type PageMeta = {
  title: string
  description: string
}

function setMetaDescription(content: string) {
  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'description')
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)

  let og = document.querySelector('meta[property="og:description"]')
  if (!og) {
    og = document.createElement('meta')
    og.setAttribute('property', 'og:description')
    document.head.appendChild(og)
  }
  og.setAttribute('content', content)

  let ogTitle = document.querySelector('meta[property="og:title"]')
  if (!ogTitle) {
    ogTitle = document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    document.head.appendChild(ogTitle)
  }
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    const descTag = document.querySelector('meta[name="description"]')
    const previousDescription = descTag?.getAttribute('content') ?? ''

    setMetaDescription(description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    ogTitle?.setAttribute('content', title)

    return () => {
      document.title = previousTitle
      if (descTag) descTag.setAttribute('content', previousDescription)
    }
  }, [title, description])
}
