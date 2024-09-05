#include <Servo.h>
#define MAX 180
#define MIN 0
#define STP 5
Servo myservo;

int pos = 90;
void setup() {
  myservo.attach(8);
  myservo.write(pos); delay(15);
  Serial.begin(9600);
}
void loop(){
  if(Serial.available()>0){
    char ch = Serial.read();
    if(ch == '.'){
      if(pos+STP <= MAX) pos = pos + STP;
      else  pos = MAX;
    }
    else if(ch == ','){
      if(pos-STP >= MIN) pos = pos - STP;
      else  pos = MIN;
    }
    else if(ch =='1') pos = 0;
    else if(ch =='2') pos = 45;
    else if(ch =='3') pos = 90;
    else if(ch =='4') pos = 135;
    else if(ch =='5') pos = 180;
    else;
    Serial.print("pos = ");
    myservo.write(pos); delay(15);
    Serial.println(pos);
}
}
