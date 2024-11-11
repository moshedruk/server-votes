import Candidate from "../models/Candidate";
import CandidateModle from "../models/Candidate";

export const initDatabase = async () => {
    try {
      const cands = [
        {
          name: "John",
          image: "https://randomuser.me/api/portraits/med/men/81.jpg",
        },
        {
          name: "Johnny",
          image: "https://randomuser.me/api/portraits/med/men/13.jpg",
        },
        {
          name: "Johnnyiahoo",
          image: "https://randomuser.me/api/portraits/med/men/83.jpg",
        },
        {
          name: "Johnniel",
          image: "https://randomuser.me/api/portraits/med/men/0.jpg",
        },
        {
          name: "Johnny",
          image: "https://randomuser.me/api/portraits/med/men/6.jpg",
        },
      ];
  
      for (const cand of cands) {
        const newCand = new CandidateModle(cand);
        await newCand.save();
      }
    } catch (err) {
      console.log(
        "Error accured while creating initial state of candidates",
        err
      );
    }
  };
  
  
  export const getCandidateList = async () => {
      try {
          const list = await CandidateModle.find({})
          return list
      } catch (err) {
          console.log(err)
          throw err
      }
  }