export const PersonSvg: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = '',
}) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <circle cx="12" cy="4" r="2"></circle>
      <path d="M19 2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4l2.29 2.29c.39.39 1.02.39 1.41 0L15 20h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7S9.3 9.49 9.3 8s1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z"></path>
    </svg>
  )
}

export const DeedSvg: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = '',
}) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 26 26"
      className={className}
    >
      <path d="M5 0C3.908 0 3 .908 3 2v19c0 1.092.908 2 2 2h2v3l3-2l3 2v-7.156a1.997 1.997 0 0 1-.438.187a1.923 1.923 0 0 1-1.093 1a1.922 1.922 0 0 1-.656.094c-.28 0-.56-.036-.813-.156a1.88 1.88 0 0 1-.813.156c-.224 0-.443-.017-.656-.094a1.941 1.941 0 0 1-1.094-1A2.018 2.018 0 0 1 7 18.844V21H5V2h16v19h-5a1 1 0 1 0 0 2h5c1.092 0 2-.908 2-2V2c0-1.092-.908-2-2-2H5zm2.813 5A1.001 1.001 0 0 0 8 7h10a1 1 0 1 0 0-2H8a1 1 0 0 0-.094 0a1.001 1.001 0 0 0-.093 0zm0 4A1.001 1.001 0 0 0 8 11h7a1 1 0 1 0 0-2H8a1 1 0 0 0-.094 0a1.001 1.001 0 0 0-.093 0zM10 12.656a.955.955 0 0 0-.906.656c-.041.014-.086.016-.125.032a.936.936 0 0 0-1.094.094a.95.95 0 0 0-.281 1.062c-.027.041-.038.082-.063.125a.95.95 0 0 0-.781.781a.929.929 0 0 0 .469.969c.007.063-.013.127 0 .188a.945.945 0 0 0-.094 1.062c.194.337.58.525.969.469c.05.047.101.082.156.125c.01.387.257.74.625.875c.364.133.776.005 1.031-.282c.037.002.056.032.094.032c.041 0 .084-.03.125-.032a.929.929 0 0 0 .688.313c.108 0 .206.007.312-.031a.957.957 0 0 0 .625-.875c.053-.042.105-.078.156-.125a.965.965 0 0 0 .969-.469a.945.945 0 0 0-.094-1.063c.014-.06-.009-.126 0-.187a.923.923 0 0 0 .469-.969a.949.949 0 0 0-.781-.781c-.024-.044-.036-.083-.063-.125a.948.948 0 0 0-.281-1.063a.935.935 0 0 0-1.094-.093c-.04-.016-.084-.018-.125-.031a.955.955 0 0 0-.906-.657zm0 1.75c.886 0 1.594.708 1.594 1.594c0 .888-.707 1.594-1.594 1.594A1.585 1.585 0 0 1 8.406 16c0-.887.708-1.594 1.594-1.594z"></path>
    </svg>
  )
}

