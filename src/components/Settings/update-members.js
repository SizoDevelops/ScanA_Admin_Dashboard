"use client";

import React, { useEffect, useReducer, useState } from "react";
import MemberProfile from "./members";
import styles from "../Settings/SettingsCSS/update-members.module.css";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { useDatabase } from "../features/dbContext";


const formReducer = (state, action) => {
  switch (action) {
    case "UPDATE FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      break;
  }
}

const UpdateMembers = () => {
  const { data: session } = useSession();
  const schema = useSelector((state) => state.Database.value.members);
  const members = [...schema];
  const [search, setSearch] = useState("");
  const [membersArray, setMembers] = useState([]);
const [users, setUsers] = useState([])
const [state, dispatch] = useReducer(formReducer, {
  title: session?.user.title,
  initial: session?.user.initial,
  first_name: session?.user.first_name,
  last_name: session?.user.last_name,
  email: session?.user.email,
  position: session?.user.position,
  phone_number: session?.user.phone_number,
  persal: session?.user.persal,
  subjects: session?.user.subjects
})




  function compareFn(a, b) {
    if (a.last_name < b.last_name) {
      return -1;
    } else if (a.last_name > b.last_name) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  const membersCopy = members.sort(compareFn);
  useEffect(() => {
    setMembers(membersCopy);
    const members = [];
    membersCopy.forEach((elem) => {
      if (
        elem.last_name.includes(search.toUpperCase()) ||
        elem.first_name.includes(search.toUpperCase()) ||
        elem.position.includes(search.toUpperCase()) ||
        elem.title.includes(search.toUpperCase()) ||
        elem.initial.includes(search.toUpperCase())
      ) {
        members.push(elem);
        setMembers(members);
      }
    });
  }, [search, membersCopy]);

  const handleInputChange = (e) => {
    const [
      title,
      initial,
      first_name,
      last_name,
      email,
      phone_number,
      persal,
      subjects,
    ] = e.target;


  };

  return (
    <body className={styles.container}>
      <div className={styles.Cont}>
        <div className={styles.categories}>
          <div className={styles.searchBar}>

            <div>
              {/* <Image alt="Search Icon" src="/icons/iconamoon_search.png" sizes='20' fill/> */}
              {/* <IconContext.Provider value={{color: "#03a4ff", style: { verticalAlign: 'middle' }}}>
    <FiSearch />
    </IconContext.Provider> */}
              <svg
                className={styles.searchIcon}
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.profiles}>
          {membersArray.map((member, index) => {
            return (
              <div key={member.last_name + index} >
                <MemberProfile
                  keyID={session?.user.key}
                  id={member.id}
                  title={member.title}
                  last_name={member.last_name}
                  position={member.position}
                  initial={member.initial}
                  data={member}
                  paused={member.pause_register}
                  blocked={member.block_user}
                />
              </div>
            );
          })}
        </div>
        <ul className={styles.listIns}>
          <li>Hover over a profile to see the options.</li>
          <li>Some actions here are irreversable so be careful.</li>
        </ul>
      </div>

      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          <form
            className={styles.Form}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className={styles.memberInfo}>
              <div className={styles.coordinates}>
                <p>Title*</p>
                <input
                  type="text"
                  placeholder="eg. MR."
                  name="title"
                  defaultValue={state.title}
                  onChange={handleInputChange}
                  required
                />
                <ul className={styles.listIns}>
                  <li>Enter the title of the member. (e.g. MR.)</li>
                </ul>
              </div>
              <div className={styles.coordinates}>
                <p>Initials*</p>
                <input
                  type="text"
                  placeholder="Initial(s)"
                  name="initial"
                  onChange={handleInputChange}
                  required
                />
                <ul className={styles.listIns}>
                  <li>Use proper initial conventions. (e.g. S.W)</li>
                </ul>
              </div>

              <div className={styles.coordinates}>
                <p>First Name*</p>
                <input
                  type="text"
                  placeholder="First Name(s)"
                  name="first_name"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.coordinates}>
                <p>Last Name*</p>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.coordinates}>
                <p>Email Address*</p>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={handleInputChange}
                  required
                />
                <ul className={styles.listIns}>
                  <li>The email address of the member</li>
                  <li>
                    This email will be used to send the login details to the
                    user.
                  </li>
                </ul>
              </div>
              <div className={styles.coordinates}>
                <p>Phone Number*</p>
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone_number"
                  onChange={handleInputChange}
                  required
                />
                <ul className={styles.listIns}>
                  <li>The phone number of the member</li>
                  <li>For convenience</li>
                </ul>
              </div>
              <div className={styles.coordinates}>
                <p>Position*</p>
                <input
                  type="text"
                  placeholder="e.g Teacher or HOD"
                  name="position"
                  onChange={handleInputChange}
                  required
                />
                <ul className={styles.listIns}>
                  <li>Position of the member</li>
                </ul>
              </div>
              <div className={styles.coordinates}>
                <p>Persal Number</p>
                <input
                  type="text"
                  placeholder="Persal Number"
                  name="persal"
                  onChange={handleInputChange}
                />
                <ul className={styles.listIns}>
                  <li>Enter the persal Number if available</li>
                </ul>
              </div>
            </div>

            <div className={styles.addNew}>
              <div className={styles.btn} onClick={() => {}}>
                <p>{true ? "Uploading..." : "Confirm"}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default UpdateMembers;
