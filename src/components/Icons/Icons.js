import classNames from 'classnames';

export const SearchIcon = () => (
    <svg aria-hidden="true" role="img" focusable="false" viewBox="0 0 32 32">
        <path d="M30.19 30.659l-9.509-10.374c2.143-2.242 3.32-5.173 3.32-8.286 0-3.205-1.248-6.219-3.515-8.485s-5.28-3.515-8.485-3.515-6.219 1.248-8.485 3.515-3.515 5.28-3.515 8.485 1.248 6.219 3.515 8.485 5.28 3.515 8.485 3.515c2.761 0 5.38-0.927 7.501-2.633l9.509 10.373c0.158 0.172 0.374 0.259 0.59 0.259 0.193 0 0.387-0.070 0.54-0.21 0.326-0.299 0.348-0.805 0.049-1.13zM1.6 12c0-5.735 4.665-10.4 10.4-10.4s10.4 4.665 10.4 10.4-4.665 10.4-10.4 10.4-10.4-4.665-10.4-10.4z"></path>
    </svg>
);

export const AccountIcon = () => (
    <svg aria-hidden="true" role="img" focusable="false" viewBox="0 0 1024 1024">
        <path d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z"></path>
        <path d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z"></path>
    </svg>
);

export const FavouriteIcon = () => (
    <svg aria-hidden="true" role="img" focusable="false" viewBox="0 0 1024 1024">
        <path d="M486.4 972.8c-4.283 0-8.566-1.074-12.434-3.222-4.808-2.67-119.088-66.624-235.122-171.376-68.643-61.97-123.467-125.363-162.944-188.418-50.365-80.443-75.901-160.715-75.901-238.584 0-148.218 120.582-268.8 268.8-268.8 50.173 0 103.462 18.805 150.051 52.952 27.251 19.973 50.442 44.043 67.549 69.606 17.107-25.565 40.299-49.634 67.55-69.606 46.589-34.147 99.878-52.952 150.050-52.952 148.218 0 268.8 120.582 268.8 268.8 0 77.869-25.538 158.141-75.901 238.584-39.478 63.054-94.301 126.446-162.944 188.418-116.034 104.754-230.314 168.706-235.122 171.376-3.867 2.149-8.15 3.222-12.434 3.222zM268.8 153.6c-119.986 0-217.6 97.614-217.6 217.6 0 155.624 120.302 297.077 221.224 388.338 90.131 81.504 181.44 138.658 213.976 158.042 32.536-19.384 123.845-76.538 213.976-158.042 100.922-91.261 221.224-232.714 221.224-388.338 0-119.986-97.616-217.6-217.6-217.6-87.187 0-171.856 71.725-193.314 136.096-3.485 10.453-13.267 17.504-24.286 17.504s-20.802-7.051-24.286-17.504c-21.456-64.371-106.125-136.096-193.314-136.096z"></path>
    </svg>
);

export const CartIcon = () => (
    <svg aria-hidden="true" role="img" focusable="false" viewBox="0 0 1024 1024">
        <path d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4 102.4 45.936 102.4 102.4-45.936 102.4-102.4 102.4zM409.6 870.4c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"></path>
        <path d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4 102.4 45.936 102.4 102.4-45.936 102.4-102.4 102.4zM768 870.4c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"></path>
        <path d="M898.021 228.688c-12.859-15.181-32.258-23.888-53.221-23.888h-626.846l-5.085-30.506c-6.72-40.315-43.998-71.894-84.869-71.894h-51.2c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6h51.2c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395c6.718 40.314 43.997 71.893 84.867 71.893h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zM862.331 276.694l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"></path>
    </svg>
);

export const LoadingIcon = () => (
    <svg
        fill="currentColor"
        aria-label="Đang tải..."
        className="xemfg65 xa4qsjk xs51kk x2a5n4e"
        role="img"
        viewBox="0 0 100 100"
    >
        <rect
            className="x1i210e2"
            height="10"
            opacity="0"
            rx="5"
            ry="5"
            transform="rotate(-90 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            className="x1i210e2"
            height="10"
            opacity="0.125"
            rx="5"
            ry="5"
            transform="rotate(-45 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            className="x1i210e2"
            height="10"
            opacity="0.25"
            rx="5"
            ry="5"
            transform="rotate(0 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            className="x1i210e2"
            height="10"
            opacity="0.375"
            rx="5"
            ry="5"
            transform="rotate(45 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            className="x1i210e2"
            height="10"
            opacity="0.5"
            rx="5"
            ry="5"
            transform="rotate(90 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            className="x1i210e2"
            height="10"
            opacity="0.625"
            rx="5"
            ry="5"
            transform="rotate(135 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            className="x1i210e2"
            height="10"
            opacity="0.75"
            rx="5"
            ry="5"
            transform="rotate(180 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
        <rect
            className="x1i210e2"
            height="10"
            opacity="0.875"
            rx="5"
            ry="5"
            transform="rotate(225 50 50)"
            width="28"
            x="67"
            y="45"
        ></rect>
    </svg>
);