export const MailingAddressSvg: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = '',
}) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5l8-5v10z"></path>
    </svg>
  )
}
export const PhysicalAddressSvg: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = '',
}) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 100 100"
      className={className}
    >
      <path
        fill="currentColor"
        color="currentColor"
        d="M49.781 23.592C41.947 23.593 34.184 26.96 35 33.688l2 14.624C37.352 50.886 39.09 55 41.688 55h.185L44 80.53c.092 1.103.892 2 2 2h8c1.108 0 1.908-.897 2-2L58.127 55h.185c2.597 0 4.336-4.115 4.688-6.688l2-14.624c.523-6.734-7.384-10.098-15.219-10.096z"
      ></path>
      <path
        fill="currentColor"
        color="currentColor"
        d="m50.024 50.908l-.048.126c.016-.038.027-.077.043-.115l.005-.011zM34.006 69.057C19.88 71.053 10 75.828 10 82.857C10 92.325 26.508 100 50 100s40-7.675 40-17.143c0-7.029-9.879-11.804-24.004-13.8l-1.957 3.332C74.685 73.866 82 76.97 82 80.572c0 5.05-14.327 9.143-32 9.143c-17.673 0-32-4.093-32-9.143c-.001-3.59 7.266-6.691 17.945-8.174c-.645-1.114-1.294-2.226-1.94-3.341z"
      ></path>
      <circle
        cx="50"
        cy="10.5"
        r="10.5"
        fill="currentColor"
        color="currentColor"
      ></circle>
    </svg>
  )
}
export const ExemptionSvg: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = '',
}) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4h-4v-2h4v-2h-4V9h4V7H9v10h6z"></path>
    </svg>
  )
}
export const CheckSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"></path>
    </svg>
  )
}
export const XSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"></path>
    </svg>
  )
}
export const GoogleMapSvg: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect id="a" width="512" height="512" x="0" y="0" rx="15%" fill="#fff" />
      <clipPath id="b">
        <use xlinkHref="#a" />
      </clipPath>
      <g clipPath="url(#b)">
        <path fill="#35a85b" d="M0 512V0h512z" />
        <path fill="#5881ca" d="M256 288L32 512h448z" />
        <path fill="#c1c0be" d="M288 256L512 32v448z" />
        <path stroke="#fadb2a" strokeWidth="71" d="M0 512L512 0" />
        <path
          fill="none"
          stroke="#f2f2f2"
          strokeWidth="22"
          d="M175 173h50a50 54 0 1 1-15-41"
        />
        <path
          fill="#de3738"
          d="M353 85a70 70 0 0 1 140 0c0 70-70 70-70 157 0-87-70-87-70-157"
        />
        <circle cx="423" cy="89" r="25" fill="#7d2426" />
      </g>
    </svg>
  )
}
export const UpArrowSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8l-8 8z"></path>
    </svg>
  )
}

export const DownArrowSvg: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8l8-8z"></path>
    </svg>
  )
}
export const HomeSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M1 11v10h5v-6h4v6h5V11L8 6z"></path>
      <path d="M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z"></path>
    </svg>
  )
}
export const MapSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 4c2.2 0 4 1.8 4 4c0 2.1-2.1 5.5-4 7.9c-1.9-2.5-4-5.8-4-7.9c0-2.2 1.8-4 4-4m0-2C8.7 2 6 4.7 6 8c0 4.5 6 11 6 11s6-6.6 6-11c0-3.3-2.7-6-6-6m0 4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m8 13c0 2.2-3.6 4-8 4s-8-1.8-8-4c0-1.3 1.2-2.4 3.1-3.2l.6.9c-1 .5-1.7 1.1-1.7 1.8c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5c0-.7-.7-1.3-1.8-1.8l.6-.9c2 .8 3.2 1.9 3.2 3.2Z"></path>
    </svg>
  )
}
export const PhoneSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71c0 .28.11.53.29.71l2.48 2.48a1.01 1.01 0 0 0 1.41.01c.79-.74 1.69-1.36 2.66-1.85c.33-.16.56-.5.56-.9v-3.1C8.85 5.25 10.39 5 12 5c1.59 0 3.14.25 4.59.72v3.1c0 .39.23.74.56.9c.98.49 1.85 1.12 2.67 1.85c.18.18.43.28.68.28c.3 0 .55-.11.73-.29l2.48-2.48c.18-.18.29-.43.29-.71c0-.28-.12-.52-.3-.7A16.965 16.965 0 0 0 12 3M9 7v3s-6 5-6 8v4h18v-4c0-3-6-8-6-8V7h-2v2h-2V7H9m3 5a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 1.5A2.5 2.5 0 0 0 9.5 16a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5Z"></path>
    </svg>
  )
}
export const PhoneBookSvg: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8l-6-6m4 18H6V4h7v5h5v11m-9-6.67c.81 1.57 2.1 2.86 3.67 3.67l1.22-1.23c.16-.16.38-.2.57-.14c.62.2 1.29.32 1.98.32c.31 0 .56.24.56.55v1.95c0 .3-.25.55-.56.55C11.23 19 7 14.77 7 9.56c0-.31.25-.56.56-.56H9.5c.31 0 .56.25.56.56c0 .69.11 1.36.31 1.98c.06.19.02.41-.14.57L9 13.33Z"></path>
    </svg>
  )
}
export const TrashCanSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M216 48h-40v-8a24.1 24.1 0 0 0-24-24h-48a24.1 24.1 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"></path>
    </svg>
  )
}

