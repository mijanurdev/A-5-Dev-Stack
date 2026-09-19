const Loading = () => {
  return (
    <div
      role="status"
      className="flex min-h-60 items-center justify-center gap-3 font-sans text-sm text-muted"
    >
      <span className="loading loading-spinner loading-md text-brand-violet"></span>

      <span>Loading technologies...</span>
    </div>
  );
};

export default Loading;
