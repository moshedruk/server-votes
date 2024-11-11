import { VoteDto } from "../DTOs/votes";
import CandidateModle from "../models/Candidate";
import UserModle from "../models/User";

export const handleNewVote = async (vote: VoteDto) => {
    try {
      await CandidateModle.findByIdAndUpdate(vote.candidateId, {
        $inc: {
          votes: 1,
        },
      });
      await UserModle.findByIdAndUpdate(vote.userId, {
        $set: {
          hasVoted: true,
          votedFor: vote.candidateId,
        },
      });
  
      return {
        status: "DONE",
      };
    } catch (err) {
      return {
        status: "ERROR",
        err: err as Error,
      };
    }
  };