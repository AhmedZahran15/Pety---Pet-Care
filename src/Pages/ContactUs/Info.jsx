function Info() {
  return (
    <div className="flex w-full flex-col gap-y-12">
      <div className="flex w-fit flex-col gap-y-4">
        <p className="font-fredoka text-2xl font-bold text-neutral-800 md:text-5xl">
          Contact Us
        </p>
        <p className="text-lg font-medium text-neutral-500">
          Email, call, or complete the form to learn how
          <br />
          <span className="font-bold text-neutral-800">PETY</span> can solve
          your Pets problem.
        </p>
        <p className="text-xl font-medium text-neutral-800">info@pety.io</p>
      </div>
      <div className="flex flex-col flex-wrap gap-5 xl:flex-row xl:flex-nowrap">
        <div className=" font-medium text-neutral-500 xl:basis-1/3">
          <p className="mb-2 font-bold text-neutral-800">Customer Support</p>
          Our support team is available around the clock to address any concerns
          or queries you may have.
        </div>
        <div className="  font-medium text-neutral-500 xl:basis-1/3">
          <p className="mb-2 font-bold text-neutral-800">
            Feedback and Suggestions
          </p>
          Wo valve your feedback and are continuously working to improve petty.
          Your inputs crucial in shaping th future of petty.
        </div>
        <div className="  font-medium text-neutral-500 xl:basis-1/3">
          <p className="mb-2 font-bold text-neutral-800">Media Inquiries</p>
          For media-related questions or press inquiries, please contact us
          media@petyapp.com
        </div>
      </div>
    </div>
  );
}

export default Info;
