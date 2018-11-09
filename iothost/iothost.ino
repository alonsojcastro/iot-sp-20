/*
This sketch demonstrates how to send data from a Device
to another Device (using the Host as an intermediary)
in a Gazell network.

When Button A on Device0 is pressed and released,
the green led on Device1 will toggle.
*/

#include <RFduinoGZLL.h> // include rfduino library
unsigned long previousMillis = 0;        // will store last time LED was updated
const long interval = 4000; 
device_t role = HOST; // set Device name... DEVICE2 to DEVICE7 / HOST
String inputString = "";         // a string to hold incoming data
boolean stringComplete = false;  // whether the string is complete
String pulse = "251";
String dev="non";
String inputdata="";
int rssid=0;
int rparse=0;
String iparse="";
device_t role3 = DEVICE3;
device_t role6 = DEVICE6;
device_t role5 = DEVICE5;
void setup()

{
//override_uart_limit = true;
  Serial.begin(9600); // begin serial communications
  // start the GZLL stack  
  RFduinoGZLL.begin(role); // begin BLE communications
   inputString.reserve(200);
   
}

void loop()
{
    if (stringComplete) {
      pulse=inputString;
      Serial.println(pulse);
    // clear the string:
    inputString = "";
    stringComplete = false;
  }


 if ((rparse!=abs(rssid)) || (iparse!=String(inputdata))){
  Serial.print(abs(rssid));
  Serial.print(",");
  Serial.println(inputdata);
  rparse = abs(rssid);
  iparse = String(inputdata);
  }


unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval) {
    // save the last time you blinked the LED
    previousMillis = currentMillis;
//    RFduinoGZLL.sendToDevice(role3, pulse);
//    delay(20);
//RFduinoGZLL.sendToDevice(role5, pulse);
//delay(20);
//RFduinoGZLL.sendToDevice(role6, pulse);
  }





  
//      delay (20);
//      RFduinoGZLL.sendToDevice(role6, pulse);
//      delay (20);
//      RFduinoGZLL.sendToDevice(role5, pulse);
    //Serial.print(pulse);

//  delay(20);
  
}


void RFduinoGZLL_onReceive(device_t device, int rssi, char *data, int len) // this function receives BLE communications
{


if(len==26){

   rssid=rssi;
    inputdata=data;

  }

 
//  if (pulse!=pulse){
  
  if (device == DEVICE6){  // if device name is DEVICE1 relay the last known state to DEVICE1
    RFduinoGZLL.sendToDevice(device, pulse);
}

 if (device == DEVICE3){  // if device name is DEVICE1 relay the last known state to DEVICE1
    RFduinoGZLL.sendToDevice(device, pulse);
}

 if (device == DEVICE5){  // if device name is DEVICE1 relay the last known state to DEVICE1
    RFduinoGZLL.sendToDevice(device, pulse);
}
//}

}

void serialEvent() {
  while (Serial.available()) {
    char inChar = (char)Serial.read();
    inputString += inChar;
    
    if (inChar == '\n') {
      stringComplete = true;
    }
  }
}



