import PropTypes from "prop-types";
function CustomerStory({ text, name, title, image }) {
  return (
    <section className="flex flex-col gap-y-4 rounded-md border-2 border-neutral-300 bg-white p-4">
      <div className="font-['Montserrat'] text-lg md:text-2xl">
        {text
          ? text
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorum sequi, distinctio quae vitae beatae quasi animi sit. Cupiditate laboriosam atque nisi sunt velit! Architecto id nihil dolores asperiores nisi!distinctio quae vitae beatae quasi animi sit. Cupiditate laboriosam atque nisi sunt velit! Architecto id nihil dolores asperiores nisi!"}
      </div>
      <div className="flex items-center justify-start gap-5">
        <img className="h-20 rounded-full" src={image} />
        <div>
          <span className="block text-2xl font-semibold">{name}</span>
          <span className="font-['Product Sans Light'] whitespace-pre text-xl text-neutral-600">
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