export const X2Svg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5.617 23.968c-.326-.07-.233.014-2.94-2.696C.357 18.947.163 18.746.104 18.612a1.136 1.136 0 0 1 .023-.993c.074-.142.367-.444 2.813-2.89l2.732-2.732-2.742-2.743C.37 6.69.183 6.5.114 6.353a1.13 1.13 0 0 1 0-.987c.065-.14.27-.353 2.55-2.633C4.027 1.369 5.194.219 5.257.179c.326-.21.825-.222 1.17-.028.07.039 1.11 1.06 2.84 2.79L12 5.669l2.756-2.751C17.31.369 17.523.16 17.657.103c.332-.144.68-.137.992.02.147.075.377.298 2.673 2.598 2.322 2.326 2.517 2.527 2.575 2.66.145.335.137.687-.023.995-.073.142-.367.443-2.813 2.89l-2.731 2.731 2.741 2.744c2.56 2.562 2.746 2.754 2.815 2.901.155.331.152.682-.01 1.003-.073.146-.299.378-2.585 2.663-2.304 2.3-2.518 2.508-2.658 2.573-.313.147-.652.15-.976.01-.134-.058-.348-.266-2.9-2.814L12 18.326l-2.744 2.74C6.29 24.03 6.433 23.899 6.094 23.97a.926.926 0 0 1-.477-.002zm5.85-8.259c.383-.19.821-.169 1.16.058.058.039 1.322 1.287 2.808 2.773l2.702 2.703 3.11-3.11-2.735-2.738c-2.931-2.933-2.815-2.807-2.9-3.14a1.158 1.158 0 0 1 .159-.885c.039-.058 1.287-1.32 2.774-2.807l2.703-2.701-3.11-3.11-2.739 2.735c-2.934 2.93-2.808 2.814-3.141 2.9a1.159 1.159 0 0 1-.885-.16c-.058-.038-1.321-1.286-2.808-2.773L5.863 2.752l-3.11 3.11 2.736 2.737c2.93 2.933 2.814 2.807 2.9 3.14.072.282.009.634-.16.885-.038.058-1.286 1.321-2.773 2.807l-2.703 2.702 3.11 3.11L8.6 18.506c2.222-2.218 2.763-2.747 2.865-2.798z"></path>
    </svg>
  )
}
export const PrinterSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 256, 256"
      {...props}
    >
      <path d="M210.7 74H198V40a6 6 0 0 0-6-6H64a6 6 0 0 0-6 6v34H45.3C32.5 74 22 83.9 22 96v80a6 6 0 0 0 6 6h30v38a6 6 0 0 0 6 6h128a6 6 0 0 0 6-6v-38h30a6 6 0 0 0 6-6V96c0-12.1-10.5-22-23.3-22ZM70 46h116v28H70Zm116 168H70v-56h116Zm36-44h-24v-18a6 6 0 0 0-6-6H64a6 6 0 0 0-6 6v18H34V96c0-5.5 5.1-10 11.3-10h165.4c6.2 0 11.3 4.5 11.3 10Zm-24-54a10 10 0 1 1-10-10a10 10 0 0 1 10 10Z"></path>
    </svg>
  )
}
export const SaveSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 24, 24"
      {...props}
    >
      <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5l-5-5h3V9h4v4h3z"></path>
    </svg>
  )
}
export const SortAZSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 16, 16"
      {...props}
    >
      <g>
        <path
          fillRule="evenodd"
          d="M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
        ></path>
        <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path>
      </g>
    </svg>
  )
}

export const Sort09Svg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      color="currentColor"
      viewBox="0 0 16, 16"
      {...props}
    >
      <g>
        <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"></path>
        <path
          fillRule="evenodd"
          d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45c.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742c-.91 0-1.72-.613-1.72-1.758c0-1.148.848-1.835 1.973-1.835c1.09 0 2.063.636 2.063 2.687c0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972c0-.633-.398-1.008-.94-1.008c-.52 0-.927.375-.927 1c0 .64.418.98.934.98z"
        ></path>
        <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path>
      </g>
    </svg>
  )
}
