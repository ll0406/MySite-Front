import React, { Component } from 'react';
import './HomeTech.scss';
import { TweenMax, Linear, TimelineMax, Expo, Power0 } from "gsap";

class HomeTech extends Component {
  constructor(props) {
    super(props);
    this.techSVG = React.createRef();
    this.textRef = React.createRef();
  }

  componentDidMount() {
    let tl = new TimelineMax();
    let children = this.techSVG.current.children;
    let textChildren = this.textRef.current.children;
    let faceParticle = [children[2],children[3]]
    let other = [children[0], children[1], children[4],children[5]]
    tl.set(this.techSVG.current.children, {opacity: 0, x: -100})
    tl.staggerTo(faceParticle.reverse(), 0.3, {x:0, opacity:1}, 0.2);
    tl.to(other, 0.5, {x:0, opacity:1},"-=0.2");
    tl.from(textChildren, 0.8, {x: -50, opacity: 0}, "-=0.2")
  }

  render() {
    return (
      <div className='HomeTech'>
        <div className='word-div' ref={this.textRef}>
          <div className='title'>
            <h2>Human Centered</h2>
          </div>
          <div className='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
               ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                 cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <svg version="1.2" viewBox="0 0 1920 1080"  preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="a" y1="828.94" x2="1918.96" y2="828.94" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#069"/>
              <stop offset="0.09" stop-color="#0d709d"/>
              <stop offset="0.38" stop-color="#348baa"/>
              <stop offset="0.55" stop-color="#3088a9"/>
              <stop offset="0.72" stop-color="#237fa4"/>
              <stop offset="0.9" stop-color="#0e709d"/>
              <stop offset="0.99" stop-color="#069"/>
            </linearGradient>
            <linearGradient id="b" x1="236.79" y1="84.12" x2="689.61" y2="84.12"/>
          </defs>
          <g ref={this.techSVG}>
            <g id="main_head" >
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="944" y1="202" x2="930" y2="202"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="918" y1="216" x2="944" y2="202"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="990.5" y1="189.5" x2="943.5" y2="201.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="943.5" y1="201.5" x2="974.5" y2="309.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1038.5" y1="486.5" x2="974.5" y2="309.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1011.5" y1="507.5" x2="1038.5" y2="486.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="974.5" y1="309.5" x2="1011.5" y2="507.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="950.5" y1="337.5" x2="974.5" y2="309.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1015.5" y1="487.5" x2="1038.5" y2="486.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1011.5" y1="507.5" x2="1025.5" y2="561.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1038.5" y1="486.5" x2="1025.5" y2="561.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="988.5" y1="523.5" x2="1011.5" y2="507.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1025.5" y1="561.5" x2="1098.5" y2="621.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1072.5" y1="643.5" x2="1098.5" y2="621.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1004.5" y1="591.5" x2="1025.5" y2="561.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1098.5" y1="621.5" x2="1138.5" y2="625.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1114.5" y1="646.5" x2="1138.5" y2="625.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1218.5" y1="625.5" x2="1138.5" y2="625.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1182.5" y1="613.5" x2="1138.5" y2="625.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1218.5" y1="625.5" x2="1182.5" y2="613.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1242.5" y1="632.5" x2="1218.5" y2="625.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="974.5" y1="309.5" x2="1033.5" y2="243.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1091.5" y1="209.5" x2="1033.5" y2="243.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="943.5" y1="201.5" x2="1003.5" y2="205.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1033.5" y1="243.5" x2="1003.5" y2="205.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="974.5" y1="229.5" x2="1003.5" y2="205.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1091.5" y1="209.5" x2="1003.5" y2="205.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1033.5" y1="243.5" x2="1040.5" y2="425.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1120.5" y1="442.5" x2="1040.5" y2="425.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1072.5" y1="517.5" x2="1130.5" y2="453.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1120.5" y1="442.5" x2="1130.5" y2="453.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1135.5" y1="436.5" x2="1120.5" y2="442.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1130.5" y1="453.5" x2="1135.5" y2="436.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1072.5" y1="517.5" x2="1038.5" y2="486.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1098.5" y1="621.5" x2="1072.5" y2="517.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1182.5" y1="613.5" x2="1072.5" y2="517.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1135.5" y1="436.5" x2="1174.5" y2="373.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1135.5" y1="438.5" x2="1162.5" y2="453.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1025.5" y1="278.5" x2="1033.5" y2="244.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1040.5" y1="427.5" x2="1062.5" y2="440.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="1041.5" y1="425.5" x2="1039.5" y2="486.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="811.5" y1="278.5" x2="885.5" y2="209.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="811.5" y1="278.5" x2="799.5" y2="274.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="811.5" y1="278.5" x2="846.5" y2="293.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="885.5" y1="209.5" x2="846.5" y2="293.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="842.5" y1="372.5" x2="846.5" y2="293.5"/>
              <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="790.5" y1="324.5" x2="811.5" y2="278.5"/>
              <circle fill="#115BAA" cx="885.499" cy="209.597" r="3.599"/>
              <circle fill="#115BAA" cx="799.122" cy="274.979" r="2.399"/>
              <circle fill="#115BAA" cx="790.012" cy="327.165" r="2.399"/>
              <circle fill="#115BAA" cx="914.292" cy="216.195" r="3.599"/>
              <circle fill="#115BAA" cx="926.573" cy="202.416" r="3.599"/>
              <circle fill="#115BAA" cx="974.676" cy="232.99" r="3.599"/>
              <circle fill="#115BAA" cx="987.672" cy="189.536" r="2.399"/>
              <circle fill="#115BAA" cx="820.927" cy="377.552" r="2.399"/>
              <circle fill="#115BAA" cx="842.311" cy="372.154" r="2.399"/>
              <circle fill="#115BAA" cx="802.721" cy="429.438" r="2.399"/>
              <circle fill="#115BAA" cx="866.904" cy="412.043" r="2.399"/>
              <circle fill="#115BAA" cx="874.702" cy="433.937" r="2.399"/>
              <circle fill="#115BAA" cx="812.319" cy="448.033" r="2.399"/>
              <circle fill="#115BAA" cx="859.106" cy="462.13" r="3.599"/>
              <circle fill="#115BAA" cx="920.89" cy="394.948" r="3.599"/>
              <circle fill="#115BAA" cx="935.586" cy="434.537" r="3.599"/>
              <circle fill="#115BAA" cx="951.082" cy="402.446" r="3.599"/>
              <circle fill="#115BAA" cx="906.494" cy="548.732" r="3.599"/>
              <circle fill="#115BAA" cx="988.672" cy="523.314" r="3.599"/>
              <circle fill="#115BAA" cx="897.796" cy="590.646" r="2.399"/>
              <circle fill="#115BAA" cx="878.451" cy="638.783" r="2.399"/>
              <circle fill="#115BAA" cx="1001.269" cy="591.695" r="3.599"/>
              <circle fill="#115BAA" cx="975.475" cy="555.18" r="3.599"/>
              <circle fill="#115BAA" cx="1013.865" cy="566.502" r="3.599"/>
              <circle fill="#115BAA" cx="923.889" cy="691.269" r="2.399"/>
              <circle fill="#115BAA" cx="1021.063" cy="621.688" r="3.599"/>
              <circle fill="#115BAA" cx="1046.857" cy="665.026" r="3.599"/>
              <circle fill="#115BAA" cx="1046.857" cy="697.268" r="3.599"/>
              <circle fill="#115BAA" cx="1117.788" cy="694.268" r="3.599"/>
              <circle fill="#115BAA" cx="1111.04" cy="646.881" r="3.599"/>
              <circle fill="#115BAA" cx="1072.35" cy="643.357" r="3.599"/>
              <circle fill="#115BAA" cx="1097.843" cy="571.301" r="3.599"/>
              <circle fill="#115BAA" cx="1015.065" cy="487.323" r="3.599"/>
              <circle fill="#115BAA" cx="950.282" cy="337.363" r="3.599"/>
              <circle fill="#115BAA" cx="1025.82" cy="278.858" r="3.599"/>
              <circle fill="#115BAA" cx="1091.845" cy="209.597" r="2.399"/>
              <circle fill="#115BAA" cx="1062.453" cy="348.16" r="3.599"/>
              <circle fill="#115BAA" cx="1055.404" cy="396.203" r="3.599"/>
              <circle fill="#115BAA" cx="1062.453" cy="440.535" r="3.599"/>
              <circle fill="#115BAA" cx="1109.752" cy="306.021" r="2.399"/>
              <circle fill="#115BAA" cx="1075.049" cy="393.748" r="2.399"/>
              <circle fill="#115BAA" cx="1090.345" cy="418.341" r="2.399"/>
              <circle fill="#115BAA" cx="1091.845" cy="362.556" r="2.399"/>
              <circle fill="#115BAA" cx="1144.479" cy="429.327" r="2.399"/>
              <circle fill="#115BAA" cx="1119.437" cy="342.161" r="2.399"/>
              <circle fill="#115BAA" cx="1118.238" cy="320.567" r="3.599"/>
              <circle fill="#115BAA" cx="1159.327" cy="313.369" r="3.599"/>
              <circle fill="#115BAA" cx="1167.464" cy="356.739" r="2.399"/>
              <circle fill="#115BAA" cx="1138.32" cy="359.139" r="2.399"/>
              <circle fill="#115BAA" cx="1106.241" cy="404.004" r="2.399"/>
              <circle fill="#115BAA" cx="1105.641" cy="378.152" r="2.399"/>
              <circle fill="#115BAA" cx="1147.28" cy="370.354" r="2.399"/>
              <circle fill="#115BAA" cx="1123.111" cy="394.948" r="2.399"/>
              <circle fill="#115BAA" cx="1138.632" cy="411.443" r="2.399"/>
              <circle fill="#115BAA" cx="1150.629" cy="406.045" r="2.399"/>
              <circle fill="#115BAA" cx="1174.023" cy="370.954" r="2.399"/>
              <circle fill="#115BAA" cx="1190.219" cy="453.132" r="2.399"/>
              <circle fill="#115BAA" cx="1208.214" cy="433.937" r="2.399"/>
              <circle fill="#115BAA" cx="1233.407" cy="412.343" r="2.399"/>
              <circle fill="#115BAA" cx="1257.401" cy="430.338" r="3.599"/>
              <circle fill="#115BAA" cx="1247.803" cy="450.133" r="2.399"/>
              <circle fill="#115BAA" cx="1208.214" cy="475.926" r="2.399"/>
              <circle fill="#115BAA" cx="1230.829" cy="478.625" r="2.399"/>
              <circle fill="#115BAA" cx="1185.42" cy="490.922" r="3.599"/>
              <circle fill="#115BAA" cx="1179.19" cy="513.985" r="2.399"/>
              <circle fill="#115BAA" cx="1231.008" cy="520.914" r="2.399"/>
              <circle fill="#115BAA" cx="1243.005" cy="502.469" r="2.399"/>
              <circle fill="#115BAA" cx="1245.404" cy="524.513" r="2.399"/>
              <circle fill="#115BAA" cx="1205.215" cy="535.76" r="2.399"/>
              <circle fill="#115BAA" cx="1252.602" cy="541.309" r="2.399"/>
              <circle fill="#115BAA" cx="1243.005" cy="561.703" r="2.399"/>
              <circle fill="#115BAA" cx="1179.19" cy="557.807" r="3.599"/>
              <circle fill="#115BAA" cx="1200.287" cy="591.171" r="3.599"/>
              <circle fill="#115BAA" cx="1238.206" cy="574" r="2.399"/>
              <circle fill="#115BAA" cx="1252.602" cy="606.692" r="3.599"/>
              <circle fill="#115BAA" cx="1225.027" cy="610.02" r="3.599"/>
              <circle fill="#115BAA" cx="1242.29" cy="632.485" r="2.399"/>
              <circle fill="#115BAA" cx="1222.61" cy="645.081" r="2.399"/>
              <circle fill="#115BAA" cx="1179.422" cy="632.485" r="2.399"/>
              <circle fill="#115BAA" cx="1162.326" cy="454.495" r="2.399"/>
              <circle fill="#115BAA" cx="1145.231" cy="459.73" r="2.399"/>
              <circle fill="#115BAA" cx="1155.922" cy="470.422" r="2.399"/>
              <circle fill="#B0CFE2" cx="944.223" cy="201.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="1003.223" cy="205.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="1033.223" cy="242.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="974.223" cy="309.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="1040.223" cy="425.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="1038.223" cy="486.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="1011.223" cy="507.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="1025.223" cy="561.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="1072.223" cy="517.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="1120.223" cy="442.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="1130.223" cy="453.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="1135.223" cy="436.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="1098.223" cy="620.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="1139.223" cy="625.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="1181.223" cy="612.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="1218.223" cy="624.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="846.223" cy="292.974" r="1.777"/>
              <circle fill="#B0CFE2" cx="811.223" cy="278.974" r="1.777"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="927.488" y1="202.998" x2="914.292" y2="216.195"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="914.292" y1="216.195" x2="920.89" y2="249.786"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="920.89" y1="249.786" x2="950.282" y2="337.363"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="950.282" y1="337.363" x2="1015.065" y2="487.323"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1015.065" y1="487.323" x2="988.672" y2="523.314"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="988.672" y1="523.314" x2="950.282" y2="337.363"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="988.672" y1="523.314" x2="1013.865" y2="566.502"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1013.865" y1="566.502" x2="1001.269" y2="591.695"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="988.672" y1="523.314" x2="1001.269" y2="591.695"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1015.065" y1="487.323" x2="1097.843" y2="571.301"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1013.865" y1="566.502" x2="1097.843" y2="571.301"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1097.843" y1="571.301" x2="1111.04" y2="646.881"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1013.865" y1="566.502" x2="1111.04" y2="646.881"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1001.269" y1="591.695" x2="1021.063" y2="621.688"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1021.063" y1="621.688" x2="1072.65" y2="643.282"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1001.269" y1="591.695" x2="1072.65" y2="643.282"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1013.865" y1="566.502" x2="1072.65" y2="643.282"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1072.65" y1="643.282" x2="1111.04" y2="646.881"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1111.04" y1="646.881" x2="1179.422" y2="632.485"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1179.422" y1="632.485" x2="1222.61" y2="645.081"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1111.04" y1="646.881" x2="1222.61" y2="645.081"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1222.61" y1="645.081" x2="1243.005" y2="632.485"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1243.005" y1="632.485" x2="1252.602" y2="606.692"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1223.81" y1="609.091" x2="1252.602" y2="606.692"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1223.81" y1="609.091" x2="1243.005" y2="632.485"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1179.422" y1="632.485" x2="1243.005" y2="632.485"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1223.81" y1="609.091" x2="1201.016" y2="591.695"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1201.016" y1="591.695" x2="1179.422" y2="632.485"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1097.843" y1="571.301" x2="1179.422" y2="557.505"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1179.422" y1="557.505" x2="1201.016" y2="591.695"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1179.422" y1="557.505" x2="1111.04" y2="646.881"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1201.016" y1="591.695" x2="1238.206" y2="574.6"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1238.206" y1="574.6" x2="1252.602" y2="606.692"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1238.206" y1="574.6" x2="1223.81" y2="609.091"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1179.422" y1="557.505" x2="1156.028" y2="470.528"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1156.028" y1="470.528" x2="1145.231" y2="459.73"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1145.231" y1="459.73" x2="1162.626" y2="453.732"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1162.626" y1="453.732" x2="1156.028" y2="470.528"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1156.028" y1="470.528" x2="1097.843" y2="571.301"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1145.231" y1="459.73" x2="1062.453" y2="440.535"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1015.065" y1="487.323" x2="1062.453" y2="440.535"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1162.626" y1="453.732" x2="1185.42" y2="490.922"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1185.42" y1="490.922" x2="1179.422" y2="514.016"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1179.422" y1="514.016" x2="1179.422" y2="557.505"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1179.422" y1="514.016" x2="1231.008" y2="520.914"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1185.42" y1="490.922" x2="1231.008" y2="520.914"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1062.453" y1="440.535" x2="1055.854" y2="396.147"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1055.854" y1="396.147" x2="1062.453" y2="348.16"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1062.453" y1="348.16" x2="1109.84" y2="306.171"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1109.84" y1="306.171" x2="1118.238" y2="320.567"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1118.238" y1="320.567" x2="1062.453" y2="348.16"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1118.238" y1="320.567" x2="1119.437" y2="342.161"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1119.437" y1="342.161" x2="1091.845" y2="362.556"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1119.437" y1="342.161" x2="1138.632" y2="358.957"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1138.632" y1="358.957" x2="1091.845" y2="362.556"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1091.845" y1="362.556" x2="1075.049" y2="393.748"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1075.049" y1="393.748" x2="1062.453" y2="348.16"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1055.854" y1="396.147" x2="1075.049" y2="393.748"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1075.049" y1="393.748" x2="1105.641" y2="404.545"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1105.641" y1="404.545" x2="1105.641" y2="378.152"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1105.641" y1="378.152" x2="1138.632" y2="358.957"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1105.641" y1="378.152" x2="1091.845" y2="362.556"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1075.049" y1="393.748" x2="1090.345" y2="418.341"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1090.345" y1="418.341" x2="1105.641" y2="404.545"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1090.345" y1="418.341" x2="1145.231" y2="430.338"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1145.231" y1="430.338" x2="1150.629" y2="406.045"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1150.629" y1="406.045" x2="1174.023" y2="370.954"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1174.023" y1="370.954" x2="1167.725" y2="356.558"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1167.725" y1="356.558" x2="1150.629" y2="406.045"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1150.629" y1="406.045" x2="1138.632" y2="411.443"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1138.632" y1="411.443" x2="1145.231" y2="430.338"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1138.632" y1="411.443" x2="1105.641" y2="404.545"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1138.632" y1="358.957" x2="1147.93" y2="370.354"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1147.93" y1="370.354" x2="1105.641" y2="378.152"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1147.93" y1="370.354" x2="1122.137" y2="394.948"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1122.137" y1="394.948" x2="1105.641" y2="378.152"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1122.137" y1="394.948" x2="1105.641" y2="404.545"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1122.137" y1="394.948" x2="1138.632" y2="411.443"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1147.93" y1="370.354" x2="1150.629" y2="406.045"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1147.93" y1="370.354" x2="1167.725" y2="356.558"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1122.137" y1="394.948" x2="1150.629" y2="406.045"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1174.023" y1="370.954" x2="1190.219" y2="453.132"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1150.629" y1="406.045" x2="1190.219" y2="453.132"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1145.231" y1="430.338" x2="1162.626" y2="453.732"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1090.345" y1="418.341" x2="1062.453" y2="440.535"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1190.219" y1="453.132" x2="1208.214" y2="433.937"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1208.214" y1="433.937" x2="1174.023" y2="370.954"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1174.023" y1="370.954" x2="1233.407" y2="412.343"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1208.214" y1="433.937" x2="1233.407" y2="412.343"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1208.214" y1="433.937" x2="1257.401" y2="430.338"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1233.407" y1="412.343" x2="1257.401" y2="430.338"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1257.401" y1="430.338" x2="1247.803" y2="450.133"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1247.803" y1="450.133" x2="1208.214" y2="433.937"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1247.803" y1="450.133" x2="1231.008" y2="478.325"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1190.219" y1="453.132" x2="1208.214" y2="475.926"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1208.214" y1="433.937" x2="1208.214" y2="475.926"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1208.214" y1="475.926" x2="1247.803" y2="450.133"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1208.214" y1="475.926" x2="1231.008" y2="478.325"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1208.214" y1="475.926" x2="1243.005" y2="502.469"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1231.008" y1="478.325" x2="1243.005" y2="502.469"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1243.005" y1="502.469" x2="1231.008" y2="520.914"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1243.005" y1="502.469" x2="1245.404" y2="524.513"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1231.008" y1="520.914" x2="1245.404" y2="524.513"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1231.008" y1="520.914" x2="1205.215" y2="535.76"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1205.215" y1="535.76" x2="1245.404" y2="524.513"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1205.215" y1="535.76" x2="1252.602" y2="541.309"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1252.602" y1="541.309" x2="1245.5" y2="524.5"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1252.602" y1="541.309" x2="1243.005" y2="561.703"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1243.005" y1="561.703" x2="1205.215" y2="535.76"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1243.005" y1="561.703" x2="1238.206" y2="574.6"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1205.215" y1="535.76" x2="1238.206" y2="574.6"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1205.215" y1="535.76" x2="1201.016" y2="591.695"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1167.725" y1="356.558" x2="1159.327" y2="313.369"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1119.437" y1="342.161" x2="1159.327" y2="313.369"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="927.488" y1="202.998" x2="988.272" y2="189.402"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="988.272" y1="189.402" x2="1091.845" y2="209.597"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="927.488" y1="202.998" x2="974.676" y2="232.99"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="914.292" y1="216.195" x2="974.676" y2="232.99"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="974.676" y1="232.99" x2="950.282" y2="337.363"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="974.676" y1="232.99" x2="1025.062" y2="278.178"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="950.282" y1="337.363" x2="1025.062" y2="278.178"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1025.062" y1="278.178" x2="1062.453" y2="348.16"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1025.062" y1="278.178" x2="1015.065" y2="487.323"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="988.272" y1="189.402" x2="974.676" y2="232.99"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="974.676" y1="232.99" x2="1091.845" y2="209.597"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1025.062" y1="278.178" x2="1091.845" y2="209.597"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="885.499" y1="209.597" x2="927.488" y2="202.998"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="885.499" y1="209.597" x2="914.292" y2="216.195"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="885.499" y1="209.597" x2="951.082" y2="402.446"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="950.282" y1="337.363" x2="951.082" y2="402.446"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="951.082" y1="402.446" x2="874.702" y2="433.937"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="874.702" y1="433.937" x2="920.89" y2="394.948"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="885.499" y1="209.597" x2="920.89" y2="394.948"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="920.89" y1="394.948" x2="951.082" y2="402.446"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="874.702" y1="433.937" x2="859.106" y2="462.13"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="859.106" y1="462.13" x2="988.672" y2="523.314"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="951.082" y1="402.446" x2="988.672" y2="523.314"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="859.106" y1="462.13" x2="897.796" y2="590.646"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="988.672" y1="523.314" x2="975.475" y2="555.18"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="897.796" y1="590.646" x2="975.475" y2="555.18"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="859.106" y1="462.13" x2="935.986" y2="433.937"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="935.986" y1="433.937" x2="988.672" y2="523.314"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="988.672" y1="523.314" x2="906.494" y2="548.732"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="906.494" y1="548.732" x2="859.106" y2="462.13"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="906.494" y1="548.732" x2="897.796" y2="590.646"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="935.986" y1="433.937" x2="951.082" y2="402.446"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="874.702" y1="433.937" x2="935.986" y2="433.937"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="906.494" y1="548.732" x2="975.475" y2="555.18"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="975.475" y1="555.18" x2="1001.269" y2="591.695"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="897.796" y1="590.646" x2="1001.269" y2="591.695"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="897.796" y1="590.646" x2="878.451" y2="638.783"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="878.451" y1="638.783" x2="923.889" y2="691.269"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="897.796" y1="590.646" x2="923.889" y2="691.269"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1001.269" y1="591.695" x2="923.889" y2="691.269"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1021.063" y1="621.688" x2="923.889" y2="691.269"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1072.65" y1="643.282" x2="1046.857" y2="665.026"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1021.063" y1="621.688" x2="1046.857" y2="665.026"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1046.857" y1="697.268" x2="1046.857" y2="665.026"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="923.889" y1="691.269" x2="1046.857" y2="665.026"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1046.857" y1="697.268" x2="923.889" y2="691.269"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1111.04" y1="646.881" x2="1117.788" y2="694.268"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1046.857" y1="665.026" x2="1117.788" y2="694.268"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1046.857" y1="697.268" x2="1117.788" y2="694.268"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="859.106" y1="462.13" x2="878.451" y2="638.783"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="812.319" y1="448.033" x2="859.106" y2="462.13"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="802.721" y1="429.438" x2="812.319" y2="448.033"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="866.904" y1="412.043" x2="802.721" y2="429.438"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="874.702" y1="433.937" x2="866.904" y2="412.043"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="812.319" y1="448.033" x2="874.702" y2="433.937"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="802.721" y1="429.438" x2="874.702" y2="433.937"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="885.499" y1="209.597" x2="799.122" y2="274.979"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="802.721" y1="429.438" x2="820.716" y2="378.152"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="789.525" y1="327.765" x2="820.716" y2="378.152"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="799.122" y1="274.979" x2="789.525" y2="327.765"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="885.499" y1="209.597" x2="789.525" y2="327.765"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="820.716" y1="378.152" x2="842.311" y2="372.154"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="789.525" y1="327.765" x2="842.311" y2="372.154"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="802.721" y1="429.438" x2="842.311" y2="372.154"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="885.499" y1="209.597" x2="842.311" y2="372.154"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="920.89" y1="394.948" x2="866.904" y2="412.043"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="842.311" y1="372.154" x2="866.904" y2="412.043"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1091.5" y1="207.5" x2="1159.5" y2="313.5"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1109.5" y1="303.5" x2="1091.5" y2="211.5"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1118.5" y1="320.5" x2="1159.5" y2="313.5"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1112.5" y1="306.5" x2="1159.5" y2="313.5"/>
            </g>
            <g id="sparkle_head" >

                <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="747.464" y1="285.177" x2="704.278" y2="285.177"/>

                <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="822.516" y1="535.723" x2="815.918" y2="475.926"/>

                <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="736.558" y1="420.741" x2="742.611" y2="438.736"/>

                <line fill="none" stroke="#B0CFE2" stroke-width="0.5" stroke-miterlimit="10" x1="695.769" y1="430.338" x2="749.755" y2="425.539"/>
              <circle fill="#115BAA" cx="704.278" cy="221.293" r="2.399"/>
              <circle fill="#115BAA" cx="705.247" cy="285.177" r="2.399"/>
              <circle fill="#115BAA" cx="747.464" cy="326.266" r="2.399"/>
              <circle fill="#115BAA" cx="650.781" cy="363.373" r="2.399"/>
              <circle fill="#115BAA" cx="659.703" cy="403.383" r="2.399"/>
              <circle fill="#115BAA" cx="695.769" cy="430.338" r="2.399"/>
              <circle fill="#115BAA" cx="736.558" cy="420.741" r="2.399"/>
              <circle fill="#115BAA" cx="785.642" cy="351.817" r="2.399"/>
              <circle fill="#115BAA" cx="771.043" cy="386.213" r="2.399"/>
              <circle fill="#115BAA" cx="804.325" cy="367.834" r="2.399"/>
              <circle fill="#115BAA" cx="794.323" cy="394.948" r="2.399"/>
              <circle fill="#115BAA" cx="757.852" cy="412.268" r="2.399"/>
              <circle fill="#115BAA" cx="742.611" cy="484.324" r="2.399"/>
              <circle fill="#115BAA" cx="743.156" cy="438.736" r="2.399"/>
              <circle fill="#115BAA" cx="749.998" cy="425.628" r="2.399"/>
              <circle fill="#115BAA" cx="778.054" cy="448.033" r="2.399"/>
              <circle fill="#115BAA" cx="815.918" cy="475.926" r="2.399"/>
              <circle fill="#115BAA" cx="822.516" cy="532.903" r="2.399"/>
              <circle fill="#115BAA" cx="805.12" cy="492.722" r="2.399"/>
              <circle fill="#115BAA" cx="838.562" cy="476.48" r="2.399"/>
              <circle fill="#115BAA" cx="854.607" cy="539.247" r="2.399"/>
              <circle fill="#115BAA" cx="827.315" cy="563.728" r="2.399"/>
              <circle fill="#115BAA" cx="853.738" cy="563.728" r="2.399"/>
              <circle fill="#115BAA" cx="853.797" cy="613.148" r="2.399"/>
              <circle fill="#115BAA" cx="895.01" cy="682.675" r="2.399"/>
              <circle fill="#115BAA" cx="878.451" cy="746.405" r="2.399"/>
              <circle fill="#115BAA" cx="910.843" cy="705.628" r="2.399"/>
              <circle fill="#115BAA" cx="937.027" cy="721.598" r="2.399"/>
              <circle fill="#115BAA" cx="972.476" cy="775.198" r="2.399"/>
              <circle fill="#115BAA" cx="1024.472" cy="760.26" r="2.399"/>
              <circle fill="#115BAA" cx="972.476" cy="865.174" r="2.399"/>
              <circle fill="#115BAA" cx="747.781" cy="285.373" r="2.399"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="747.464" y1="327.165" x2="704.278" y2="285.177"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="747.464" y1="285.177" x2="747.464" y2="327.165"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="785.252" y1="350.559" x2="770.857" y2="386.55"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="770.857" y1="386.55" x2="794.323" y2="394.948"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="785.252" y1="350.559" x2="794.323" y2="394.948"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="785.252" y1="350.559" x2="805.12" y2="368.555"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="770.857" y1="386.55" x2="805.12" y2="368.555"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="747.464" y1="285.177" x2="704.278" y2="221.293"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="704.278" y1="285.177" x2="704.278" y2="221.293"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="650.181" y1="331.364" x2="629.786" y2="349.959"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="651.381" y1="363.756" x2="629.786" y2="349.959"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="650.181" y1="331.364" x2="651.381" y2="363.756"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="665.777" y1="349.959" x2="650.181" y2="331.364"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="651.381" y1="363.756" x2="665.777" y2="349.959"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="838.712" y1="475.926" x2="822.516" y2="535.723"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="854.607" y1="539.247" x2="838.712" y2="475.926"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="822.516" y1="535.723" x2="854.607" y2="539.247"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="838.712" y1="475.926" x2="815.918" y2="475.926"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="805.12" y1="492.722" x2="838.712" y2="475.926"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="815.918" y1="475.926" x2="805.12" y2="492.722"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="822.516" y1="535.723" x2="805.12" y2="492.722"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="854.607" y1="563.728" x2="854.607" y2="612.09"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="827.315" y1="563.728" x2="854.607" y2="563.728"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="854.607" y1="612.09" x2="827.315" y2="563.728"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="893.897" y1="681.147" x2="910.843" y2="704.416"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="878.451" y1="746.405" x2="893.897" y2="681.147"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="882.8" y1="775.198" x2="878.451" y2="746.405"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="910.843" y1="704.416" x2="882.8" y2="775.198"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="878.451" y1="746.405" x2="910.843" y2="704.416"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="936.636" y1="720.012" x2="1025.682" y2="760.801"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="972.476" y1="865.174" x2="936.636" y2="720.012"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1025.682" y1="760.801" x2="972.476" y2="865.174"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="972.476" y1="775.198" x2="936.636" y2="720.012"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1025.682" y1="760.801" x2="972.476" y2="775.198"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="972.476" y1="865.174" x2="972.476" y2="775.198"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1011.166" y1="713.776" x2="1033.96" y2="740.407"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1040.058" y1="713.776" x2="1011.166" y2="713.776"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="1033.96" y1="740.407" x2="1040.058" y2="713.776"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="695.769" y1="430.338" x2="736.558" y2="420.741"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="742.611" y1="438.736" x2="695.769" y2="430.338"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="749.755" y1="425.539" x2="736.558" y2="420.741"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="742.611" y1="438.736" x2="749.755" y2="425.539"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="778.054" y1="448.033" x2="742.611" y2="484.324"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="695.769" y1="430.338" x2="742.611" y2="484.324"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="658.579" y1="403.795" x2="695.769" y2="430.338"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="736.558" y1="420.741" x2="658.579" y2="403.795"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="742.611" y1="438.736" x2="742.611" y2="484.324"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="778.054" y1="448.033" x2="742.611" y2="438.736"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="770.857" y1="386.55" x2="749.755" y2="425.539"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="736.558" y1="420.741" x2="794.323" y2="394.948"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="815.918" y1="475.926" x2="742.611" y2="484.324"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="805.12" y1="492.722" x2="742.611" y2="484.324"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="778.054" y1="448.033" x2="757.385" y2="411.441"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="794.323" y1="394.948" x2="778.054" y2="448.033"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="778.054" y1="448.033" x2="815.918" y2="475.926"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.5" stroke-miterlimit="10" x1="704" y1="221" x2="747" y2="327"/>
            </g>
            <g id="smaller_sparkle" >

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="827.315" y1="620.788" x2="815.918" y2="656.478"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="843.51" y1="620.788" x2="827.315" y2="620.788"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="815.918" y1="656.478" x2="843.51" y2="620.788"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="737.758" y1="539.247" x2="747.464" y2="517.465"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="761.751" y1="544.908" x2="747.464" y2="517.465"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="737.758" y1="539.247" x2="761.751" y2="544.908"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="742.611" y1="557.505" x2="755.753" y2="557.505"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="749.182" y1="583.148" x2="742.611" y2="557.505"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="755.753" y1="557.505" x2="749.182" y2="583.148"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="712.564" y1="535.723" x2="698.168" y2="513.491"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="693.37" y1="532.949" x2="698.168" y2="513.491"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="705.366" y1="550.456" x2="712.564" y2="535.723"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="693.37" y1="532.949" x2="705.366" y2="550.456"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="387.5" y1="447.5" x2="427.5" y2="427.5"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="442.5" y1="441.5" x2="427.5" y2="427.5"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="387.5" y1="447.5" x2="442.5" y2="441.5"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="438.5" y1="455.5" x2="452.5" y2="455.5"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="452.5" y1="467.5" x2="452.5" y2="455.5"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="438.5" y1="455.5" x2="452.5" y2="467.5"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="506.5" y1="469.5" x2="529.5" y2="477.5"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="577.5" y1="453.5" x2="529.5" y2="477.5"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="506.5" y1="469.5" x2="577.5" y2="453.5"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="600.994" y1="406.045" x2="580.599" y2="392.098"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="633.385" y1="394.948" x2="600.994" y2="406.045"/>

                <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="580.599" y1="392.098" x2="633.385" y2="394.948"/>
            </g>
            <g id="title_sparkle" >
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="0.5" y1="361.5" x2="79.5" y2="439.5"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="30.5" y1="514.5" x2="79.5" y2="439.5"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="0.5" y1="457.5" x2="30.5" y2="514.5"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="79.5" y1="439.5" x2="0.5" y2="437.5"/>
              <line fill="none" stroke="#115BAA" stroke-width="0.75" stroke-miterlimit="10" x1="30.5" y1="514.5" x2="0.5" y2="406.5"/>
            </g>
            <g id="wave_bg">
              <path d="M1917.68,804.84a1527,1527,0,0,1-217.62-3.33C1250.53,762,1158.54,544.76,815.36,568.2c-364,24.86-506,286-811.58,431.61l-3.42,1.61L0,1082.49H.45v0l1918.51,9Z" opacity="0.06" fill="url(#a)"/>
              <path d="M0,2.31c34.47,97,122.64,165.93,226,165.93C330.17,168.24,418.94,98.18,452.82,0Z" opacity="0.06" fill="url(#a)"/>
            </g>
            <g id="text__x2F__shape" >
              <polygon fill="#F2E0D8" points="1113.5,240.5 1505,242 1505,1079 1451,1079 1451,294 1149.5,295.5 	"/>
              <polyline fill="#F2E0D8" points="956,803.592 964,835.994 604,836 604,797 954.372,797 956,803.592 	"/>
            </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default HomeTech;