export const ThunderIcon = () => (
    <svg viewBox="0 0 32 32">
        <path d="M8.8 32c-0.157 0-0.315-0.046-0.453-0.141-0.318-0.218-0.435-0.632-0.278-0.984l5.189-11.675h-7.658c-0.324 0-0.615-0.195-0.739-0.494s-0.055-0.643 0.173-0.872l16-16c0.273-0.273 0.701-0.312 1.019-0.094s0.435 0.632 0.278 0.984l-5.189 11.675h7.658c0.324 0 0.615 0.195 0.739 0.494s0.055 0.643-0.173 0.872l-16 16c-0.155 0.155-0.36 0.234-0.566 0.234zM7.531 17.6h6.957c0.271 0 0.523 0.137 0.671 0.364s0.17 0.513 0.060 0.761l-3.939 8.863 11.588-11.588h-6.958c-0.271 0-0.523-0.137-0.671-0.364s-0.17-0.513-0.060-0.761l3.939-8.863-11.588 11.588z"></path>
    </svg>
);

export const SaleIcon = () => (
    <svg viewBox="0 0 1024 1024">
        <path
            className="path1"
            d="M384 977.13c-20.554 0-39.84-7.966-54.306-22.43l-260.394-260.395c-14.466-14.464-22.432-33.75-22.432-54.304s7.966-39.84 22.434-54.306l439.594-439.592c24.91-24.914 70.269-43.702 105.504-43.702h230.4c42.349 0 76.8 34.453 76.8 76.8v230.4c0 35.232-18.787 80.59-43.699 105.504l-439.595 439.595c-14.466 14.466-33.752 22.43-54.306 22.43zM614.4 153.6c-21.246 0-54.278 13.682-69.299 28.704l-439.595 439.595c-4.795 4.795-7.435 11.224-7.435 18.101s2.64 13.306 7.435 18.099l260.394 260.397c4.795 4.794 11.224 7.434 18.101 7.434s13.307-2.64 18.102-7.435l439.594-439.592c15.021-15.024 28.704-48.058 28.704-69.302v-230.4c0-14.115-11.485-25.6-25.6-25.6h-230.4z"
        ></path>
        <path
            className="path2"
            d="M742.4 358.4c-42.349 0-76.8-34.453-76.8-76.8s34.451-76.8 76.8-76.8 76.8 34.453 76.8 76.8-34.451 76.8-76.8 76.8zM742.4 256c-14.115 0-25.6 11.485-25.6 25.6s11.485 25.6 25.6 25.6 25.6-11.485 25.6-25.6-11.485-25.6-25.6-25.6z"
        ></path>
    </svg>
);

export const RecentlyIcon = () => (
    <svg aria-hidden="true" role="img" focusable="false" viewBox="0 0 1024 1024">
        <path
            className="path1"
            d="M1016.501 442.698c-9.997-9.997-26.206-9.997-36.203 0l-58.832 58.832c-2.63-105.486-44.947-204.27-119.835-279.16-77.362-77.365-180.222-119.97-289.63-119.97-152.28 0-291.122 83.699-362.342 218.435-6.606 12.499-1.83 27.989 10.669 34.597 12.498 6.606 27.989 1.83 34.597-10.669 62.33-117.914 183.826-191.163 317.077-191.163 194.014 0 352.501 154.966 358.224 347.619l-58.522-58.522c-9.997-9.997-26.206-9.997-36.203 0-9.998 9.998-9.998 26.206 0 36.205l102.4 102.4c4.998 4.998 11.549 7.498 18.101 7.498s13.102-2.499 18.101-7.499l102.4-102.4c9.998-9.997 9.998-26.205 0-36.203z"
        ></path>
        <path
            className="path2"
            d="M863.674 668.566c-12.502-6.603-27.99-1.832-34.597 10.669-62.328 117.915-183.826 191.165-317.077 191.165-194.016 0-352.502-154.966-358.224-347.621l58.522 58.522c5 5 11.55 7.499 18.102 7.499s13.102-2.499 18.102-7.499c9.997-9.997 9.997-26.206 0-36.203l-102.4-102.4c-9.998-9.997-26.206-9.997-36.205 0l-102.4 102.4c-9.997 9.997-9.997 26.206 0 36.203s26.206 9.997 36.205 0l58.83-58.832c2.63 105.488 44.946 204.272 119.835 279.162 77.365 77.363 180.224 119.97 289.632 119.97 152.28 0 291.12-83.699 362.342-218.435 6.608-12.501 1.829-27.99-10.669-34.598z"
        ></path>
    </svg>
);

export const DownIcon = () => (
    <svg viewBox="0 0 1024 1024">
        <path
            className="path1"
            d="M0 307.2c0-6.552 2.499-13.102 7.499-18.101 9.997-9.998 26.206-9.998 36.203 0l442.698 442.698 442.699-442.698c9.997-9.998 26.206-9.998 36.203 0s9.998 26.206 0 36.203l-460.8 460.8c-9.997 9.998-26.206 9.998-36.203 0l-460.8-460.8c-5-5-7.499-11.55-7.499-18.102z"
        ></path>
    </svg>
);

