#!/usr/bin/python
# -*- coding: utf-8 -*-

# Copyright (c) 2010-2013 Roger Light <roger@atchoo.org>
#
# All rights reserved. This program and the accompanying materials
# are made available under the terms of the Eclipse Distribution License v1.0
# which accompanies this distribution.
#
# The Eclipse Distribution License is available at
#   http://www.eclipse.org/org/documents/edl-v10.php.
#
# Contributors:
#    Roger Light - initial implementation
# Copyright (c) 2010,2011 Roger Light <roger@atchoo.org>
# All rights reserved.

# This shows a simple example of an MQTT subscriber.

# import context  # Ensures paho is in PYTHONPATH
import paho.mqtt.client as mqtt
import json
import time
import random
import sys
random.seed(10)


def on_connect(mqttc, obj, flags, rc):
    print("rxc: " + str(rc))


def on_message(mqttc, obj, msg):
    print(msg.topic + " " + str(msg.qos) + " " + str(msg.payload))


def on_publish(mqttc, obj, mid):
    print("mid: " + str(mid))


def on_subscribe(mqttc, obj, mid, granted_qos):
    print("Subscribed: " + str(mid) + " " + str(granted_qos))


def on_log(mqttc, obj, level, string):
    print(string)


# If you want to use a specific client id, use
# mqttc = mqtt.Client("client-id")
# but note that the client id must be unique on the broker. Leaving the client
# id parameter empty will generate a random id for you.
mqttc = mqtt.Client(transport='websockets')
mqttc.on_message = on_message
mqttc.on_connect = on_connect
mqttc.on_publish = on_publish
mqttc.on_subscribe = on_subscribe
# Uncomment to enable debug messages
# mqttc.on_log = on_log
# mqttc.tls_set("/home/admin/certs/server_iot.crt", tls_version=ssl.PROTOCOL_TLSv1_2)
# mqttc.tls_insecure_set(True)
mqttc.connect("localhost", port=8083)
# mqttc.connect("rpi4-002.local")

mqttc.subscribe("Riku/Induction/Control", 0)
mqttc.subscribe("Riku/Updates")
mqttc.subscribe("Riku/Firmware/SubParams")
mqttc.subscribe("Riku/Firmware/PubAll")

mqttc.loop_start()
c = 0
while True:
    c = c + 1
    temp = random.randrange(33, 300)
    weight = random.randrange(0, 500)
    time.sleep(1)
    # print(temp)
    # print(weight)
    payload = {"cooktopTemperature": temp}
    payload2 = {"weight": weight/100, "targetWeight": 200}
    payload3 = {"station1Level": weight/5,  "station2Level": temp/3}
    print(payload)
    print(sys.getsizeof(payload))
    print(payload2)
    print(sys.getsizeof(payload2))
    print(payload3)
    print(sys.getsizeof(payload3))
    # print(c)
    mqttc.publish("Cooktop/Updates", json.dumps(payload))
    mqttc.publish("Riku/WeighingScale/Updates", json.dumps(payload2), 0)
    mqttc.publish('LiquidStation/Updates', json.dumps(payload3), 0)
    mqttc.publish('Riku/Firmware/PubAll', json.dumps(payload))
    mqttc.publish('Riku/Firmware/SubParams', json.dumps(payload2))
    time.sleep(2)
