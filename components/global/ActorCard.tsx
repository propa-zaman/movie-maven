import { IActorResponse } from "@/interfaces/actor.response.interface";
import { colors } from "@/constants/colors";
import Image from "next/image";

type ActorCardProps = {
  actor: IActorResponse;
};

const ActorCard = ({ actor }: ActorCardProps) => {
  return (
    <div className="w-full pr-4 sm:pr-3 flex flex-col items-center text-center">
      {/* Actor Image */}
      <div className="w-[120px] h-[120px] sm:w-[100px] sm:h-[100px] relative overflow-hidden rounded-full border-4 border-[#D8125B] shadow-lg">
        <Image
          loading="lazy"
          style={{ objectFit: "cover" }}
          className="rounded-full"
          fill
          src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
          alt={actor.name}
        />
      </div>

      {/* Actor Info */}
      <div className="py-4 w-full">
        <h4
          className={`text-[14px] font-bold text-ellipsis overflow-hidden whitespace-nowrap dark:text-white ${colors.title}`}
        >
          {actor.name}
        </h4>
        <p className="text-[12px] text-gray-400 mt-1 font-normal">as {actor.character}</p>
      </div>
    </div>
  );
};

export default ActorCard;