export const RocketIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.002 34">
        <defs></defs>
        <title>icon_rocket</title>
        <g id="Shape_911" className="cls-1">
            <g id="Shape_911-2">
                <path
                    className={classNames('cls-2', className)}
                    d="M18,13a39.9724,39.9724,0,0,0-5,10l7,7s7.0545-2.3775,9-8S31,8,31,8,21.877,7.068,18,13Z"
                    transform="translate(-2.455 -1.7051)"
                ></path>
            </g>
        </g>
        <g id="_">
            <path
                d="M2.98,35.6465a.652.652,0,0,1-.2739-.19.7352.7352,0,0,1-.2325-.4073.8627.8627,0,0,1,.0332-.4726,45.837,45.837,0,0,1,1.9839-4.7315A21.3605,21.3605,0,0,1,6.5244,26.458a8.6246,8.6246,0,0,1,2.0669-2.042,3.7679,3.7679,0,0,1,2.0835-.6806,3.2541,3.2541,0,0,1,1.3447.29,4.23,4.23,0,0,1,1.2451.8887,3.4947,3.4947,0,0,1,1.0792,1.8007,3.9654,3.9654,0,0,1,.0166,1.4864,4.6191,4.6191,0,0,1-.9961,1.9092,10.5067,10.5067,0,0,1-2.1333,1.8837,23.6385,23.6385,0,0,1-3.2622,1.8516q-1.9095.9126-4.3663,1.81a.6287.6287,0,0,1-.1494.042,1.39,1.39,0,0,1-.1494.0078A.9227.9227,0,0,1,2.98,35.6465Zm29.41-33.8a30.4011,30.4011,0,0,0-3.0214.4233,28.467,28.467,0,0,0-2.8311.6973,23.275,23.275,0,0,0-2.6142.9629q-1.03.465-1.9922,1.0127a21.0083,21.0083,0,0,0-1.8428,1.1787,18.0535,18.0535,0,0,0-1.6768,1.3613Q17.6143,8.2133,16.9,9.01q-.266.2988-.5064.6059t-.4731.606a7.8025,7.8025,0,0,0-2.2163.5146,10.4139,10.4139,0,0,0-2.2495,1.2285A15.4724,15.4724,0,0,0,9.5625,13.55,24.529,24.529,0,0,0,7.67,15.6338q-.7808.9631-1.4028,1.8926t-1.0708,1.66q-.4482.731-.689,1.1953T4.25,20.88a.7928.7928,0,0,0-.0747.581.8076.8076,0,0,0,.34.4815.6577.6577,0,0,0,.2324.124.8656.8656,0,0,0,.2657.042.901.901,0,0,0,.3071-.0576.809.809,0,0,0,.29-.1914,14.5051,14.5051,0,0,1,2.208-1.5938q.4146-.2328.9629-.49a11.68,11.68,0,0,1,1.1787-.4727,11.1487,11.1487,0,0,1,2.8887-.5644,5.5275,5.5275,0,0,0,.5645,1.0625q.3646.5478.7719,1.0547.4065.5054.8052.9375t.6807.7138q.282.2652.7055.6641t.93.8135a11.2,11.2,0,0,0,1.0625.7715,7.0015,7.0015,0,0,0,1.0708.5732,9.9839,9.9839,0,0,1-.208,1.5186,12.6351,12.6351,0,0,1-.373,1.3613,11.9906,11.9906,0,0,1-.4649,1.18q-.249.5389-.498.9707a10.333,10.333,0,0,1-1.0791,1.61q-.498.5815-.5147.5977a.8082.8082,0,0,0-.2407.5224.8613.8613,0,0,0,.1577.5733.7848.7848,0,0,0,.2989.2568.8349.8349,0,0,0,.3818.0918.7732.7732,0,0,0,.1992-.0254,1.2438,1.2438,0,0,0,.1826-.0576c.0332-.0225.2017-.1133.5064-.2744s.7026-.3867,1.1953-.68,1.0454-.65,1.6606-1.0713q.92-.6314,1.9-1.4111a22.9544,22.9544,0,0,0,2.0664-1.8848,17.1512,17.1512,0,0,0,1.6026-1.9,11.1961,11.1961,0,0,0,1.22-2.2412,7.1621,7.1621,0,0,0,.5068-2.2246q.2988-.2152.6065-.4648.3062-.249.6054-.5147a18.6989,18.6989,0,0,0,1.5352-1.5107,19.7008,19.7008,0,0,0,1.3613-1.6768A20.1394,20.1394,0,0,0,33.2363,16.24a19.21,19.21,0,0,0,.9961-2,24.3682,24.3682,0,0,0,.9707-2.6065A24.4511,24.4511,0,0,0,35.9,8.8022q.2754-1.4691.416-3.03t.1406-3.2041V1.7051H35.61Q33.9507,1.7051,32.39,1.8462ZM9.3218,25.9766A7.9771,7.9771,0,0,0,7.8193,27.57q-.3822.5142-.7636,1.1367-.3824.624-.7637,1.3535-.3824.7311-.7554,1.5606t-.7554,1.7764Q5.628,33.0488,6.4,32.7t1.4526-.6885q.6806-.3412,1.27-.6894T10.21,30.625a7.7436,7.7436,0,0,0,1.8759-1.6436A3.558,3.558,0,0,0,12.7,27.8359a1.5078,1.5078,0,0,0-.0581-.8711,2.4574,2.4574,0,0,0-.5894-.8554,2.6225,2.6225,0,0,0-.6889-.5147,1.5631,1.5631,0,0,0-.689-.166A2.2867,2.2867,0,0,0,9.3218,25.9766ZM9.106,16.5635a19.2556,19.2556,0,0,1,1.6352-1.8013,14.7306,14.7306,0,0,1,1.8594-1.5356,7.95,7.95,0,0,1,2.0254-1.0293q-.4153.7309-.73,1.4194T13.3477,14.92a11.3948,11.3948,0,0,0-.3736,1.1538q-.1413.54-.2241.9546a12.2971,12.2971,0,0,0-2.7393.4815,15.0114,15.0114,0,0,0-2.2744.88Q8.35,17.51,9.106,16.5635ZM25.4082,21.9a19.2994,19.2994,0,0,1-2.3652,1.1621,12.21,12.21,0,0,1-1.8008.59,6.035,6.035,0,0,1-.9385.1661,4.9112,4.9112,0,0,1-1.2949-.6807,12.0511,12.0511,0,0,1-1.0376-.8135q-.5566-.482-1.104-1.0293t-1.021-1.0957a13.1436,13.1436,0,0,1-.8218-1.0459,4.23,4.23,0,0,1-.664-1.2949,6.0715,6.0715,0,0,1,.1577-.93,11.9386,11.9386,0,0,1,.581-1.8013,18.2121,18.2121,0,0,1,1.17-2.3657,16.6685,16.6685,0,0,1,1.9092-2.623A17.6589,17.6589,0,0,1,21.35,7.3247a19.7757,19.7757,0,0,1,3.8438-2.0669,24.009,24.009,0,0,1,4.4824-1.3115,30.6837,30.6837,0,0,1,5.0713-.5313,30.6419,30.6419,0,0,1-.5313,5.0718,24.19,24.19,0,0,1-1.3115,4.4907,19.752,19.752,0,0,1-2.0664,3.8516A17.535,17.535,0,0,1,28.04,19.9834,15.5277,15.5277,0,0,1,25.4082,21.9Zm-4.748,6.251a11.3639,11.3639,0,0,0,.4736-2.7227q.4146-.0835.9541-.2324t1.1621-.3818q.624-.2329,1.3037-.5479t1.4111-.73a8.0748,8.0748,0,0,1-1.0214,2.0254,14.0934,14.0934,0,0,1-1.5274,1.8594,19.1993,19.1993,0,0,1-1.8008,1.6357q-.9462.7545-1.8261,1.3692A16.9213,16.9213,0,0,0,20.66,28.1514ZM23.748,16.68a4.1836,4.1836,0,0,1-1.3437-.9131,4.4825,4.4825,0,0,1-.9141-1.353,4.1849,4.1849,0,0,1,0-3.3037,4.488,4.488,0,0,1,.9141-1.3531,4.1977,4.1977,0,0,1,1.3437-.913A4.1438,4.1438,0,0,1,25.4,8.5117a4.2271,4.2271,0,0,1,3.0137,1.2451,4.39,4.39,0,0,1,.9043,1.3531,4.2754,4.2754,0,0,1,0,3.3037,4.385,4.385,0,0,1-.9043,1.353,4.2725,4.2725,0,0,1-4.6661.9131Zm-.1406-5.7276a2.5654,2.5654,0,0,0,0,3.6192,2.5483,2.5483,0,0,0,4.35-1.81,2.5474,2.5474,0,0,0-4.35-1.81Z"
                transform="translate(-2.455 -1.7051)"
            ></path>
        </g>
    </svg>
);

