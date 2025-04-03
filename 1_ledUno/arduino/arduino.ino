const int pinVR = A0;

void setup() {
  Serial.begin(9600);
}
void loop() {
  int adc_res =analogRead(pinVR);
  Serial.print("adc = ");
  Serial.println(adc_res);
  delay(100);
}
