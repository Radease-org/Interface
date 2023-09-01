import React from "react";

const ButtonLoader = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "none",
          display: "block",
          shapeRendering: "auto",
          animationPlayState: "running",
          animationDelay: "0s"
        }}
        height="40px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="84"
          cy="50"
          r="10"
          fill="#40a8d0"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="0.2717391304347826s"
            calcMode="spline"
            keyTimes="0;1"
            values="13;0"
            keySplines="0 0.5 0.5 1"
            begin="0s"
            style={{ animationPlayState: "running", animationDelay: "0s" }}
          ></animate>
          <animate
            attributeName="fill"
            repeatCount="indefinite"
            dur="1.0869565217391304s"
            calcMode="discrete"
            keyTimes="0;0.25;0.5;0.75;1"
            values="#40a8d0;#a4e5ff;#57e9a9;#adffdb;#40a8d0"
            begin="0s"
            style={{ animationPlayState: "running", animationDelay: "0s" }}
          ></animate>
        </circle>
        <circle
          cx="16"
          cy="50"
          r="10"
          fill="#40a8d0"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.0869565217391304s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;13;13;13"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
            style={{ animationPlayState: "running", animationDelay: "0s" }}
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.0869565217391304s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
            style={{ animationPlayState: "running", animationDelay: "0s" }}
          ></animate>
        </circle>
        <circle
          cx="50"
          cy="50"
          r="10"
          fill="#adffdb"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.0869565217391304s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;13;13;13"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.2717391304347826s"
            style={{ animationPlayState: "running", animationDelay: "0s" }}
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.0869565217391304s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.2717391304347826s"
            style={{ animationPlayState: "running", animationDelay: "0s" }}
          ></animate>
        </circle>
        <circle
          cx="84"
          cy="50"
          r="10"
          fill="#57e9a9"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.0869565217391304s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;13;13;13"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.5434782608695652s"
            style={{ animationPlayState: "running", animationDelay: "0s" }}
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.0869565217391304s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.5434782608695652s"
            style={{ animationPlayState: "running", animationDelay: "0s" }}
          ></animate>
        </circle>
        <circle
          cx="16"
          cy="50"
          r="10"
          fill="#a4e5ff"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.0869565217391304s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;13;13;13"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.8152173913043478s"
            style={{ animationPlayState: "running", animationDelay: "0s" }}
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.0869565217391304s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.8152173913043478s"
            style={{ animationPlayState: "running", animationDelay: "0s" }}
          ></animate>
        </circle>
      </svg>
    </>
  );
};

export default ButtonLoader;
