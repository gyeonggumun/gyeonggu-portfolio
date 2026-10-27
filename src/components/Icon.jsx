const paths = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  diagonal: (
    <>
      <path d="M6 18 18 6M6 6h12v12" />
    </>
  ),
  down: (
    <>
      <path d="m6 9 6 6 6-6" />
    </>
  ),
  left: (
    <>
      <path d="m14 5-7 7 7 7" />
    </>
  ),
  right: (
    <>
      <path d="m10 5 7 7-7 7" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8" cy="8" r="1.5" />
      <path d="m3 17 6-6 4 4 3-3 5 5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="7.5" r="3.5" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
    </>
  ),
  file: (
    <>
      <path d="M14 2H5v20h14V7l-5-5ZM14 2v5h5M8 12h8M8 16h6" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="m8 12-2 9 6-3 6 3-2-9" />
    </>
  ),
  book: (
    <>
      <path d="M12 5C8 2 4 3 2 4v15c4-2 7-1 10 1 3-2 6-3 10-1V4c-2-1-6-2-10 1Zm0 0v15" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M8 7V3h8v4M3 12c6 4 12 4 18 0M12 12v4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
};

export default function Icon({ name, size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
