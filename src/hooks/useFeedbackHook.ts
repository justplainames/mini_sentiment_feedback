import { useEffect, useState } from "react";
import type { Submission } from "../types";
import { buildSummary } from "../helpers/buildSummaryHelper";

export function userFeedbackHook() {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [locked, setLocked] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!locked) return;

    setCountdown(3);

    const interval = window.setInterval(() => {
      setCountdown((current) => (current > 1 ? current - 1 : current));
    }, 1000);

    const timer = window.setTimeout(() => {
      setLocked(false);
      setCountdown(0);
      setMessage("");
    }, 3000);

    return () => {
      window.clearTimeout(timer);
      window.clearInterval(interval);
    };
  }, [locked]);

  function handleSubmit(e: any) {
    e.preventDefault();

    if (locked) return;

    if (rating === null) {
      setError("Please select a rating before submitting.");
      setMessage("");
      return;
    }

    const nextSubmission: Submission = {
      rating,
      comment: comment.trimEnd(),
      createdAt: Date.now(),
    };

    setSubmissions((current) => [...current, nextSubmission]);
    setMessage("Thank you for your feedback.");
    setError("");
    setLocked(true);
    setRating(null);
    setComment("");
  }

  const { totalSubmissions, averageRating, recentComments } =
    buildSummary(submissions);

  return {
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
  };
}
