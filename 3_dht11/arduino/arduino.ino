// Modified by John 2015 11 03
// MIT license

#include "DHT.h"
#define DHTPIN 12
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
}
void loop() {
  delay(2000);
  int h = dht.readHumidity();
  int t = dht.readTemperature();
  Serial.print("humi");
  Serial.println(h);
  Serial.print("temp");
  Serial.println(t);
}
