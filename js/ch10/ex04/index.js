import { SampleClass, SampleFunc } from "./reexport.js";
import { sample as testSample } from "./sample.js";
import Sample2 from "./sample2.js";

const sample2 = new Sample2("test");

testSample();
sample2.test();

const sampleClass = new SampleClass("test2");
SampleFunc();
sampleClass.test();
