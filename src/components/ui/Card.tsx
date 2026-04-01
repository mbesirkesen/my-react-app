import React from 'react'

type CardVariant = 'elevated' | 'outlined' | 'filled'

interface CardProps {
  title?: string
  children: React.ReactNode
  image?: string
  imageAlt?: string
  footer?: React.ReactNode
  variant?: CardVariant
}

export default function Card({
  title,
  children,
  image,
  imageAlt,
  footer,
  variant = 'elevated',
}: CardProps) {
  const variants: Record<CardVariant, string> = {
    elevated: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg',
    outlined: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700',
    filled: 'bg-gray-100 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700',
  }

  return (
    <div className={`rounded-lg overflow-hidden transition-shadow ${variants[variant]}`}>
      {image && <img src={image} alt={imageAlt ?? ''} className="w-full h-48 object-cover" />}
      <div className="p-4">
        {title && <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>}
        <div className="text-gray-600 dark:text-gray-300">{children}</div>
      </div>
      {footer && <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">{footer}</div>}
    </div>
  )
}

