import React from "react";
import Card from "../card/card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RandomUser() {
  const [user, setuser] = useState();

  useEffect(() => {
    let subscribed = true;

    if (subscribed) {
      axios
        .get("https://randomuser.me/api/")
        .then((res) => {
          setuser(res.data.results);
        })
        .catch((err) => console.log(err.response));
    }

    return () => {
      subscribed = false;
    };
  }, []);


  return (
    <div>
      {user &&
        user.map((info, index) => {
          const name = info.name.title.concat(
            " ",
            info.name.first,
            " ",
            info.name.last
          );
          const dob = new Date(info.dob.date).toLocaleDateString();
          const address = info.location.city.concat(
            ",",
            info.location.state,
            ",",
            info.location.country
          );

          return (
            <Card
              key={index}
              name={name}
              email={info.email}
              pp={info.picture.large}
              dob={dob}
              address={address}
              phoneNumber={info.cell}
              dpassword={info.login.password}
              password={info.login.md5}
              country={info.location.country}
              coOrdi={info.location.coordinates}
            />
          );
        })}
    </div>
  );
}
