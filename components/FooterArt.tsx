// Decorative vertical pill/dot brand motif (from Assests/footer-art),
// recolored with a mint-dark → mint-light gradient stroke for the dark section.
export default function FooterArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 122 516"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <defs>
        <linearGradient id="faGrad" x1="61" y1="0" x2="61" y2="516" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3FA87A" />
          <stop offset="1" stopColor="#C7EFDA" />
        </linearGradient>
      </defs>
      <g opacity="0.4" stroke="url(#faGrad)" strokeWidth="1.5">
        <rect x="121" y="228.457" width="31.2646" height="177.216" rx="15.6323" transform="rotate(-180 121 228.457)" />
        <rect x="121" y="41.0645" width="30.5868" height="30.5842" rx="15.2921" transform="rotate(-180 121 41.0645)" />
        <rect x="75.4308" y="236.209" width="30.5868" height="30.5842" rx="15.2921" transform="rotate(179.521 75.4308 236.209)" />
        <rect x="31.6329" y="276.928" width="30.5868" height="30.5842" rx="15.2921" transform="rotate(179.521 31.6329 276.928)" />
        <rect x="75.4337" y="316.895" width="30.5868" height="30.5842" rx="15.2921" transform="rotate(179.521 75.4337 316.895)" />
        <rect x="31.6358" y="357.616" width="30.5868" height="30.5842" rx="15.2921" transform="rotate(179.521 31.6358 357.616)" />
        <rect x="75.4308" y="196.166" width="30.5868" height="30.5842" rx="15.2921" transform="rotate(179.521 75.4308 196.166)" />
        <rect x="75.4308" y="276.854" width="30.5868" height="30.5842" rx="15.2921" transform="rotate(179.521 75.4308 276.854)" />
        <rect x="31.6329" y="317.573" width="30.5868" height="30.5842" rx="15.2921" transform="rotate(179.521 31.6329 317.573)" />
        <rect x="75.4399" y="155.955" width="30.5868" height="148.011" rx="15.2934" transform="rotate(-180 75.4399 155.955)" />
        <rect x="0.75" y="0.75" width="30.5868" height="30.5842" rx="15.2921" />
        <rect x="0.75" y="40.791" width="30.5868" height="30.5842" rx="15.2921" />
        <rect x="1.04395" y="81.1328" width="30.5868" height="148.011" rx="15.2934" />
        <rect x="44.667" y="326.102" width="30.5868" height="148.011" rx="15.2934" />
        <rect x="0.869141" y="366.822" width="30.5868" height="148.011" rx="15.2934" />
      </g>
    </svg>
  );
}