export const ReloadIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 32.292">
        <defs></defs>
        <title>icon_reload</title>
        <g id="Ellipse_912" className="cls-1">
            <g id="Ellipse_912-2">
                <circle className={classNames('cls-2', className)} cx="21.043" cy="18.792" r="13.5"></circle>
            </g>
        </g>
        <g id="_">
            <path
                d="M32.501,23.7305a.875.875,0,0,1,.4736.5468.924.924,0,0,1-.0654.7334,15.4365,15.4365,0,0,1-2.4307,3.377A15.1348,15.1348,0,0,1,27.3057,30.94a15.3739,15.3739,0,0,1-3.7393,1.6132,15.187,15.187,0,0,1-7.0967.27A15.1851,15.1851,0,0,1,8.7139,28.666a16.4178,16.4178,0,0,1-1.8555-2.2539,14.989,14.989,0,0,1-1.3823-2.5059A14.58,14.58,0,0,1,4.604,21.18a15.509,15.509,0,0,1-.3433-2.8858L2.0713,20.4834a.9112.9112,0,0,1-.668.2783.911.911,0,0,1-.6679-.2783.94.94,0,0,1,0-1.3359l3.8037-3.8037a.94.94,0,0,1,1.3359,0l3.8037,3.8037a.9407.9407,0,0,1,0,1.3359.751.751,0,0,1-.3061.2139,1.0488,1.0488,0,0,1-.7237,0,.7438.7438,0,0,1-.3061-.2139L6.1719,18.3125a12.8235,12.8235,0,0,0,1.15,5.0283,13.3414,13.3414,0,0,0,7.0415,6.8565A12.9124,12.9124,0,0,0,19.457,31.208a13.2334,13.2334,0,0,0,3.6-.4912,13.48,13.48,0,0,0,3.2754-1.41A13.0235,13.0235,0,0,0,29.1055,27.07a13.6615,13.6615,0,0,0,2.1152-2.95.942.942,0,0,1,1.28-.39Zm5.6777-8.3867a.9407.9407,0,0,1,0,1.3359L34.375,20.4834a.746.746,0,0,1-.3066.2139,1.046,1.046,0,0,1-.7227,0,.7389.7389,0,0,1-.3066-.2139L29.2354,16.68a.9446.9446,0,1,1,1.3359-1.3359l2.1709,2.1708a12.8237,12.8237,0,0,0-1.15-5.0375,13.6361,13.6361,0,0,0-2.8672-4.1006,13.2289,13.2289,0,0,0-4.1738-2.7554,13.0162,13.0162,0,0,0-5.0938-1.002A13.2634,13.2634,0,0,0,12.5918,6.521,13.4409,13.4409,0,0,0,9.8179,8.7476,13.0877,13.0877,0,0,0,7.6934,11.707a.9419.9419,0,0,1-1.28.39A.933.933,0,0,1,5.94,11.54a.8978.8978,0,0,1,.065-.7236A15.4437,15.4437,0,0,1,8.4355,7.44a15.0781,15.0781,0,0,1,3.1729-2.5513,15.3689,15.3689,0,0,1,3.7388-1.6143,15.1941,15.1941,0,0,1,7.0971-.269,15.2471,15.2471,0,0,1,5.4366,2.2544A15.1292,15.1292,0,0,1,30.2,7.1611,15.6254,15.6254,0,0,1,32.0557,9.397a14.8906,14.8906,0,0,1,2.2548,5.2417,15.4918,15.4918,0,0,1,.3428,2.8759l2.1895-2.1708a.94.94,0,0,1,1.3359,0ZM20.4033,23.6191a.9109.9109,0,0,0,.668-.2783.9323.9323,0,0,0,.2783-.6865v-9.5a.95.95,0,0,0-.9463-.9463H18.5107a.95.95,0,0,0-.9462.9463.9319.9319,0,0,0,.2783.6865.9106.9106,0,0,0,.6679.2783h.9463v8.5352a.932.932,0,0,0,.2784.6865A.9106.9106,0,0,0,20.4033,23.6191Z"
                transform="translate(-0.457 -2.708)"
            ></path>
        </g>
    </svg>
);

