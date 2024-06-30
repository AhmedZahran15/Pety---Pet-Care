function ThreeDots() {
  return (
    <div className="flex flex-row items-center gap-x-2">
      <div className="rounded-full border border-neutral-300 bg-neutral-200 p-2">
        <img
          src="/images/homepage/chatBot.png"
          className="h-6 w-6"
          alt="PetBot"
        />
      </div>
      <div className="flex h-fit items-center justify-center space-x-2 rounded-full border border-neutral-400 bg-neutral-100 px-2 py-1.5">
        <div className="h-3 w-3 animate-bounce rounded-full bg-neutral-500 [animation-delay:-0.3s]"></div>
        <div className="h-3 w-3 animate-bounce rounded-full bg-neutral-500 [animation-delay:-0.15s]"></div>
        <div className="h-3 w-3 animate-bounce rounded-full bg-neutral-500"></div>
      </div>
    </div>
  );
}

export default ThreeDots;
