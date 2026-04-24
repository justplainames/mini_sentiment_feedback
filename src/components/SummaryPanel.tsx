type SummaryPanelProps = {
  totalSubmissions: number
  averageRating: string
  recentComments: string[]
}

export function SummaryPanel({
  totalSubmissions,
  averageRating,
  recentComments,
}: SummaryPanelProps) {
  return (
    <section className="summary-panel">
      <h2>Summary</h2>
      <p>Total submissions: {totalSubmissions}</p>
      <p>Average rating: {averageRating}</p>
      <div className="summary-panel__divider" aria-hidden="true" />

      {recentComments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {recentComments.map((item, index) => (
            <li key={`${item}-${index}`}>
              <span className="summary-panel__comment">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