export const ProtectIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.543 37.2951">
        <defs></defs>
        <title>icon_protect</title>
        <g id="Shape_913" className="cls-1">
            <g id="Shape_913-2">
                <path
                    className={classNames('cls-2', className)}
                    d="M28,10a18.96,18.96,0,0,1-8-4s.1034-.847-3,2-9,3-9,3A73.0619,73.0619,0,0,0,9,25c1.2656,6.7515,12,13,12,13s3.84-2.0564,8-8,6-19,6-19S33.07,11.2269,28,10Z"
                    transform="translate(-2.457 -0.7051)"
                ></path>
            </g>
        </g>
        <g id="_">
            <path
                d="M18.4775,34.6973a1.2731,1.2731,0,0,1-.1328-.0254,11.5531,11.5531,0,0,1-2.4736-1.2207,20.8921,20.8921,0,0,1-2.5982-1.9668,28.1217,28.1217,0,0,1-2.5649-2.5821A31.7981,31.7981,0,0,1,8.334,25.84q-.9961-1.4779-2.042-3.4277a31.4216,31.4216,0,0,1-1.9009-4.3667,35.599,35.599,0,0,1-1.3945-5.2627,32.8373,32.8373,0,0,1-.54-6.1177.85.85,0,0,1,.8467-.8466,16.7923,16.7923,0,0,0,3.9844-.54,39.8823,39.8823,0,0,0,4.2832-1.3115q2.0917-.7721,3.8516-1.627A23.9759,23.9759,0,0,0,18.1289.8545a.8239.8239,0,0,1,.9463,0A23.7635,23.7635,0,0,0,21.7891,2.34q1.77.8555,3.86,1.627a40.1437,40.1437,0,0,0,4.2744,1.3115,16.7,16.7,0,0,0,3.9766.54.835.835,0,0,1,.6142.249.8147.8147,0,0,1,.2491.5976,32.3651,32.3651,0,0,1-.5479,6.1177,37.1051,37.1051,0,0,1-1.3945,5.2627,30.8055,30.8055,0,0,1-1.8926,4.3667A37.284,37.284,0,0,1,28.87,25.84a30.1163,30.1163,0,0,1-2.3574,3.0625,28.1251,28.1251,0,0,1-2.5654,2.5821A20.8516,20.8516,0,0,1,21.35,33.4512a11.5531,11.5531,0,0,1-2.4736,1.2207,1.325,1.325,0,0,1-.1328.0254,1.241,1.241,0,0,1-.1328.0078A1.2263,1.2263,0,0,1,18.4775,34.6973ZM4.7729,13.0151A34.3973,34.3973,0,0,0,6.1094,17.78,30.8037,30.8037,0,0,0,7.8608,21.748a32.3291,32.3291,0,0,0,1.8843,3.129,28.6479,28.6479,0,0,0,2.3325,3.0048,28.1348,28.1348,0,0,0,2.3658,2.3662,18.3776,18.3776,0,0,0,2.2329,1.7012A11.1592,11.1592,0,0,0,18.61,32.9619a11.2189,11.2189,0,0,0,1.9345-1.0127,18.4527,18.4527,0,0,0,2.2324-1.7012,28.1177,28.1177,0,0,0,2.3653-2.3662A27.1361,27.1361,0,0,0,27.459,24.877a33.3822,33.3822,0,0,0,1.8926-3.129,30.1393,30.1393,0,0,0,1.76-3.9682A33.7454,33.7454,0,0,0,32.44,13.0151a31.9211,31.9211,0,0,0,.6142-5.5366,19.0555,19.0555,0,0,1-2.125-.2573q-1.08-.1905-2.1162-.4649-1.0386-.2739-2.01-.5893T25.002,5.5527q-.8966-.3486-1.793-.7221t-1.7266-.7554q-.8305-.3816-1.56-.7637T18.61,2.5645q-.5815.3654-1.32.747T15.73,4.0752q-.8219.3823-1.7183.7554t-1.81.7221q-.8136.2989-1.7846.6143T8.4,6.7563q-1.0459.274-2.1167.4649a18.75,18.75,0,0,1-2.1167.2573A30.3477,30.3477,0,0,0,4.7729,13.0151Zm11.82,8.8814a.7861.7861,0,0,1-.2906-.19l-3.4033-3.3868a.8569.8569,0,0,1,1.2119-1.2119L16.9,19.9131l7.9023-7.9024a.8618.8618,0,0,1,1.2119,0,.8416.8416,0,0,1,0,1.1954l-8.5,8.5a.793.793,0,0,1-.2905.19.9264.9264,0,0,1-.3237.0586A.8794.8794,0,0,1,16.5933,21.8965Z"
                transform="translate(-2.457 -0.7051)"
            ></path>
        </g>
    </svg>
);

