import React, { useState, useEffect } from "react";
import styles from "./card.module.css";
import { useContext } from "react";
import { Data } from "../data/Context";

export default function Card({
  name,
  pp,
  email,
  dob,
  address,
  phoneNumber,
  password,
  dpassword,
  country,
  coOrdi,
}) {
  const { setlatlong } = useContext(Data);


  useEffect(() => {
    let subscribed = true;

    if (subscribed) {
      setlatlong({
        lat: coOrdi.latitude,
        long: coOrdi.longitude,
      });
    }

    return () => {
      subscribed = false;
    };
  }, [coOrdi.latitude, coOrdi.longitude, setlatlong]);

  const [show, setshow] = useState(false);

  const gotoMap = (e) => {
    e.preventDefault();
    window.open(`https://www.google.com/maps/search/${country}`);
  };

  return (
    <>
      <div className={styles.card}>
        <h2>Random User</h2>
        <div className={styles.cardSide}>
          <div className={styles.front}>
            <div className={styles.content}>
              <img className={styles.profilepic} src={pp} alt="pp" />
              <span className={styles.hr}></span>
              <section className={styles.details}>
                <p>Hi I Am:-{name}</p>
                <p>My Email Address is:-{email}</p>
                <p>I Celebrate My Birtday on:-{dob}</p>
              </section>
            </div>
          </div>
          <div className={styles.back}>
            <div className={styles.content}>
              <img className={styles.ppback} src={pp} alt="pp" />
              <span className={styles.hr}></span>
              <section className={styles.details}>
                <p className={styles.address} onClick={gotoMap}>
                  My Address is:-{address}
                  <span className={styles.addressDT}>
                    <br />
                    click to open in map
                  </span>{" "}
                </p>
                <p>My Phone Number is:-{phoneNumber}</p>
                <p
                  className={styles.password}
                  onClick={() => {
                    setshow(true);
                  }}
                >
                  My Password is:-{!show ? password : dpassword}{" "}
                  <span className={styles.passwordDT}>
                    <br />
                    click to decrypt
                  </span>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
