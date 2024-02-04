function CustomerStory({ text, name, title, image }) {
  return (
    <section>
      <div className="md:text-2xl font-['Montserrat'] text-lg">
        {text
          ? text
          : "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorum sequi, distinctio quae vitae beatae quasi animi sit. Cupiditate laboriosam atque nisi sunt velit! Architecto id nihil dolores asperiores nisi!distinctio quae vitae beatae quasi animi sit. Cupiditate laboriosam atque nisi sunt velit! Architecto id nihil dolores asperiores nisi!"}
      </div>

      <div className="mb-10 mt-6 flex items-center justify-start gap-5">
        <img className="xl:h-24 h-20 rounded-full" src={image} />
        <div>
          <span className="block text-2xl font-semibold xl:text-3xl">{name}</span>
          <span className="font-['Product Sans Light'] text-gray-600 whitespace-pre text-xl xl:text-2xl">
            {title}
          </span>
        </div>
      </div>
    </section>
  );
}

export default CustomerStory;
