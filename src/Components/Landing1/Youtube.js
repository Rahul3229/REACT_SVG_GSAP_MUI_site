import * as React from "react";

// By: ph
// See: https://v0.app/icon/ph/youtube-logo-fill
// Example: <IconPhYoutubeLogoFill width="24px" height="24px" style={{color: "#000000"}} />

export const IconPhYoutubeLogoFill = ({
  height = "1em",
  fill = "currentColor",
  focusable = "false",
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, "children">) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    height={height}
    focusable={focusable}
    {...props}
  >
    <path
      fill={fill}
      d="M234.33 69.52a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48s-3.08-48.5-5.67-58.48m-72.11 61.81l-48 32A4 4 0 0 1 108 160V96a4 4 0 0 1 6.22-3.33l48 32a4 4 0 0 1 0 6.66"
    />
  </svg>
);
