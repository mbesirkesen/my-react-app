import React from 'react'

type AlertVariant = 'info' | 'success' | 'warning' | 'error'

interface AlertProps {
  children: React.ReactNode
  variant?: AlertVariant
  title?: string
  dismissible?: boolean
  onDismiss?: () => void
}

export default function Alert({
  children,
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
}: AlertProps) {
  const variants: Record<AlertVariant, string> = {
    info: 'bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-950 dark:text-blue-200',
    success: 'bg-green-50 border-green-500 text-green-800 dark:bg-green-950 dark:text-green-200',
    warning: 'bg-amber-50 border-amber-500 text-amber-800 dark:bg-amber-950 dark:text-amber-200',
    error: 'bg-red-50 border-red-500 text-red-800 dark:bg-red-950 dark:text-red-200',
  }

  return (
    <div role="alert" className={`border-l-4 rounded-r-lg p-4 ${variants[variant]}`}>
      <div className="flex justify-between items-start gap-4">
        <div>
          {title && <p className="font-semibold mb-1">{title}</p>}
          <p className="text-sm">{children}</p>
        </div>
        {dismissible && (
          <button type="button" onClick={onDismiss} className="opacity-60 hover:opacity-100" aria-label="Kapat">
            &#10005;
          </button>
        )}
      </div>
    </div>
  )
}

