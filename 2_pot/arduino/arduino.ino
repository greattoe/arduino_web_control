const unsigned int ledPin = 13;
const unsigned int potPin = A0;

String  inputString    = "";
boolean stringComplete = false;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  inputString.reserve(10);
}

void loop() {
  unsigned int adcVal = analogRead(potPin);
  Serial.print("adc");  Serial.println(adcVal);
  
  if(stringComplete) 
  {
    if(inputString.substring(0,3) == "led")
    {
      if     (inputString.substring(3,4) == "1")
        digitalWrite(ledPin, HIGH);
        
      else if(inputString.substring(3,4) == "0")
        digitalWrite(ledPin, LOW );
    }
    Serial.println(inputString);
    inputString = "";
    stringComplete = false;
  }
  delay(250);
}

void serialEvent() {
  while (Serial.available() > 0) {
    char inChar = Serial.read();
    inputString = inputString + inChar;
    if(inChar == '\n') stringComplete = true;
  }
}
