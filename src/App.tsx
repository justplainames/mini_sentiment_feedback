import { RatingChips } from "./components/RatingChips";
import { CommentBox } from "./components/CommentBox";
import { SubmitButton } from "./components/SubmitButton";
import { SummaryPanel } from "./components/SummaryPanel";
import { userFeedbackHook } from "./hooks/useFeedbackHook";
import "./App.css";

export default function App() {
  const {
    rating,
    comment,
    locked,
    countdown,
    message,
    error,
    totalSubmissions,
    averageRating,
    recentComments,
    setRating,
    setComment,
    handleSubmit,
  } = userFeedbackHook();

  return (
    <main className="app">
      <h1 className="app__title">Mini Sentiment Feedback</h1>

      <form className="app__form" onSubmit={handleSubmit}>
        <RatingChips value={rating} disabled={locked} onChange={setRating} />

        <CommentBox value={comment} disabled={locked} onChange={setComment} />

        <SubmitButton disabled={locked} countdown={countdown}>
          {locked ? "Please wait..." : "Submit"}
        </SubmitButton>
      </form>

      <div className="feedback-slot" aria-live="polite">
        {message ? <p className="success-toast">{message}</p> : null}
        {error ? <p className="error-toast">{error}</p> : null}
      </div>

      <SummaryPanel
        totalSubmissions={totalSubmissions}
        averageRating={averageRating}
        recentComments={recentComments}
      />
    </main>
  );
}
