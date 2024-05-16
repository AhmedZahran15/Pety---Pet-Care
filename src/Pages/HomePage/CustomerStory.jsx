import PropTypes from "prop-types";
function CustomerStory({ text, name, title, image }) {
  return (
    <section className="flex basis-1/3 flex-col gap-y-4 rounded-md border-2 border-neutral-300 bg-white p-4 shadow-md shadow-neutral-300">
      <div className="line-clamp-[12] font-['Montserrat'] text-lg">
        {text
          ? text
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorum sequi, distinctio quae vitae beatae quasi animi sit. Cupiditate laboriosam atque nisi sunt velit! Architecto id nihil dolores asperiores nisi!distinctio quae vitae beatae quasi animi sit. Cupiditate laboriosam atque nisi sunt velit! Architecto id nihil dolores asperiores nisi!"}
      </div>
      <div className="flex items-center justify-start gap-3 px-4">
        <img className="h-16 rounded-full" src={image} />
        <div className="flex flex-col gap-0">
          <span className="text-2xl font-semibold">{name}</span>
          <span className="whitespace-pre font-sans text-xl text-neutral-600">
            {title}
          </span>
        </div>
      </div>
    </section>
  );
}
CustomerStory.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default CustomerStory;
