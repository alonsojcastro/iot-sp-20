/*
This sketch demonstrates how to coordinate data
between 3 devices in a Gazell network.

The host collects RSSI samples from the Devices,
and determines which device has the strongest
average RSSI (ie: the Device that is closest
to the Host).  The Green led is set on the
closest Device.

Since the Device must initiate communication, the
device "polls" the Host evey 200ms.
*/
#include <string.h>
#include <RFduinoGZLL.h> // include rfduino library
device_t role = DEVICE6; // set Device name... DEVICE2 to DEVICE7 / HOST
int Outpin5valp=1000;
//define pins
unsigned long previousMillis = 0;        // will store last time LED was updated
int preOutpin5val=0;
// constants won't change :
const long interval = 1000; 
int devnum=6;
int butt=0;
int buttt=0;
int shut=200;
int count=0;
int xpin = 2;
int ypin = 3;
int zpin = 4;
int rec=20000;

//int Outpin4 = 4;
int Outpin5 = 5;
int Outpin6 = 6;

//int  Outpin4val =0;
int Outpin5val = 0;
int Outpin6val = 1;

int xval = 0;
int yval = 0;
int zval = 0;

int xvalp = 0;
int yvalp = 0;
int zvalp = 0;

int xset=0;
int yset=0;
int zset=0;

int xinset;
int yinset;
int zinset;

int xoutset=0;
int youtset=0;
int zoutset=0;

int pval = 0;

int pulse=random(500,600);
String pstr;//declaring string
void setup()
{
  Serial.begin(9600); // begin serial communications
// pinMode(Outpin4, OUTPUT);
  pinMode(Outpin5, OUTPUT);
  pinMode(Outpin6, OUTPUT);
  pinMode(xpin, INPUT);
  pinMode(ypin, INPUT);
  pinMode(zpin, INPUT);

  RFduinoGZLL.txPowerLevel = 0;

  // start the GZLL stack
  RFduinoGZLL.begin(role); // begin BLE communications
}

void loop()
{

if (Outpin5valp!=Outpin5val){
  Serial.print("OOOOO:");
  Outpin5valp=Outpin5val;
  }
  
  Serial.print("Outpin5val:");
  Serial.println(Outpin5val);
//Serial.println("");
  
  
//Serial.println(preOutpin5val);
//  Serial.println(Outpin5val);
  char xdata[4];   //declaring character array -- 3 characters plus a nill charachter as terminator
  char ydata[4];
  char zdata[4];
   char xsdata[4];   //declaring character array -- 3 characters plus a nill charachter as terminator
  char ysdata[4];
  char zsdata[4];
  char pdata[8];
  char mydata[26]; // declare mydata array

  String xstr;//declaring string
  String ystr;//declaring string
  String zstr;//declaring string

  String xsstr;//declaring string
  String ysstr;//declaring string
  String zsstr;//declaring string

  
//   
  String mystr;

  unsigned long currentMillis = millis();


 


 
  xval= map(analogRead(xpin), 0, 1023, 0, 255);// read pin sensor values and place into variavles
    yval= map(analogRead(ypin), 0, 1023, 0, 255);// read pin sensor values and place into variavles
      zval= map(analogRead(zpin), 0, 1023, 0, 255);// read pin sensor values and place into variavles

if (xval>=xset){
  xset=xval;
  }

if (yval>=yset){
  yset=yval;
  } 

   if (zval>=zset){
  zset=zval;
  }



 if (currentMillis - previousMillis >= interval) {
    // save the last time you blinked the LED
    previousMillis = currentMillis;

  

    // set the LED with the ledState of the variable:
   rec=rec-1000;
   
    
  }

  if (rec<0){
    Serial.println("DISCONNECTED");
    Outpin5val=0;
    Outpin6val=0;
    }

switch (Outpin5val) {
    case 100:
      flash(2);
      break;
    case 200:
      fade(2);
      break;
     case 300:
      vib(2);
      break;
    default: 
      Serial.print("");
    break;
  }
    
//  if (butt==2){
//  vib(2);
//  }
//    if (butt==3){
//  vib(1);
//  }
//analogWrite(Outpin5,Outpin5val);
//  analogWrite(Outpin6,Outpin6val);


  // convert sendor values to 3 characters.. i.e. value 2 converts to 002, value 40 converts to 040
  if (xval >= 100)
  {
    xstr = String(xval);
  }
  else if (xval < 100 && xval >= 10) {
    xstr = String(0) + String(xval);
  }
  else if (xval < 10) {
    xstr = String(0) + String(0) + String(xval);
  }
  
  
  if (yval >= 100)
  {
    ystr = String(yval);
  }
  else if (yval < 100 && yval >= 10) {
    ystr = String(0) + String(yval);
  }
  else if (yval < 10) {
    ystr = String(0) + String(0) + String(yval);
  }
  
  
  if (zval >= 100)
  {
    zstr = String(zval);
  }
  else if (zval < 100 && zval >= 10) {
    zstr = String(0) + String(zval);
  }
  else if (zval < 10) {
    zstr = String(0) + String(0) + String(zval);
  }

///////////////////
if(xset>xinset){
  xoutset=1;
  }else{
   xoutset=0; 
    }
    
  if(yset>yinset){
  youtset=1;
  }else{
   youtset=0; 
    }
    
if(zset>zinset){
  zoutset=1;
  }else{
   zoutset=0; 
    }


  xsstr = String(xoutset);
    ysstr = String(youtset);
  
    zsstr = String(zoutset);



  xstr.toCharArray(xdata, 4); //passing the string value of sensors to the character array
  ystr.toCharArray(ydata, 4);
  zstr.toCharArray(zdata, 4);

    xsstr.toCharArray(xsdata, 4); //passing the string value of sensors to the character array
  ysstr.toCharArray(ysdata, 4);
  zsstr.toCharArray(zsdata, 4);


  mystr = String(devnum)+"," + xstr+"," + ystr+"," + zstr+ ","+xsstr+"," + ysstr+"," + zsstr; // combining data for sending to other rfduino... change "a" to other characters to identify message package


  mystr.toCharArray(mydata, 26); // place mystr data into character buffer

  //Serial.println(mystr); // print buffer to serial
//Serial.println(mydata); 
 RFduinoGZLL.sendToHost(mydata, 26); // send buffer to host other rfduino
    delay(pulse);
//    Serial.println(pulse);
    count++;
   
}
void flash(int a){
  analogWrite(Outpin5, 255);
  delay(50);
  analogWrite(Outpin5, 0);
  delay(50); 
  Outpin5val=0;  
  }

  void vib(int a){
  
  analogWrite(Outpin6, 255);
  delay(200);
  analogWrite(Outpin6, 0);
  delay(200);
  Outpin5val=0;}

