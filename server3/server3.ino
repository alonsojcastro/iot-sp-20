/*
  Serial Call and Response in ASCII
 Language: Wiring/Arduino

 This program sends an ASCII A (byte of value 65) on startup
 and repeats that until it gets some data in.
 Then it waits for a byte in the serial port, and
 sends three ASCII-encoded, comma-separated sensor values,
 truncated by a linefeed and carriage return,
 whenever it gets a byte in.

 Thanks to Greg Shakar and Scott Fitzgerald for the improvements

  The circuit:
 * potentiometers attached to analog inputs 0 and 1
 * pushbutton attached to digital I/O 2



 Created 26 Sept. 2005
 by Tom Igoe
 modified 24 Apr 2012
 by Tom Igoe and Scott Fitzgerald

 This example code is in the public domain.

 http://www.arduino.cc/en/Tutorial/SerialCallResponseASCII

 */

int firstSensor = 0;    // first analog sensor
int secondSensor = 0;   // second analog sensor
int thirdSensor = 0;    // digital sensor
int inByte = 0;
int lefv=0;// incoming serial byte
String inputString = "";         // a string to hold incoming data
boolean stringComplete = false; 
void setup() {
  // start serial port at 9600 bps and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

pinMode(5, OUTPUT);
  pinMode(2, INPUT);   // digital sensor is on digital pin 2
  establishContact();
  inputString.reserve(200);// send a byte to establish contact until receiver responds
}

void loop() {

    if (stringComplete) {
//    Serial.println(inputString);
    analogWrite(5, inputString.toInt());
    inputString = "";
    stringComplete = false;
  }
  // if we get a valid byte, read analog ins:
  if (Serial.available() > 0) {
        char inChar = (char)Serial.read();
//    // add it to the inputString:
    inputString += inChar;
    // if the incoming character is a newline, set a flag
    // so the main loop can do something about it:
    if (inChar == '\n') {
      stringComplete = true;
    }
  
//    analogWrite(5, Serial.read());
    
//   int inByte = Serial.parseInt(); // read it
//   if (inByte >= 1) {
//    lefv=inByte;
////      Serial.write(inByte);
//// send it back out as raw binary data
//          // use it to set the LED brightness
//   }   // use it to set the LED brightness
//analogWrite(5, inByte);
   
    // read first analog input:
    firstSensor = analogRead(A1);
    // read second analog input:
    secondSensor = analogRead(A2);
    // read  switch, map it to 0 or 255L
    thirdSensor = analogRead(A3);
    // send sensor values:
    Serial.print(firstSensor);
    Serial.print(",");
    Serial.print(secondSensor);
    Serial.print(",");
    Serial.println(thirdSensor);
  }
}

void establishContact() {
  while (Serial.available() <= 0) {
    Serial.println("0,0,0");   // send an initial string
    delay(300);
  }
}
//
//void serialEvent() {
//  while (Serial.available()) {
//    // get the new byte:
//    char inChar = (char)Serial.read();
//    // add it to the inputString:
//    inputString += inChar;
//    // if the incoming character is a newline, set a flag
//    // so the main loop can do something about it:
//    if (inChar == '\n') {
//      stringComplete = true;
//    }
//  }
//}
//
