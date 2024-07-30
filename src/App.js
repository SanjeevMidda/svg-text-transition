import "./index.css";

function App() {
  return (
    <div className="App">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
          d="M2 124C4.0959 88.3699 20.8974 63.6023 47 42.0002C56.3116 34.294 58.6735 34.0002 70.8889 34.0002C83.4652 34.0002 99.1356 42.8061 104.444 54.4446C117.526 83.1239 143.185 98.8721 172.444 109C184.482 113.167 197.29 114 209.889 114C221.689 114 235.61 98.8194 242.444 90.0002C254.461 74.4951 258.522 54.9005 277.222 45.0002C287.827 39.3861 306.528 41.0464 317.667 44.4446C343.157 52.2215 357.612 60.2635 372.444 82.0002C378.629 91.0637 382.383 109.602 392 115.556C403.036 122.388 430.58 122.839 440.889 115.667C458.714 103.266 478.42 86.6142 491.889 69.7779C502.444 56.5841 511.039 37.4807 526.889 29.5557C540.484 22.7582 557.064 23.1386 571.778 25.3335C589.212 27.9342 612.947 29.6355 628 40.0002C638.413 47.1701 643.109 67.3884 647.667 78.5557C653.24 92.2092 652.479 103.616 665.889 111.778C674.642 117.106 679.094 118 689.333 118C699.377 118 714.893 120.969 724.444 117.111C742.03 110.01 760.255 91.1072 774.667 78.8891C783.842 71.1102 792.484 53.7976 799.111 43.3335C806.931 30.9857 812.28 16.0799 823.444 6.11128C828.431 1.65858 839.874 2.27757 845.778 2.11128C865.988 1.54197 887.177 0.808697 907 5.3335C916.332 7.4637 921.611 9.92181 926.222 18.4446C934.799 34.2959 942.765 50.5564 951.333 66.4446C957.842 78.5142 964.676 101.466 978 108.445C985.382 112.311 994.51 112.968 1002.67 113.556C1020.42 114.835 1020.07 105.968 1026.11 91.3335C1031.6 78.0358 1036.18 62.4824 1045.11 51.0002C1050.73 43.7786 1053.78 42.9813 1062 39.5557C1075.36 33.9907 1091.57 31.0475 1105.56 26.8891C1127.39 20.3986 1146.86 18.5393 1170 20.2224C1191.61 21.7942 1200.69 56.4244 1207.78 72.6668C1212.48 83.4465 1217.92 93.9736 1230 98.0002"
          stroke="black"
          stroke-width="1"
          stroke-linecap="round"
          id="line"
        />

        <text>
          <textPath href="#line" startOffset="200px">
            A
          </textPath>
          <textPath href="#line" startOffset="400px">
            B
          </textPath>
          <textPath href="#line" startOffset="600px">
            C
          </textPath>
          <textPath href="#line" startOffset="800px">
            D
          </textPath>
          <textPath href="#line" startOffset="1000px">
            E
          </textPath>
          <textPath href="#line" startOffset="1200px">
            F
          </textPath>
          <textPath href="#line" startOffset="1500px">
            G
          </textPath>
        </text>
      </svg>

      {/* <svg xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 124C4.0959 88.3699 20.8974 63.6023 47 42.0002C56.3116 34.294 58.6735 34.0002 70.8889 34.0002C83.4652 34.0002 99.1356 42.8061 104.444 54.4446C117.526 83.1239 143.185 98.8721 172.444 109C184.482 113.167 197.29 114 209.889 114C221.689 114 235.61 98.8194 242.444 90.0002C254.461 74.4951 258.522 54.9005 277.222 45.0002C287.827 39.3861 306.528 41.0464 317.667 44.4446C343.157 52.2215 357.612 60.2635 372.444 82.0002C378.629 91.0637 382.383 109.602 392 115.556C403.036 122.388 430.58 122.839 440.889 115.667C458.714 103.266 478.42 86.6142 491.889 69.7779C502.444 56.5841 511.039 37.4807 526.889 29.5557C540.484 22.7582 557.064 23.1386 571.778 25.3335C589.212 27.9342 612.947 29.6355 628 40.0002C638.413 47.1701 643.109 67.3884 647.667 78.5557C653.24 92.2092 652.479 103.616 665.889 111.778C674.642 117.106 679.094 118 689.333 118C699.377 118 714.893 120.969 724.444 117.111C742.03 110.01 760.255 91.1072 774.667 78.8891C783.842 71.1102 792.484 53.7976 799.111 43.3335C806.931 30.9857 812.28 16.0799 823.444 6.11128C828.431 1.65858 839.874 2.27757 845.778 2.11128C865.988 1.54197 887.177 0.808697 907 5.3335C916.332 7.4637 921.611 9.92181 926.222 18.4446C934.799 34.2959 942.765 50.5564 951.333 66.4446C957.842 78.5142 964.676 101.466 978 108.445C985.382 112.311 994.51 112.968 1002.67 113.556C1020.42 114.835 1020.07 105.968 1026.11 91.3335C1031.6 78.0358 1036.18 62.4824 1045.11 51.0002C1050.73 43.7786 1053.78 42.9813 1062 39.5557C1075.36 33.9907 1091.57 31.0475 1105.56 26.8891C1127.39 20.3986 1146.86 18.5393 1170 20.2224C1191.61 21.7942 1200.69 56.4244 1207.78 72.6668C1212.48 83.4465 1217.92 93.9736 1230 98.0002"
          stroke="black"
          stroke-width="3"
          stroke-linecap="round"
          id="line"
          fill="none"
        />
        <text>
          <textPath href="#line" startOffset="200px">
            `sdgasdfrgasdefrgaedrfgh ddrfhgdearfheasdrhsetdr
            adefrhadesthsdert`hello sorgthaeso;ruhg regergtyesrtyrthyrt
          </textPath>
        </text>
      </svg> */}
    </div>
  );
}

export default App;
