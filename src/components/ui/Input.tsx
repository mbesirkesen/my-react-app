import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  error?: string
  helpText?: string
}

export default function Input({
  id,
  label,
  error,
  helpText,
  disabled,
  className = '',
  ...props
}: InputProps) {
  const describedBy = error ? `${id}-error` : helpText ? `${id}-help` : undefined

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        id={id}
        disabled={disabled}
        aria-describedby={describedBy}
        className={`w-full border rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 dark:text-white ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
        } ${disabled ? 'cursor-not-allowed opacity-70' : ''} focus:outline-none focus:ring-2 ${className}`}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={`${id}-help`} className="text-sm text-gray-500 dark:text-gray-400">
          {helpText}
        </p>
      )}
    </div>
  )
}

