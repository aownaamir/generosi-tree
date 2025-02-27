function Miscellaneous({ width = "50px", height = "50px", fill, className }) {
  return (
    <svg
      // width={width}
      // height={height}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <style type="text/css">
        {/* {`
            .st0 { fill: ${fill}; }
            .st1 { fill: ${fill}; }
            .st2 { fill: ${fill}; }
            .st3 { fill: ${fill}; }
            .st4 { fill: ${fill}; }
            .st5 { fill: ${fill}; }
            .st6 { fill: ${fill}; }
            .st7 { fill: ${fill}; }
            .st8 { fill: ${fill}; }
          `} */}
        {`
            .st0 { ${className} }
            .st1 { ${className} }
            .st2 { ${className} }
            .st3 { ${className} }
            .st4 { ${className} }
            .st5 { ${className} }
            .st6 { ${className} }
            .st7 { ${className} }
            .st8 { ${className} }
          `}
      </style>
      <path
        className="st8"
        d="M24.5,18L24.5,18c-1.7-0.5-3.3-1.1-4.8-2L18.1,15l1.6-0.9c1.5-0.9,3.1-1.6,4.8-2c0.6-0.2,0.9-0.9,0.6-1.5  l-1.2-2.2c-0.3-0.6-1.1-0.7-1.6-0.2v0c-1.2,1.2-2.6,2.3-4.2,3.2l-1.6,0.9v-1.9c0-1.8,0.2-3.5,0.7-5.2c0.2-0.6-0.3-1.3-1-1.3h-2.5  c-0.7,0-1.1,0.6-1,1.3c0.4,1.7,0.7,3.4,0.7,5.2v1.9l-1.6-0.9c-1.5-0.9-2.9-1.9-4.2-3.2l0,0C7.2,7.8,6.4,7.9,6.1,8.4l-1.2,2.2  c-0.3,0.6,0,1.3,0.6,1.5h0c1.7,0.5,3.3,1.1,4.8,2l1.6,0.9l-1.6,0.9c-1.5,0.9-3.1,1.6-4.8,2l0,0c-0.6,0.2-0.9,0.9-0.6,1.5l1.2,2.2  c0.3,0.6,1.1,0.7,1.6,0.2c1.2-1.2,2.6-2.3,4.2-3.2l1.6-0.9v1.9c0,1.8-0.2,3.5-0.7,5.2c-0.2,0.6,0.3,1.3,1,1.3h2.5  c0.7,0,1.1-0.6,1-1.3c-0.4-1.7-0.7-3.4-0.7-5.2v-1.9l1.6,0.9c1.5,0.9,2.9,1.9,4.2,3.2c0.5,0.5,1.2,0.4,1.6-0.2l1.2-2.2  C25.5,18.9,25.2,18.1,24.5,18z"
      />
    </svg>
  );
}

export default Miscellaneous;
