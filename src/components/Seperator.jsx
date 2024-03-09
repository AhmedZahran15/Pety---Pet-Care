export default function Separator() {
  return (
    <div className="flex flex-row items-center">
      <hr className="h-[2px] w-1/2 bg-gray-300" />
      <span className=" mx-1 text-lg font-semibold">OR</span>
      <hr className="h-[2px] w-1/2 bg-gray-300" />
    </div>
  );
}
