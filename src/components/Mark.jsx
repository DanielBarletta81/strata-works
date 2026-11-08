// Four strata beds offset by one fault seam — geology, masonry, stack, story.
export default function Mark({ size = 34 }) {
  return <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <g fill="#e9e4d9">
      <rect x="3" y="7" width="20" height="5" opacity=".92" />
      <rect x="3" y="15" width="20" height="5" opacity=".62" />
      <rect x="3" y="23" width="20" height="5" opacity=".4" />
      <rect x="3" y="31" width="20" height="5" opacity=".22" />
      <rect x="25" y="10" width="12" height="5" opacity=".92" />
      <rect x="25" y="18" width="12" height="5" opacity=".62" />
      <rect x="25" y="26" width="12" height="5" opacity=".4" />
      <rect x="25" y="34" width="12" height="5" opacity=".22" />
    </g>
    <line x1="24" y1="4" x2="24" y2="40" stroke="#c29b76" strokeWidth="1.6" />
  </svg>;
}
