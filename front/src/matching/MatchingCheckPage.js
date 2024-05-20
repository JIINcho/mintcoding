import {useEffect, useState} from "react";
import {getMatching} from "../api/UserData";
import Cookies from "js-cookie";
import MainFooter from "../main/MainFooter";
import "./MatchingCheckPage.css";
import {renderIcon, renderInsta, renderPersonality, renderPurpose} from "../component/renderComponent";

const MatchingCheckPage = () => {
    const [matchingPeople, setMatchingPeople] = useState({});

    useEffect(() => {
        getMatching(Cookies.get("accessToken")).then((res) => {
            console.log(res.data);
            setMatchingPeople(res.data);
        });
    }, []);

    return (
        <div className="MatchingCheckPage">
            <div className="MatchingCheck">
                <div className="matchingCheckTitleDiv">
                    <p className="matchingCheckTitle">매칭이 완료되었습니다 !<br/> 프로필을 보고 수락을 완료해주세요 :)</p>
                </div>
                <div className="peopleDiv">
                    <div className="matchingFace">
                        {renderIcon(matchingPeople.face)}
                    </div>
                    <div className="peopleInfo">
                        <p className="matchingPeopleNickname">{matchingPeople.nickname}</p>
                        <p className="matchingPeopleInfo">가입날짜: 2024.04.15 매칭 완료된 횟수: 6회 신고된 횟수: 0</p>
                    </div>

                </div>
                <hr className="matchingHorizon"/>
                <div className="peopleStatDiv">
                    <div className="peopleStat1Div">
                        <div className="peopleStat">
                            <p>{matchingPeople.height}cm</p>
                        </div>
                        <div className="peopleStat">
                            <p>{matchingPeople.weight}</p>
                        </div>
                        <div className="peopleStat">
                            <p>{matchingPeople.smoke ? "흡연자야!" : "안펴!"}</p>
                        </div>
                    </div>
                    <div className="peopleStat2Div">
                        <div className="peopleStat">
                            <p>{matchingPeople.mbti}</p>
                        </div>
                        <div className="peopleStat">
                            <p>대학생</p>
                        </div>
                        {matchingPeople.occupation === "student" ?
                            (<div className="peopleStat"><p>{matchingPeople.major}</p></div>) : (<></>)
                        }
                    </div>
                    <div className="peopleStat3Div">
                        <div className="peopleStatInsta">
                            {renderInsta(matchingPeople.frequency)}
                        </div>
                    </div>
                    <div className="peopleStat4Div">
                        <div className="peopleStat">
                            {renderPersonality(matchingPeople.personality)}
                        </div>
                        <div className="peoplePurpose">
                            {renderPurpose(matchingPeople.matchingState)}
                        </div>
                    </div>
                    <div className="peopleTextArea">
                        <textarea disabled={true} value={matchingPeople.intro}/>
                    </div>

                    <div className="matchingClickButtonDiv">
                        <div className="matchingClickButton">
                            <button>거절하기</button>
                            <button>수락하기</button>
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
}

export default MatchingCheckPage;