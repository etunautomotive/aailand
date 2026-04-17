'use client'

export function Input({
  error = false,
  success = false,
  disabled = false,
  errorMessage = '',
  successMessage = '',
  className = '',
  ...props
}) {
  let stateClass = ''

  if (error) {
    stateClass = 'field-error'
  } else if (success) {
    stateClass = 'field-success'
  }

  return (
    <div className="flex flex-col gap-1">
      <input
        className={`input-base ${stateClass} ${disabled ? 'disabled' : ''} ${className}`}
        disabled={disabled}
        {...props}
      />
      {error && errorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
      )}
      {success && successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
    </div>
  )
}
