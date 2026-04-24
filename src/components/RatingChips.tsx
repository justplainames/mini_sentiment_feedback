type RatingChipsProps = {
  value: number | null
  disabled?: boolean
  onChange: (rating: number) => void
}

const ratings = [1, 2, 3, 4, 5]

export function RatingChips({
  value,
  disabled = false,
  onChange,
}: RatingChipsProps) {
  return (
    <fieldset className="rating-chips" disabled={disabled}>
      <div role="radiogroup" aria-label="Rating">
        {ratings.map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => onChange(rating)}
            aria-pressed={value === rating}
          >
            {rating}
          </button>
        ))}
      </div>
    </fieldset>
  )
}
