interface LoadingSpinnerProps {
  className?: string;
}

export default function LoadingSpinner({
  className = "",
}: LoadingSpinnerProps) {
  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <div
        className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
        aria-label="Loading"
      ></div>
    </div>
  );
}