export const SupportIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34.2949">
        <defs></defs>
        <title>icon_support</title>
        <g id="Ellipse_914" className="cls-1">
            <g id="Ellipse_914-2">
                <circle className={classNames('cls-2', className)} cx="18.543" cy="20.2949" r="14"></circle>
            </g>
        </g>
        <g id="_">
            <path
                d="M31.4766,6.6855a16.8912,16.8912,0,0,1,2.1328,2.5982,17.2772,17.2772,0,0,1,1.56,2.9136,16.2908,16.2908,0,0,1,.9629,3.1709,17.38,17.38,0,0,1,0,6.6826,16.3339,16.3339,0,0,1-.9629,3.1621,17.5477,17.5477,0,0,1-1.56,2.9219,16.05,16.05,0,0,1-2.1328,2.59,16.4734,16.4734,0,0,1-2.59,2.1416,16.774,16.774,0,0,1-6.084,2.5147,17.4231,17.4231,0,0,1-6.6909,0,16.7715,16.7715,0,0,1-6.0845-2.5147,16.4772,16.4772,0,0,1-2.59-2.1416,16.0793,16.0793,0,0,1-2.1333-2.59,17.6069,17.6069,0,0,1-1.56-2.9219,16.4388,16.4388,0,0,1-.9629-3.1621,17.4013,17.4013,0,0,1,0-6.6826,16.3948,16.3948,0,0,1,.9629-3.1709,17.3348,17.3348,0,0,1,1.56-2.9136A17.0255,17.0255,0,0,1,12.9492,3a17.2959,17.2959,0,0,1,3.1626-.9629,17.0215,17.0215,0,0,1,6.6909,0A17.31,17.31,0,0,1,25.9648,3a16.9734,16.9734,0,0,1,5.5118,3.6855ZM4.15,18.7051c0,.2881.0083.5752.0249.8633s.0415.57.0747.8466H9.3965q-.0666-.4144-.1-.8388c-.0225-.2813-.0332-.5723-.0332-.8711q0-.4314.0332-.855t.1-.8384H4.25q-.05.4153-.0747.8384T4.15,18.7051ZM16.0537,3.7969a14.7442,14.7442,0,0,0-4.0259,1.5439,15.602,15.602,0,0,0-3.3867,2.565,15.4082,15.4082,0,0,0-4.1089,7.4126H9.8447a9.8159,9.8159,0,0,1,.9961-2.0586,10.3207,10.3207,0,0,1,3.1709-3.1709,9.983,9.983,0,0,1,2.042-.9961ZM4.5322,22.1084a15.4068,15.4068,0,0,0,4.1089,7.4131,15.6,15.6,0,0,0,3.3867,2.5644,14.7445,14.7445,0,0,0,4.0259,1.544V28.334a10.9506,10.9506,0,0,1-2.042-1.0039,10.0612,10.0612,0,0,1-1.76-1.4033,10.3566,10.3566,0,0,1-1.4112-1.76,9.804,9.804,0,0,1-.9961-2.0586ZM19.457,27.2051a8.278,8.278,0,0,0,3.3037-.6641,8.5518,8.5518,0,0,0,2.6983-1.8183,8.6709,8.6709,0,0,0,1.8262-2.7051,8.46,8.46,0,0,0,0-6.6079,8.5861,8.5861,0,0,0-4.5245-4.5323,8.4534,8.4534,0,0,0-6.6074,0A8.5878,8.5878,0,0,0,11.6294,15.41a8.4534,8.4534,0,0,0,0,6.6079,8.6336,8.6336,0,0,0,1.8262,2.7051,8.5435,8.5435,0,0,0,2.6977,1.8183A8.2766,8.2766,0,0,0,19.457,27.2051ZM21.15,3.5146c-.2764-.0332-.5566-.0581-.8379-.0747-.2832-.0166-.5674-.0249-.8555-.0249s-.5727.0083-.8549.0249-.5621.0415-.8384.0747V8.6611a7.2176,7.2176,0,0,1,.8384-.1162q.4233-.033.8549-.0332c.2881,0,.5723.0112.8555.0332a7.2421,7.2421,0,0,1,.8379.1162ZM17.7637,33.9121c.2763.0332.5561.0586.8384.0742.2822.0176.5668.0254.8549.0254s.5723-.0078.8555-.0254c.2813-.0156.5615-.041.8379-.0742V28.7656c-.2764.044-.5566.08-.8379.1074a8.7277,8.7277,0,0,1-1.71,0q-.4234-.0409-.8384-.1074ZM34.3818,15.3184a15.4,15.4,0,0,0-4.1084-7.4126,15.6213,15.6213,0,0,0-3.3867-2.565A14.7579,14.7579,0,0,0,22.86,3.7969V9.0928a9.9822,9.9822,0,0,1,2.0419.9961A10.3178,10.3178,0,0,1,28.0732,13.26a9.8555,9.8555,0,0,1,.9961,2.0586ZM22.86,33.63a14.7582,14.7582,0,0,0,4.0263-1.544,15.6188,15.6188,0,0,0,3.3867-2.5644,15.3984,15.3984,0,0,0,4.1084-7.4131H29.0693a9.8435,9.8435,0,0,1-.9961,2.0586,10.3512,10.3512,0,0,1-1.4111,1.76,10.08,10.08,0,0,1-1.76,1.4033A10.95,10.95,0,0,1,22.86,28.334Zm6.6572-16.6182q.0658.4153.1.8384t.0332.855c0,.2988-.0108.59-.0332.8711q-.0338.4248-.1.8388h5.1465c.0332-.2763.0586-.5586.0742-.8466.0176-.2881.0254-.5752.0254-.8633s-.0078-.5728-.0254-.855c-.0156-.2822-.041-.5615-.0742-.8384Z"
                transform="translate(-2.457 -1.7051)"
            ></path>
        </g>
    </svg>
);

