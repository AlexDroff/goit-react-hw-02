// import css from "./VoteStats.module.css";

// import type { Votes } from "../../types/votes";

// interface VoteStatsProps {
//   votes: Votes;
//   totalVotes: number;
//   positiveRate: number;
// }
// const VoteStats:<VoteStatsProps> = ({ votes, totalVotes, positiveRate }) => {

// function VoteStats() {
//   return (
//     <div className={css.container}>
//       <p className={css.stat}>
//         Good: <strong>0</strong>
//       </p>
//       <p className={css.stat}>
//         Neutral: <strong>0</strong>
//       </p>
//       <p className={css.stat}>
//         Bad: <strong>0</strong>
//       </p>
//       <p className={css.stat}>
//         Total: <strong>0</strong>
//       </p>
//       <p className={css.stat}>
//         Positive: <strong>0%</strong>
//       </p>
//     </div>
//   );
// }

// export default VoteStats;

import type { Votes } from "../../types/votes";
import css from "./VoteStats.module.css";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

function VoteStats({ votes, totalVotes, positiveRate }: VoteStatsProps) {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}

export default VoteStats;
