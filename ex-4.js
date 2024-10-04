//Exercise 4
// Switch Statement
let lightBulbStatus = "On";



switch (lightBulbStatus) {
  case "Broken":
    console.log("Light bulb is Broken.");
    lightBulbStatus = "Light bulb is Broken.";
    break;
  case "On":
    console.log("Light bulb is On.");
    break;
  case "Off":
    console.log("Light bulb is Off.");
    break;
  default:
    console.log(`Please choose the correct input (On/Off/Broken)`);
    break;
}
