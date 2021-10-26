import ReactDOM from 'react-dom';
import { MasterDetail } from './chapters/MasterDetail/MasterDetail';

import { Clicker as Chapter1} from "./chapters/UseStateComponent/UseStateComponent";
import { FormExample as Chapter2 } from "./chapters/FunctionVsClass/FunctionVsClass";
import { Example as Chapter3 } from "./chapters/CustomHooks/CustomHooks";
import { Example as Chapter4 } from "./chapters/LazyUseState/LazyUseState";
import { Calculator as Chapter5 } from "./chapters/StorageInUseState/StorageInUseState";
import { Counter as Chapter6 } from "./chapters/UseEffect/UseEffect";
import { Example as Chapter7 } from "./chapters/UseEffectVsUseLayoutEffect/UseEffectVsUseLayoutEffect";
import { Example as Chapter8 } from "./chapters/UseRef/UseRef";
import { Chapter9 } from './chapters/UseImperativeHandle/PinInput';
import { Chapter10 } from './chapters/HigherOrderComponent/HigherOrderComponent';

const content = {
  ch_1: { name: 'Chapter 1', component: Chapter1 },
  ch_2: { name: 'Chapter 2', component: Chapter2 },
  ch_3: { name: 'Chapter 3', component: Chapter3 },
  ch_4: { name: 'Chapter 4', component: Chapter4 },
  ch_5: { name: 'Chapter 5', component: Chapter5 },
  ch_6: { name: 'Chapter 6', component: Chapter6 },
  ch_7: { name: 'Chapter 7', component: Chapter7 },
  ch_8: { name: 'Chapter 8', component: Chapter8 },
  ch_9: { name: 'Chapter 9', component: Chapter9 },
  ch_10: { name: 'Chapter 10', component: Chapter10 }
};

ReactDOM.render(
  <MasterDetail content={content} />,
  document.getElementById('root')
);
