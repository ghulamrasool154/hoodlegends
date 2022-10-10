import "./TokenUtility.css";
import utls from "../../assets/images/utlity--popup--gr.png";
import { useContext } from "react";
import { contentCreate } from "../../context/reducer/UseReducer";

const TokenUtility = ({ hanldeUtilisPop }) => {
  const data = useContext(contentCreate);

  return (
    <section
      className={
        data.state.utilesPop
          ? "TokenUtility--page --animtion"
          : "TokenUtility--page  "
      }
    >
      <div
        className="token---overlay--filter"
        onClick={() => hanldeUtilisPop()}
      ></div>
      {/* <div
        className={
          data.state.utilesPop ? "util--page  --animtion" : "util--page "
        }
      ></div> */}
      <div
        className="container-fluid"
        onClick={() => console.log("container-fluid")}
      >
        <div className="row">
          <div className="col">
            <div className="tokenutility--content">
              <div className="t--content-top">
                <h3>Token with true utility</h3>
                <div className="t--top--img">
                  <img src={utls} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="t--content-bottom">
                <h3>STAKED FOR VOTING TICKETS</h3>
                <p>
                  The primary use of $LEGEND token is to be staked by voters in{" "}
                  <br />
                  the Hood Legends ecosystem to be able to vote in contests.
                </p>
                <h3>STAKED FOR VIEWING ACCESS</h3>
                <p>
                  People who wish to watch the contests taking place on the Hood
                  Legends platform must stake a number of $LEGEND tokens, higher
                  number of tokens are requireed to be staked to watch top
                  ranking contests.
                </p>
                <h3>STAKED FOR GOVERNANCE</h3>
                <p>
                  Users who wish to contribute in Hood Legends development plans
                  and direction can do so by staking their tokens. Voting power
                  is based on the amount and duration of the stake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenUtility;
