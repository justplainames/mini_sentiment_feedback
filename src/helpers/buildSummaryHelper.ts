import type { Submission } from '../types'

export function buildFeedbackSummary(submissions: Submission[]) {
  const totalSubmissions = submissions.length

  const averageRating =
    totalSubmissions === 0
      ? '0.0'
      : (
          submissions.reduce((sum, submission) => sum + submission.rating, 0) /
          totalSubmissions
        ).toFixed(1)

  const recentComments = [...submissions]
    .slice(-3)
    .reverse()
    .map((submission) => submission.comment)
    .filter(Boolean)

  return {
    totalSubmissions,
    averageRating,
    recentComments,
  }
}
