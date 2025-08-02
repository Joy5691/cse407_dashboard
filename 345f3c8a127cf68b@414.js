function _1(md){return(
md`# Dash Board`
)}

function _raw(FileAttachment){return(
FileAttachment("data.csv").csv()
)}

function _cleaned(raw){return(
raw.map((d) => ({
  Time: d["Time"],
  Voltage: +d["Voltage (V)"],
  Frequency: +d["Frequency (Hz)"],
  Current: +d["Current (A)"],
  Power: +d["Active Power (kW)"],
  PowerFactor: +d["Power Factor"]
}))
)}

function _4(md){return(
md`# Data Table`
)}

function _data1(__query,cleaned,invalidation){return(
__query(cleaned,{from:{table:"cleaned"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation,"cleaned")
)}

function _6(md){return(
md`# Voltage`
)}

function _7(Plot,cleaned,width){return(
Plot.auto(cleaned, {x: "Voltage", color: "Voltage"}).plot({color: {legend: true}, width})
)}

function _8(md){return(
md`# Current`
)}

function _9(Plot,cleaned,width){return(
Plot.auto(cleaned, {x: "Current", color: "Current"}).plot({color: {legend: true}, width})
)}

function _10(md){return(
md`# PowerFactor`
)}

function _11(Plot,cleaned,width){return(
Plot.auto(cleaned, {x: "PowerFactor", color: "Frequency"}).plot({color: {legend: true}, width})
)}

function _12(md){return(
md`# Current by Time`
)}

function _13(Plot,data1,width){return(
Plot.auto(data1, {x: "Time", y: "Current", mark: "line", size: "Current", color: "Voltage"}).plot({color: {legend: true}, width, marginRight: 0})
)}

function _14(md){return(
md`# Voltage by Time`
)}

function _15(Plot,cleaned,width){return(
Plot.auto(cleaned, {x: "Time", y: "Voltage", mark: "line", color: "Voltage"}).plot({color: {legend: true}, width})
)}

function _16(md){return(
md`# Frequency by Time`
)}

function _17(Plot,cleaned,width){return(
Plot.auto(cleaned, {x: "Time", y: "Frequency", color: "Frequency"}).plot({color: {legend: true}, width})
)}

function _18(md){return(
md`# Power by Time`
)}

function _19(Plot,cleaned,width){return(
Plot.auto(cleaned, {x: "Time", y: "Power", mark: "line", color: "#b33a52"}).plot({width})
)}

function _20(md){return(
md`# PowerFactor by Time`
)}

function _21(Plot,cleaned,width){return(
Plot.auto(cleaned, {x: "Time", y: "PowerFactor", mark: "line", color: "#8c2b78"}).plot({x: {}, y: {}, width})
)}

function _22(md){return(
md`# Power And Voltage Ratio`
)}

function _23(Plot,cleaned,width){return(
Plot.auto(cleaned, {x: "Voltage", y: "Power", mark: "dot", color: "Voltage"}).plot({color: {legend: true}, width})
)}

function _24(md){return(
md`# Power And Current Ratio`
)}

function _25(Plot,cleaned,width){return(
Plot.auto(cleaned, {x: "Current", y: "Power", color: "Voltage"}).plot({color: {legend: true}, width})
)}

function _26(md){return(
md`# IoT Device
## TOMZN Circuit Breaker`
)}

function _iot(FileAttachment){return(
FileAttachment("iot.jpg").image()
)}

function _28(md){return(
md`### Description
TOMZN 63A Tuya WiFi Smart Circuit Breaker with Earth Leakage & Voltage Protection

Protect your home or industrial equipment with the advanced TOMZN 63A Smart Circuit Breaker, designed with Tuya WiFi app integration for real-time control and monitoring.

This smart breaker offers remote ON/OFF control, real-time current, voltage, and power usage tracking, and adjustable over/under voltage, overcurrent, and leakage current protection – all from your smartphone via the Tuya Smart Life app. It works with both 110V and 220V systems and supports 2-pole DIN rail mounting, making it ideal for household or industrial use.`
)}

function _perameter(FileAttachment){return(
FileAttachment("perameter.jpg").image()
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["data.csv", {url: new URL("./files/83c96c267209a5a83873782dd52a53d2279a4259120ac9be5a3908c249b7b081158e79a961ebabfd765d48f4c119ca807a9e655f37575bac0978e1de9681d85a.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["iot.jpg", {url: new URL("./files/56fb2e071529bd6b50d5fd939500ac6423ebdc77557afa99811f703770494ac4acbb4e3ac530fec818932ef1c4e39271bc3b9943178998086211235c65c84f1c.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["perameter.jpg", {url: new URL("./files/6fd592164fdbae7cec443fb5f967a275c3c4ecbb20807c2b479dc01a74de4f11b5e68abcd67b0dd1582eab9eb12dcd2f84b77f5f69be8b6005ac745331438cdb.jpeg", import.meta.url), mimeType: "image/jpeg", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("raw")).define("raw", ["FileAttachment"], _raw);
  main.variable(observer("cleaned")).define("cleaned", ["raw"], _cleaned);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer("data1")).define("data1", ["__query","cleaned","invalidation"], _data1);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer()).define(["Plot","cleaned","width"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["Plot","cleaned","width"], _9);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer()).define(["Plot","cleaned","width"], _11);
  main.variable(observer()).define(["md"], _12);
  main.variable(observer()).define(["Plot","data1","width"], _13);
  main.variable(observer()).define(["md"], _14);
  main.variable(observer()).define(["Plot","cleaned","width"], _15);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer()).define(["Plot","cleaned","width"], _17);
  main.variable(observer()).define(["md"], _18);
  main.variable(observer()).define(["Plot","cleaned","width"], _19);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer()).define(["Plot","cleaned","width"], _21);
  main.variable(observer()).define(["md"], _22);
  main.variable(observer()).define(["Plot","cleaned","width"], _23);
  main.variable(observer()).define(["md"], _24);
  main.variable(observer()).define(["Plot","cleaned","width"], _25);
  main.variable(observer()).define(["md"], _26);
  main.variable(observer("iot")).define("iot", ["FileAttachment"], _iot);
  main.variable(observer()).define(["md"], _28);
  main.variable(observer("perameter")).define("perameter", ["FileAttachment"], _perameter);
  return main;
}
