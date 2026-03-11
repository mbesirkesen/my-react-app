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

export const Card: React.FC<CardProps> = ({
  title,
  children,
  image,
  imageAlt,
  footer,
  variant = 'elevated',
}) => {
  const variants: Record<CardVariant, string> = {
    elevated: 'bg-white dark:bg-gray-800 shadow-md hover:shadow-lg',
    outlined:
      'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    filled: 'bg-gray-100 dark:bg-gray-800',
  }

  return (
    <div
      className={`rounded-xl overflow-hidden transition-shadow ${variants[variant]}`}
    >
      {image && (
        <img
          src={image}
          alt={imageAlt ?? ''}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5">
        {title && (
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h3>
        )}
        <div className="text-gray-600 dark:text-gray-400">{children}</div>
      </div>
      {footer && (
        <div className="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  )
}

