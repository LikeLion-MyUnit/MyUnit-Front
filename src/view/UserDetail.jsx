import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Profile } from "../components/ProfileSettings";
import styles from "../components/ProfileSettings.module.scss";
import { UserContext } from "../provider/UserProvider";

const UserDetail = (props) => {
  const {
    nickname,
    city,
    gender,
    interest,
    mycomment,
    photo,
    portfolio,
    skill,
    user_pk, //oponent's pk value
    my_user_pk,
  } = props.location.state;
  const { isLoggedIn } = useContext(UserContext);

  const image = `${photo}`;
  return (
    <>
      <Profile
        image={image}
        nickname={nickname}
        city={city}
        gender={gender}
        interest={interest}
        mycomment={mycomment}
        skill={skill}
        portfolio={portfolio}
      />
      <Link
        to={
          isLoggedIn
            ? {
                pathname: `/chat`,
                state: {
                  nickname: nickname,
                  photo: photo,
                  receiver_user: user_pk,
                },
              }
            : { pathname: "/login" }
        }
      >
        {my_user_pk !== user_pk && (
          <button className={`${styles.btnEdit} btn-main`}>쪽지보내기</button>
        )}
      </Link>
    </>
  );
};

export default UserDetail;