void fade(int a){
   for(int i=0;i<a;i++){
    // fade in from min to max in increments of 5 points:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // sets the value (range from 0 to 255):
    analogWrite(Outpin5, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(5);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // sets the value (range from 0 to 255):
    analogWrite(Outpin5, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(5);
  }
  
  }
  Outpin5val=0;
  }
// if data is recived from another rfduino
void RFduinoGZLL_onReceive(device_t device, int rssi, char *data, int len)
{




  if (len > 0)
  {Serial.println(data);
    rec=10000;
    char d0[2] = {(data[0])};
    int ii = atoi(d0);
    if((devnum==3)||(devnum==6)||(devnum==9)){

    ////Serial.println(data);
pulse=random(500,600);
char d2[2] = {(data[2])};
char d3[2] = {(data[3])};
char d4[2] = {(data[4])};

char d6[2] = {(data[6])};
char d7[2] = {(data[7])};
char d8[2] = {(data[8])};
char fdata1[4] = {0};
strcat(fdata1, d6);
strcat(fdata1, d7);
strcat(fdata1, d8);

char d10[2] = {(data[10])};
char d11[2] = {(data[11])};
char d12[2] = {(data[12])};
char fdata2[4] = {0};
strcat(fdata2, d10);
strcat(fdata2, d11);
strcat(fdata2, d12);

char d14[2] = {(data[14])};
char d15[2] = {(data[15])};
char d16[2] = {(data[16])};
char fdata3[4] = {0};
strcat(fdata3, d14);
strcat(fdata3, d15);
strcat(fdata3, d16);


//
char d18[2] = {(data[18])};
char d19[2] = {(data[19])};
char d20[2] = {(data[20])};
char fdata4[4] = {0};
strcat(fdata4, d18);
strcat(fdata4, d19);
strcat(fdata4, d20);

char d22[2] = {(data[22])};
char d23[2] = {(data[23])};
char d24[2] = {(data[24])};
char fdata5[4] = {0};
strcat(fdata5, d22);
strcat(fdata5, d23);
strcat(fdata5, d24);



 

int u = atoi(d2);
int d = atoi(d3);
int m = atoi(d4);
u=u*u;
d=d*5;
d= d*10;
d
pulse=u*d;
if(pulse==0){
  
  pulse=random(500,600);}
  //// Serial.print(ii);
  ////  Serial.print(",");
 ////Serial.print(pulse);
 ////Serial.print(",");
 ////Serial.print(atoi(fdata1));
// if(Outpin5valp!=Outpin5val){
 Outpin5val=atoi(fdata1);
// Outpin5valp=Outpin5val;
// 
// }

// if (Outpin5val==300){
//  butt=1;
//  }else{
//    butt=0;
//    }
//if ((abs(preOutpin5val-Outpin5val)>20) && (abs(preOutpin5val-Outpin5val)<100)){
//  butt=1;
//  }else{
//    butt=0;
//    }



    
 
 ////Serial.print(",");
////Serial.print(atoi(fdata2));
Outpin6val=atoi(fdata2);
////Serial.print(",");

//Serial.print(atoi(fdata3));
////Serial.print(xset);
xinset=atoi(fdata3);
////Serial.print(",");
if(zinset==999){
  zset=0;
  }

//Serial.print(atoi(fdata4));
////Serial.print(yset);
yinset=atoi(fdata4);
////Serial.print(",");
if(yinset==999){
  yset=0;
  }

//Serial.println(atoi(fdata5));
////Serial.println(zset);
zinset=atoi(fdata5);
if(zinset==999){
  zset=0;
  }

 





//Serial.print(",");
//Serial.println(atoi(fdata3));
//Outpin6val=atoi(fdata3);
    }
  }
}




