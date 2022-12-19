import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width="36px"
      height="36px"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="iconify iconify--twemoji"
      {...props}
    >
      <path
        fill="#C60A1D"
        d="M36 27a4 4 0 01-4 4H4a4 4 0 01-4-4V9a4 4 0 014-4h28a4 4 0 014 4v18z"
      />
      <path fill="#FFC400" d="M0 12h36v12H0z" />
      <path fill="#EA596E" d="M9 17v3a3 3 0 106 0v-3H9z" />
      <path fill="#F4A2B2" d="M12 16h3v3h-3z" />
      <path fill="#DD2E44" d="M9 16h3v3H9z" />
      <ellipse fill="#EA596E" cx={12} cy={14.5} rx={3} ry={1.5} />
      <ellipse fill="#FFAC33" cx={12} cy={13.75} rx={3} ry={0.75} />
      <path fill="#99AAB5" d="M7 16h1v7H7zm9 0h1v7h-1z" />
      <path
        fill="#66757F"
        d="M6 22h3v1H6zm9 0h3v1h-3zm-8-7h1v1H7zm9 0h1v1h-1z"
      />
    </svg>
  )
}

export default SvgComponent