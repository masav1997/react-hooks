import ReactDOM from 'react-dom';
import { MasterDetail } from './chapters/MasterDetail/MasterDetail';

import { Clicker as Chapter1} from "./chapters/UseStateComponent/UseStateComponent";
import { FormExample as Chapter2 } from "./chapters/FunctionVsClass/FunctionVsClass";
import { Example as Chapter3 } from "./chapters/CustomHooks/CustomHooks";
import { Example as Chapter4 } from "./chapters/LazyUseState/LazyUseState";
import { Calculator as Chapter5 } from "./chapters/StorageInUseState/StorageInUseState";
import { Counter as Chapter6 } from "./chapters/useEffect/useEffect";
import { Example as Chapter7 } from "./chapters/useEffectVsUseLayoutEffect/useEffectVsUseLayoutEffect";
import { Example as Chapter8 } from "./chapters/useRef/useRef";

const content = {
  ch_1: { name: 'Chapter 1', component: Chapter1 },
  ch_2: { name: 'Chapter 2', component: Chapter2 },
  ch_3: { name: 'Chapter 3', component: Chapter3 },
  ch_4: { name: 'Chapter 4', component: Chapter4 },
  ch_5: { name: 'Chapter 5', component: Chapter5 },
  ch_6: { name: 'Chapter 6', component: Chapter6 },
  ch_7: { name: 'Chapter 7', component: Chapter7 },
  ch_8: { name: 'Chapter 8', component: Chapter8 },
};

ReactDOM.render(
  <MasterDetail content={content} />,
  document.getElementById('root')
);
