interface ErrorMessageProps {
  message: string;
}

export default function BookErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div
      className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded"
      role="alert"
      aria-live="assertive"
    >
      {message}
    </div>
  );
}
