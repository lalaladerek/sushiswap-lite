import * as React from "react";
import Svg, { ClipPath, G, Path, SvgProps } from "react-native-svg";

// tslint:disable-next-line:max-func-body-length
function SvgLogo(props: SvgProps) {
    return (
        <Svg
            viewBox="0 0 76 68"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={1.5}
            {...props}>
            <G>
                <ClipPath id="prefix__a">
                    <Path d="M0 0h76v68H0z" />
                </ClipPath>
                <G clipPath="url(#prefix__a)">
                    <Path fill="none" d="M-.005.004h75.412V67.5H-.005z" />
                    <Path
                        d="M17555.2 7266.44c13.9-19.4 61.1-9.44 105.3 22.23 44.2 31.67 68.8 73.13 54.9 92.53l-42.6 59.38c-13.9 19.41-61 9.45-105.2-22.22-44.2-31.67-68.8-73.14-54.9-92.54l42.5-59.38z"
                        fill="none"
                        stroke="#fff"
                        strokeWidth={14}
                        transform="matrix(.26772 0 0 .26772 -4678.27 -1934.9)"
                    />
                    <Path
                        d="M17550.4 7275.75c13.9-19.4 61-9.44 105.2 22.22 44.2 31.67 68.8 73.14 54.9 92.54l-42.5 59.38c-13.9 19.4-61.1 9.44-105.3-22.23-44.2-31.67-68.8-73.13-54.9-92.53l42.6-59.38z"
                        fill="#fff"
                        stroke="#fff"
                        strokeWidth={4.91}
                        transform="matrix(.26772 0 0 .26772 -4676.962 -1937.14)"
                    />
                    <Path
                        d="M20.767 9.743v-.002c1.633-2.31 4.846-3.336 8.995-2.996 5.703.471 13.28 3.512 20.534 8.722 7.282 5.21 12.583 11.402 14.859 16.658 1.66 3.804 1.713 7.169.053 9.48v-.003.002L53.83 57.501c-1.66 2.31-4.872 3.336-8.995 2.996-5.702-.471-13.279-3.512-20.56-8.722-7.256-5.207-12.583-11.4-14.859-16.655-1.66-3.807-1.713-7.17-.053-9.482L20.767 9.74v.002zm24.71 31.819L28.13 52.024c.804.506 1.607.982 2.383 1.432l17.803-10.74a43.599 43.599 0 01-2.838-1.154zm-6.639-3.556l-16.41 9.9c.749.6 1.498 1.19 2.301 1.77l16.76-10.117a54.471 54.471 0 01-2.651-1.553zm-3.453-2.329C28.263 30.51 23.07 24.41 20.82 19.221c-.696-1.588-1.098-3.1-1.232-4.49l-8.647 12.047c-1.312 1.845-1.044 4.525.268 7.563 1.499 3.435 4.364 7.274 8.245 10.95l15.93-9.614zm28.244 4.79c1.311-1.845 1.07-4.527-.268-7.566-2.169-5.009-7.282-10.88-14.19-15.846-6.933-4.964-14.135-7.911-19.57-8.361-3.319-.273-5.942.343-7.254 2.187l-.08.11c-1.232 1.842-.964 4.476.32 7.453 2.196 5.012 7.283 10.883 14.216 15.85 6.934 4.965 14.136 7.913 19.57 8.36 3.24.268 5.837-.316 7.175-2.078l.08-.11zM45.933 21.563c3.48 2.485 6.023 5.416 7.12 7.925.617 1.413.777 2.658.161 3.515-.615.859-1.847 1.1-3.373.974-2.73-.225-6.345-1.708-9.798-4.195-3.48-2.484-6.024-5.416-7.121-7.922-.616-1.413-.777-2.658-.161-3.517.616-.86 1.847-1.1 3.373-.972 2.73.225 6.318 1.708 9.799 4.192z"
                        fill="#191932"
                    />
                </G>
            </G>
            <Path
                d="M65.95 42.047L54.507 57.834c-1.8 2.507-5.293 3.714-9.832 3.345-5.857-.479-13.62-3.542-21.061-8.824-7.442-5.286-12.868-11.582-15.232-16.912-1.8-4.132-1.773-7.78.054-10.29L19.853 9.368c1.826-2.507 5.319-3.714 9.832-3.345 5.856.479 13.646 3.544 21.088 8.827 7.44 5.283 12.867 11.578 15.204 16.909 1.827 4.132 1.773 7.782-.027 10.289zm-43.035-30.51c1.182-1.622 3.546-2.043 6.474-1.803 5.346.436 12.384 3.318 19.18 8.14 6.797 4.82 11.82 10.502 13.97 15.368 1.155 2.666 1.53 5.016.349 6.638l1.531 1.082-1.531-1.082-11.444 15.787c-1.155 1.62-3.519 2.042-6.447 1.8-5.346-.433-12.411-3.318-19.207-8.138-6.797-4.823-11.82-10.504-13.943-15.367-1.182-2.67-1.53-5.02-.349-6.639l11.417-15.787z"
                fill="#fff"
            />
            <Path
                d="M21.407 10.835c3.734-5.158 16.387-2.51 28.26 5.908 11.874 8.42 18.483 19.445 14.748 24.603L53 57.133c-3.734 5.158-16.414 2.51-28.288-5.91-11.873-8.42-18.482-19.443-14.748-24.6l11.444-15.788z"
                fill="#fff"
            />
            <Path
                d="M20.584 9.88c1.661-2.301 4.873-3.315 9.025-2.986 5.731.465 13.317 3.507 20.625 8.658 7.282 5.178 12.625 11.343 14.895 16.55 1.66 3.78 1.716 7.123.055 9.425L53.778 57.309c-1.661 2.301-4.9 3.315-9.025 2.986-5.73-.493-13.344-3.507-20.625-8.685-7.31-5.152-12.625-11.316-14.922-16.522-1.662-3.781-1.717-7.124-.056-9.426L20.584 9.88zm43.022 30.523v-.027c1.329-1.809 1.052-4.494-.249-7.508-2.187-4.959-7.309-10.795-14.285-15.727-6.95-4.932-14.175-7.864-19.629-8.302-3.322-.274-5.952.329-7.28 2.165l-.056.11c-1.246 1.835-.97 4.438.332 7.397 2.187 4.987 7.309 10.823 14.258 15.755 6.948 4.932 14.174 7.863 19.628 8.302 3.267.246 5.842-.33 7.198-2.055l.083-.137v.027zM45.833 21.607c3.488 2.466 6.063 5.398 7.142 7.891.637 1.398.803 2.63.166 3.48-.609.85-1.855 1.096-3.377.959-2.741-.22-6.34-1.699-9.828-4.165-3.489-2.466-6.063-5.37-7.143-7.863-.61-1.398-.775-2.63-.166-3.48.609-.85 1.855-1.096 3.405-.987 2.713.247 6.34 1.7 9.8 4.165z"
                fill="#0e0f23"
            />
            <Path
                d="M18607.7 16015.7c1.1 26.3 27 51.4 46.9 68.4 27.7 23.6 72.3 41.3 97.2 37.3"
                fill="none"
                stroke="#fff"
                strokeWidth={3}
                strokeMiterlimit={4}
                strokeDasharray="6,6,75,75"
                strokeDashoffset={3}
                transform="matrix(.27685 0 0 .274 -5132.063 -4372.686)"
            />
        </Svg>
    );
}

export default SvgLogo;
