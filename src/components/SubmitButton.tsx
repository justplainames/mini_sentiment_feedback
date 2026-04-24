type SubmitButtonProps = {
  disabled?: boolean
  countdown?: number
  children: string
}

export function SubmitButton({
  disabled = false,
  countdown = 0,
  children,
}: SubmitButtonProps) {
  return (
    <button type="submit" className="submit-button" disabled={disabled}>
      {children}
      {countdown > 0 ? (
        <span className="submit-button__countdown" aria-hidden="true">
          {countdown}
        </span>
      ) : null}
    </button>
  )
}
