Messages from UI to Broker  
==============================

## _Refer to_ [mqttconst.py](https://github.com/futuristiclabs/ftlabs_riku_v2/blob/modular/riku_flabs/riku_Flabs/python/controlScripts/lib/mqttconst.py) for the constants and flags referred here

## **Status of Machine**

## _riku/firmware/status/#_

The UI would subscribe to the following topics as needed  
Data published with QOS = 0 from the firmware  
The various subtopics of data are:

### riku/firmware/status/spice

SPICE_DATA int  
SPICE_LC float  
The various status codes are defined in the following file:  
mqttconst = [mqttconst](controlScripts/lib/mqttconst)

- SPICE_STATUS
  - mqttconst.SPICE_STAT_IDLE
  - mqttconst.SPICE_STAT_INDEX
  - mqttconst.SPICE_STAT_WEIGHT
  - mqttconst.SPICE_STAT_HOMERACK
  - mqttconst.SPICE_STAT_HOMEPUSH
  - mqttconst.SPICE_STAT_WT_TIMEOUT
  - mqttconst.SPICE_STAT_UNKNOWN

```javascript
message = {
                mqttconst.MQTT_FSTAT_SPICE: [
                    SPICE_STATUS,
                    SPICE_DATA,
                    SPICE_LC
                ]
            }
```

### riku/firmware/status/rice

RICE_TEMP float  
PIN state refers to whether the rice is on/off

- PIN_STATE
  - mqttconst.PIN_STATE_HIGH
  - mqttconst.PIN_STATE_LOW

```javascript
 message = {
                mqttconst.MQTT_FSTAT_RICE: [
                    PIN_STATE,
                    RICE_TEMP
                ]
            }
```

### riku/firmware/status/induction

INDUCTION_TEMP float

- PIN_STATE
  - mqttconst.PIN_STATE_HIGH
  - mqttconst.PIN_STATE_LOW

Explanation:
Induction relay ON -> PIN_STATE_HIGH + PIN_STATE_HIGH  
 Induction relay OFF -> PIN_STATE_HIGH + PIN_STATE_LOW  
 Induction OFF -> PIN_STATE_LOW + PIN_STATE_LOW

Induction works when induction relay is on

```javascript
message = {
            mqttconst.MQTT_FSTAT_INDUCTION: [
                PIN_STATE,
                PIN_STATE,
                INDUCTION_TEMP
            ]
        }
```

### riku/firmware/status/liquid

OILWAT_TIME_STR int

- LIQUID_STATUS
  - mqttconst.OILWAT_STAT_IDLE
  - mqttconst.OILWAT_STAT_DISPOIL
  - mqttconst.OILWAT_STAT_DISPWAT
  - mqttconst.MQTT_CMD_NULL

```javascript
message = {
            mqttconst.MQTT_FSTAT_OILWAT: [
                LIQUID_STATUS,
                OILWAT_TIME_STR
            ]
        }
```

### riku/firmware/status/trigger

This topic continously publishes of all the trigger points in the system:

- OILCAP_STATE : Oil Bottle presence
- WATCAP_STATE : Water Bottle presence
- OILLEVEL_STATE : Oil Level in bottle
- WATLEVEL_STATE : Water Level in bottle
- DOOR_STATE : Rice Section door state
- ARM_STATE : Arm state (Stirring/Idle)
- FAN_STATE : Fan on/off

PIN_STATE

- mqttconst.PIN_STATE_HIGH
- mqttconst.PIN_STATE_LOW

```javascript
message = {
    mqttconst.MQTT_OIL_CAPBIT       : PIN_STATE,
    mqttconst.MQTT_WAT_CAPBIT       : PIN_STATE,
    mqttconst.MQTT_OIL_LVLBIT       : PIN_STATE,
    mqttconst.MQTT_WAT_LVLBIT       : PIN_STATE,
    mqttconst.MQTT_COOKER_DOORBIT   : PIN_STATE,
    mqttconst.MQTT_ARM_BIT          : PIN_STATE,
    mqttconst.MQTT_FAN_BIT          : PIN_STATE
}
```

### riku/firmware/status/ingredient

COOK_DATA float  
COOK_LC float  
STIR_TIME int

mqttconst = [mqttconst](controlScripts/lib/mqttconst)  
COOK_STATUS refers to the 4 states of the ingredient rack

- COOK_STATUS :
  - mqttconst.COOK_STAT_IDLE
  - mqttconst.COOK_STAT_STIR
  - mqttconst.COOK_STAT_INDEX
  - mqttconst.COOK_STAT_UNKNOWN
- COOK DATA : Has error state if any
- COOK_LC : Load cell data
- STIR_TIME : Stir time left

```javascript
 message = {

   mqttconst.MQTT_FSTAT_COOK:[
      COOK_STATUS,
      COOK_DATA,
      COOK_LC,
      STIR_TIME
   ]
}
```

