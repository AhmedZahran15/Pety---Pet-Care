import { teamData } from "../../assets/teamData";
import TeamMember from "./TeamMember";
function TeamSection() {
  return (
    <div className="mt-20 flex w-full flex-col px-8 text-lg font-medium text-neutral-500 md:px-10">
      <div className="mb-14 flex flex-col text-center">
        <h1 className="mb-4 font-fredoka text-5xl font-bold text-neutral-800 ">
          Our Dream Team
        </h1>
        <p className="self-center lg:w-2/3">
          At our company, we have a dedicated and passionate team of individuals
          who are committed to providing the best possible experience for pet
          owners and service providers alike. Our team combines expertise in
          software development, design, and pet care to create a platform that
          meets the diverse needs of our users.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {teamData.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}
export default TeamSection;
