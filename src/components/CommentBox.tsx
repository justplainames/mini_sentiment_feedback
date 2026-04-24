type CommentBoxProps = {
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
};

export function CommentBox({
  value,
  disabled = false,
  onChange,
}: CommentBoxProps) {
  return (
    <label className="comment-box">
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={5}
        placeholder="Enter your comment"
        disabled={disabled}
      />
    </label>
  );
}