## **Manual Control**

## _riku/user/ctrl/#_

Manual Control refers to controlling a single function of the machine via the UI one by one  
Data published at QOS = 2
mqttconst = [mqttconst](controlScripts/lib/mqttconst)

## Rice

## _riku/user/ctrl/rice_

0: Rice Cooker ON/OFF || Rice KeepWarm ON/OFF  
1: CutOff Temperature
RICE_ACTION

- LOOP_STAT_RICEON_STR
- LOOP_STAT_RICEOFF_STR
- LOOP_STAT_RICEWARMON_STR
- LOOP_STAT_RICEWARMOFF_STR

```javascript
message = {
    mqttconst.MQTT_CTRL_RICE: [ RICE_ACTION, RICE_COOKER_CUTOFF]
}
```

**example**: '200': [1,70 ]

## Induction

## _riku/user/ctrl/induction_

By list index (in message)
0: Induction ON/OFF  
1: Induction Relay ON/OFF  
2: Induction Temperature Setpoint
3: Step Execution end time

INDUCTION_STATE

- mqttconst.LOOP_STAT_INDON
- mqttconst.LOOP_STAT_INDOFF

RELAY_STATE

- mqttconst.LOOP_STAT_INDON
- mqttconst.LOOP_STAT_INDOFF

```javascript
message ={
    mqttconst.MQTT_CTRL_INDUCTION: [INDUCTION_STATE, RELAY_STATE, induction_temperature]
}
```

**example**: '201': [ 1, 1, 50 ]

## Liquid

## _riku/user/ctrl/liquid_

0: Oil or Water Flag  
1: Time to dispense for

ACTION

- mqttconst.OILWAT_STAT_DISPOIL
- mqttconst.OILWAT_STAT_DISPWAT

```javascript
message = {
    mqttconst.MQTT_CTRL_OILWAT: [ACTION, disptime]
}

```

**example**: '204': [ 1, 2]

## Spice

## _riku/user/ctrl/spice_

0: Home rack OR Index Spice Rack OR Dispense Spice  
1: Index of spice  
2: PushMM  
3: Weight of Spice

SPICE_ACTION

- mqttconst.SPICE_STAT_HOMERACK
- mqttconst.SPICE_STAT_HOMEPUSH
- mqttconst.SPICE_STAT_INDEX
- mqttconst.SPICE_STAT_DISPENSE

```javascript
 message = {
    mqttconst.MQTT_CTRL_SPICE: [SPICE_ACTION, SPICE_INDEX, PushMM, SPICE_WEIGHT]
}
```

**example**: '202': [ 3, 8 , 5 , 1] (dispensing spice)

## Automatic Control

### Recipe

Refer to the mqttconst.py file to match the appropriate commands

## _riku/auto/ctrl_

Step header mqttconst.MQTT_CTRL_COOK

- COOK_MODE : AUTO/GUIDED/MANUAL || 0/1/2

- STEP_NO : step number

- STEP_TIME : Time taken to execute a step. Would be the stir time for stirring steps, 0 for dispensing steps

- STEP_TEMPERATURE : Temperature at which step is to be executed. Would change at a particular step every time the induction command is sent with a different temperature from a previous step

```javascript
mqttconst.MQTT_CTRL_COOK : [ COOK_MODE, STEP_NO, STEP_TIME, STEP_TEMPERATURE]
```

**example**:

```javascript
;[
  {
    '208': [0, 1, 40, 140], //
    '201': [0, 1, 140, 0], // induction control
    '204': [1, 2], // dispensing oil
    '202': [3, 4, 20, 1] // dispensing spice
  },

  {
    '208': [0, 2, 20, 140], //
    '202': [3, 4, 10, 1]
  },

  {
    '208': [0, 3, 10, 140],
    '202': [3, 10, 15, 1]
  },
  {
    '208': [0, 4, 10, 140],
    '202': [3, 8, 5, 1]
  },

  {
    '208': [0, 5, 30, 160],
    '201': [0, 1, 160],
    '203': [2, 1]
  },
  {
    '208': [0, 6, 10, 160],
    '203': [2, 2]
  },

  {
    '208': [0, 7, 10, 160],
    '203': [2, 3],
    '204': [2, 1]
  },

  {
    '208': [0, 8, 20, 160],
    '203': [2, 4]
  },

  {
    '208': [0, 9, 10, 150],
    '201': [0, 1, 150],
    '203': [2, 5]
  },

  {
    '208': [0, 10, 20, 150],
    '203': [2, 6]
  },

  {
    '208': [0, 11, 40, 150],
    '203': [1, 40]
  },

  {
    '208': [0, 12, 10, 150],
    '203': [1, 7]
  }
]
```
