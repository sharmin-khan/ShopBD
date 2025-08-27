const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <h2 className="text-center">Loading...</h2>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-xl"></span>
      </div>
    </div>
  );
};

export default Loading;
