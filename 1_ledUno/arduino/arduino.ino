const int pinLed = 13;

void setup() {
  pinMode(pinLed,OUTPUT);
  digitalWrite(pinLed,LOW);
  Serial.begin(9600);
}

void loop() {
  if(Serial.available() > 0) {
    unsigned char ch = Serial.read();
    if     (ch == '1') digitalWrite(pinLed,HIGH);
    else if(ch == '0') digitalWrite(pinLed,LOW );
    else;
  }
}
