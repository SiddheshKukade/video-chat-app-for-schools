import React from "react";
import "./StudyMaterialPost.css";
import GetAppIcon from "@material-ui/icons/GetApp";
function StudyMaterialPost({
  postedAt,
  fromSchoolRef,
  fromTeacherMail,
  name,
  file,
  subject,
  standard,
  createdAt,
  updatedAt,
  title,
}) {
  const downloadDoc = () => {
    console.log("cliucked");
    // fetch('https://source.unsplash.com/user/erondu/1600x900', {
    fetch("https://jsonplaceholder.typicode.com/todos/", {
      crossDomain: true,
      method: "GET",
      headers: {
        // 'Content-Type': 'application/jpeg'
        "Content-Type": "application/text",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        // link.setAttribute('download', `sidd.jpeg`);
        link.setAttribute("download", `sidd`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  };
  return (
    <div className="post__wrapper">
      <div className="upper__wrapper">
        <div className="first__wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div className="second__wrapper">
          <div className="post__title">{title}</div>
          <div className="post__date">{/* 23.11.2021 */}2 hours ago</div>
        </div>
      </div>
      <div className="third__wrapper" title="Download Material">
        <a
          onClick={downloadDoc}
          download
          style={{ height: "100%", width: "100%" }}
        >
          <GetAppIcon fontSize="large" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg> */}
        </a>
      </div>
    </div>
  );
}

export default StudyMaterialPost;