export const TagIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.2812 29.7814">
        <defs></defs>
        <title>icon_tag</title>
        <g id="Shape_915" className="cls-1">
            <g id="Shape_915-2">
                <path
                    className={classNames('cls-2', className)}
                    d="M32,10a35.9769,35.9769,0,0,0-8,1L9,27l9,7S34.66,20.61,35,17,35.1641,10.1624,32,10Z"
                    transform="translate(-2.3828 -4.2188)"
                ></path>
            </g>
        </g>
        <g id="_">
            <path
                d="M32.957,4.2188a2.7009,2.7009,0,0,1,2.7071,2.6894v6.3106a5.2053,5.2053,0,0,1-.4395,1.9775,5.2448,5.2448,0,0,1-1.1074,1.7314L20.459,30.5684a2.481,2.481,0,0,1-.8613.5888,2.761,2.761,0,0,1-2.0743,0,2.6647,2.6647,0,0,1-.8789-.5888L15.291,29.2148,12.9,30.6035a2.467,2.467,0,0,1-.6416.2637,2.7845,2.7845,0,0,1-.6943.0879q-.1758,0-.3516-.0176a1.8718,1.8718,0,0,1-.3516-.07,2.6628,2.6628,0,0,1-.9492-.4658,2.8952,2.8952,0,0,1-.7031-.7823L2.74,18.4043a2.8141,2.8141,0,0,1-.334-1.002,2.6806,2.6806,0,0,1,.07-1.0546,2.77,2.77,0,0,1,.4658-.9405,2.6017,2.6017,0,0,1,.7822-.6943L18.1035,6.416a.8814.8814,0,0,1,.6944-.0967.8243.8243,0,0,1,.5361.4307.8335.8335,0,0,1,.0967.6768A.8851.8851,0,0,1,19,7.9805L4.6387,16.2773a.8242.8242,0,0,0-.4307.5362.8811.8811,0,0,0,.0967.6943l6.4687,11.1973a.929.929,0,0,0,.2286.2724.7184.7184,0,0,0,.3164.1495.7977.7977,0,0,0,.3515.0263.9834.9834,0,0,0,.334-.1142l1.9688-1.1426L9.2969,23.2207a2.6665,2.6665,0,0,1-.5889-.8789,2.7395,2.7395,0,0,1,0-2.0654,2.4634,2.4634,0,0,1,.5889-.87L22.9551,5.748a5.8559,5.8559,0,0,1,3.709-1.5292Zm.8965,9V6.9082a.9.9,0,0,0-.8965-.8965H26.6641a3.4566,3.4566,0,0,0-1.3008.3076,3.708,3.708,0,0,0-1.1426.6944L10.5625,20.6719a.8994.8994,0,0,0-.1934.29.8767.8767,0,0,0-.07.3428.8569.8569,0,0,0,.07.3515,1.1856,1.1856,0,0,0,.1934.2989l7.3652,7.3476a.927.927,0,0,0,.2813.1934.8556.8556,0,0,0,.3515.07.8749.8749,0,0,0,.3428-.07.8993.8993,0,0,0,.29-.1934L32.8516,15.6445a3.4549,3.4549,0,0,0,.6943-1.1338A3.49,3.49,0,0,0,33.8535,13.2188Zm-4.5,0a2.7008,2.7008,0,0,0,2.707-2.7071,2.6982,2.6982,0,1,0-4.6054,1.916A2.5888,2.5888,0,0,0,29.3535,13.2188Zm0-3.6036a.9.9,0,1,1-.6328.2637A.863.863,0,0,1,29.3535,9.6152Z"
                transform="translate(-2.3828 -4.2188)"
            ></path>
        </g>
    </svg>
);

