import * as React from "react";
import type { SVGProps } from "react";

const UserProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 56 56" // alt 속성을 aria-label로 적용
  >
    <path
      fill="#F9E05F"
      d="M51.333 28c0-12.857-10.477-23.333-23.334-23.333S4.666 15.143 4.666 28c0 6.767 2.917 12.857 7.537 17.127 0 .023 0 .023-.024.046.234.234.514.42.747.63.14.117.257.234.397.327.42.35.886.677 1.33 1.003.163.117.303.21.466.327q.665.454 1.4.84c.164.093.35.21.514.303q.699.385 1.47.7c.186.094.373.187.56.257q.77.315 1.54.56c.186.07.373.14.56.187.56.163 1.12.303 1.68.443.163.047.326.093.513.117.653.14 1.307.233 1.983.303.094 0 .187.023.28.047.794.07 1.587.116 2.38.116.794 0 1.587-.046 2.357-.116.093 0 .187-.024.28-.047.677-.07 1.33-.163 1.983-.303.164-.024.327-.094.514-.117.56-.14 1.143-.257 1.68-.443.186-.07.373-.14.56-.187.513-.187 1.05-.35 1.54-.56.186-.07.373-.163.56-.257q.735-.315 1.47-.7c.186-.093.35-.21.513-.303.467-.28.933-.537 1.4-.84.163-.093.303-.21.467-.327.466-.326.91-.653 1.33-1.003.14-.117.256-.233.396-.327.257-.21.514-.42.747-.63 0-.023 0-.023-.023-.046 4.643-4.27 7.56-10.36 7.56-17.127M39.526 39.597c-6.323-4.247-16.683-4.247-23.053 0a11.3 11.3 0 0 0-2.567 2.333c-3.547-3.593-5.74-8.517-5.74-13.93 0-10.943 8.89-19.833 19.833-19.833 10.944 0 19.834 8.89 19.834 19.833 0 5.413-2.194 10.337-5.74 13.93a10.8 10.8 0 0 0-2.567-2.333"
    />
    <path
      fill="#F9E05F"
      d="M28 16.17c-4.83 0-8.75 3.92-8.75 8.75 0 4.736 3.71 8.586 8.633 8.726h.42a8.734 8.734 0 0 0 8.447-8.727c0-4.83-3.92-8.75-8.75-8.75"
    />
  </svg>
);
export default UserProfile;
