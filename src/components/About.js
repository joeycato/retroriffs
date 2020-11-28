import React from "react";
import { Follow } from "react-twitter-widgets";
import styles from "./Bio.module.scss";
import config from "../../data/SiteConfig";

const About = ({ expanded }) => (
    <>
        <img
            className={styles.avatar}
            src={config.userAvatar}
            alt={config.userName}
        />
        <p>
            Hi! I'm <strong>{config.userName}</strong>. Thanks for stopping by
            and entertaining my random thoughts. <br />
            <br></br>
            {` `}
            <Follow
                username={config.userTwitter}
                options={{ count: expanded ? true : "none" }}
            />
        </p>
    </>
);

export default About;