export const PhoneIcon = () => (
    <svg viewBox="0 0 32 32">
        <path d="M25.6 32c-2.834 0-5.849-0.803-8.96-2.387-2.869-1.46-5.703-3.552-8.196-6.048s-4.581-5.332-6.040-8.203c-1.581-3.113-2.383-6.128-2.383-8.962 0-1.837 1.711-3.611 2.447-4.288 1.058-0.974 2.722-2.111 3.931-2.111 0.601 0 1.306 0.393 2.219 1.238 0.681 0.63 1.446 1.485 2.213 2.471 0.462 0.594 2.768 3.633 2.768 5.091 0 1.196-1.352 2.027-2.782 2.906-0.553 0.34-1.125 0.691-1.538 1.023-0.441 0.354-0.52 0.54-0.533 0.582 1.519 3.785 6.161 8.427 9.944 9.943 0.034-0.011 0.221-0.084 0.581-0.534 0.331-0.414 0.683-0.985 1.023-1.538 0.88-1.431 1.71-2.782 2.906-2.782 1.458 0 4.497 2.306 5.091 2.768 0.986 0.767 1.841 1.532 2.471 2.213 0.845 0.912 1.238 1.617 1.238 2.218 0 1.209-1.137 2.879-2.11 3.941-0.678 0.739-2.453 2.459-4.29 2.459zM6.39 1.6c-0.429 0.008-1.582 0.533-2.837 1.688-1.191 1.097-1.931 2.289-1.931 3.111 0 10.766 13.222 24 23.978 24 0.821 0 2.013-0.744 3.11-1.941 1.156-1.261 1.681-2.419 1.69-2.849-0.052-0.304-0.893-1.486-3.195-3.259-1.979-1.524-3.584-2.34-3.997-2.351-0.029 0.009-0.208 0.077-0.571 0.538-0.316 0.401-0.654 0.951-0.98 1.482-0.896 1.458-1.743 2.836-2.973 2.836-0.198 0-0.394-0.038-0.581-0.113-4.199-1.68-9.166-6.646-10.846-10.846-0.202-0.504-0.234-1.294 0.758-2.193 0.528-0.478 1.258-0.927 1.964-1.361 0.531-0.327 1.081-0.664 1.482-0.98 0.461-0.363 0.53-0.542 0.538-0.571-0.011-0.413-0.827-2.018-2.351-3.997-1.772-2.302-2.955-3.143-3.259-3.195z"></path>
    </svg>
);

export const HomeIcon = () => (
    <svg viewBox="0 0 32 32">
        <path d="M0.8 19.2c-0.191 0-0.383-0.068-0.536-0.207-0.328-0.296-0.353-0.802-0.056-1.13l14.127-15.614c0.439-0.485 1.031-0.753 1.667-0.753 0 0 0 0 0 0 0.636 0 1.227 0.267 1.667 0.753l14.127 15.614c0.296 0.328 0.271 0.834-0.056 1.13s-0.834 0.271-1.13-0.056l-14.127-15.614c-0.132-0.146-0.302-0.226-0.48-0.226s-0.348 0.080-0.48 0.226l-14.127 15.614c-0.158 0.175-0.375 0.263-0.594 0.263zM24.8 32h-6.4c-0.442 0-0.8-0.358-0.8-0.8v-5.6h-3.2v5.6c0 0.442-0.358 0.8-0.8 0.8h-6.4c-1.323 0-2.4-1.077-2.4-2.4v-12.8c0-0.442 0.358-0.8 0.8-0.8s0.8 0.358 0.8 0.8v12.8c0 0.441 0.359 0.8 0.8 0.8h5.6v-5.6c0-0.442 0.358-0.8 0.8-0.8h4.8c0.442 0 0.8 0.358 0.8 0.8v5.6h5.6c0.441 0 0.8-0.359 0.8-0.8v-12.8c0-0.442 0.358-0.8 0.8-0.8s0.8 0.358 0.8 0.8v12.8c0 1.323-1.077 2.4-2.4 2.4z"></path>
    </svg>
);

export const MailIcon = () => (
    <svg viewBox="0 0 32 32">
        <path d="M28 9.6h-25.6c-1.323 0-2.4 1.077-2.4 2.4v14.4c0 1.323 1.077 2.4 2.4 2.4h25.6c1.323 0 2.4-1.077 2.4-2.4v-14.4c0-1.323-1.077-2.4-2.4-2.4zM28 11.2c0.047 0 0.093 0.005 0.139 0.013l-12.051 8.034c-0.464 0.31-1.311 0.31-1.775 0l-12.051-8.034c0.045-0.008 0.091-0.013 0.139-0.013h25.6zM28 27.2h-25.6c-0.441 0-0.8-0.359-0.8-0.8v-13.705l11.825 7.883c0.498 0.332 1.136 0.498 1.775 0.498s1.277-0.166 1.775-0.498l11.825-7.883v13.705c0 0.441-0.359 0.8-0.8 0.8z"></path>
    </svg>
);
