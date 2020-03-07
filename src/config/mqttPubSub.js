
// A conversion bridge to get MQTT Publish messages as needed by the firmaware.
// Message structure
// [ "CONTROL_STRING", "ACTION_STRING", ...PARAMS ]

// Contrl Dictionary
const ControlPubDictionary ={
    "MQTT_RICE_CTRL":'20', 
    "MQTT_INDUCTION_CTRL":'21', 
    "MQTT_SPICE_CTRL":'22',  
    "MQTT_COOK_CTRL":'23',  
    "MQTT_OILWAT_CTRL":'24', 
    "MQTT_LASTCMD_STAT":'25',      
    "MQTT_LASTCMD_VAL":'26',      
    "MQTT_STATUS1":'27',  
    "MQTT_STATUS2":'28',  
    "MQTT_BIST_RESP_CTRL":'29',  
}
// Spice Rack Control
const SpicePubDictionary = {
    "SPICE_STAT_IDLE": "0",
    "SPICE_STAT_INDEX": "1",
    "SPICE_STAT_WEIGHT":"2",
    "SPICE_STAT_DISPENSE":"3",
    "SPICE_STAT_HOMERACK":"4",
    "SPICE_STAT_HOMEPUSH":"5",
    "SPICE_STAT_WT_TIMEOUT":"6",
    "SPICE_STAT_GRAM":"7",
    "SPICE_STAT_PTYPE1": 8,
    "SPICE_STAT_PTYPE2": 9,
    "SPICE_STAT_PTYPE3": 10,
    "SPICE_STAT_IDLE_STR":"IDLE",
    "SPICE_STAT_INDEX_STR":"INDEXING",
    "SPICE_STAT_WEIGHT_STR":"WEIGHING",
    "SPICE_STAT_DISPENSE_STR":"DISPENSING",
    "SPICE_STAT_HOMERACK_STR":"HOMING RACK",
    "SPICE_STAT_HOMEPUSH_STR":"HOMING PUSH",
    "SPICE_STAT_WT_TIMEOUT_STR":"WEIGHT_TIMEOUT",
    "SPICE_STAT_GRAM_STR":"GRAM",
    "SPICE_STAT_PTYPE_STR":"PTYPE",
    "SPICE_STAT_STR":"STATE",
    "SPICE_STAT_NULL_STR":"NULL",
    "SPICE_STAT_UNKNOWN_STR":"UNKNOWN",
}

// Induction Rack Control
const InductionPubDictionary = {
    "COOK_STAT_IDLE" : 0,
    "COOK_STAT_STIR" : 1,
    "COOK_STAT_INDEX": 2,
    "COOK_STAT_HOME" : 4,
    "COOK_STAT_STR"  : "STATE",
    "COOK_STAT_IDLE_STR"   : "IDLE",
    "COOK_STAT_STIR_STR"   : "STIRRING",
    "COOK_STAT_INDEX_STR"  : "INDEXING",
    "COOK_STAT_COOK_STR"   : "COOK",
    "COOK_STAT_NULL_STR"   : "NULL",
    "COOK_STAT_UNKNOWN_STR": "UNKNOWN",
}

// Liquid Station Control
const LiquidStationPubDictionary = {
    "OILWAT_STAT_IDLE": 0,
    "OILWAT_STAT_DISPOIL":1,
    "OILWAT_STAT_DISPWAT":2,
    "OILWAT_STAT_VOLUME": 3,
    "OILWAT_TIME_STR": "REM_TIME",
    "OILWAT_STAT_IDLE_STR": "IDLE",
    "OILWAT_STAT_DISPOIL_STR":"DISPOIL",
    "OILWAT_STAT_DISPWAT_STR":"DISPWAT",
    "OILWAT_STAT_LOAD_CELL_STR":"LC",
    "OILWAT_STAT_NULL_LOAD_CELL_STR":"NULL",
    "OILWAT_STAT_VOLUME_STR":"VOL",
    "OILWAT_STAT_UNKNOWN_STR":"UNKNOWN",
}

const PubSubDictionary ={
    dataSub:{
        "MQTT_BIST_RESP": '1',
        "MQTT_STATUS1": '2',
        "MQTT_STATUS2":'3'  ,
        "MQTT_SPICE_STATUS":'4'  ,
        "MQTT_SPICE_LC":'5'   ,
        "MQTT_SPICE_DATA":'6'   ,
        "MQTT_COOK_STATUS":'7'   ,
        "MQTT_COOK_LC":'8'  ,
        "MQTT_COOK_DATA":'9' ,
        "MQTT_OILWAT_STATUS":'10' ,
        "MQTT_RICE_TEMP":'11' ,
        "MQTT_INDUCTION_TEMP":'12' ,
        "MQTT_DEV_SRNO":'13'      ,
        "MQTT_SW_VER":'14'  ,
        "MQTT_MAGSNSR_POS":'15'      ,
        "MQTT_LASTCMD_STAT":'16'      ,
        "MQTT_LASTCMD_VAL1":'17'      ,
        "MQTT_LASTCMD_VAL2":'18',
    }
}

exports.dispenseSpice = function  (index, weight, pushType){
    return [ ControlPubDictionary["MQTT_SPICE_CTRL"], SpicePubDictionary["SPICE_STAT_DISPENSE"], index, weight, pushType ]
}

exports.homeSpiceRack = function(){
    return [ ControlPubDictionary["MQTT_SPICE_CTRL"], SpicePubDictionary["SPICE_STAT_HOMERACK"] ]
}

exports.moveSpiceRack2Position = function(position){
    return [ ControlPubDictionary["MQTT_SPICE_CTRL"], SpicePubDictionary["SPICE_STAT_INDEX"], position]
}

exports.moveIngredientRack2Position = function (position){
    return [ ControlPubDictionary["MQTT_COOK_CTRL"], InductionPubDictionary["COOK_STAT_INDEX"], position  ]
}

exports.dispenseOil = function(volume){
    return [ ControlPubDictionary["MQTT_OILWAT_CTRL"], LiquidStationPubDictionary["OILWAT_STAT_DISPOIL"], LiquidStationPubDictionary["OILWAT_STAT_VOLUME"], volume]
}

exports.dispenseWater = function(volume){
    return [ ControlPubDictionary["MQTT_OILWAT_CTRL"], LiquidStationPubDictionary["OILWAT_STAT_DISPWAT"], LiquidStationPubDictionary["OILWAT_STAT_VOLUME"], volume]
}

exports.switchOffRiceCooker = function(){
    return [ ControlPubDictionary["MQTT_RICE_CTRL"], InductionPubDictionary["COOK_STAT_COOK_STR"], "ON" ]
}

exports.switchOnRiceCooker = function(){
    return [ ControlPubDictionary["MQTT_RICE_CTRL"], InductionPubDictionary["COOK_STAT_COOK_STR"], "OFF" ]
}

exports.setRiceCookerTemperature = function(temperature){
    return [ ControlPubDictionary["MQTT_RICE_CTRL"], InductionPubDictionary["COOK_STAT_COOK_STR"], temperature]
}

exports.setInductionTemperature = function(temperature){
    return [ ControlPubDictionary["MQTT_INDUCTION_CTRL"], temperature ]
}

exports.switchOnStirring = function(){
    return [ ControlPubDictionary["MQTT_COOK_CTRL"], InductionPubDictionary["COOK_STAT_STIR"], InductionPubDictionary['COOK_STAT_STIR_STR'] ,"ON" ]
}

exports.switchOffStirring = function(){
    return [ ControlPubDictionary["MQTT_COOK_CTRL"], InductionPubDictionary["COOK_STAT_STIR"], InductionPubDictionary['COOK_STAT_STIR_STR'] ,"OFF" ]
}

// module.exports.PubSubBridge = {
//     dispenseSpice: dispenseSpice,
//     homeSpiceRack: homeSpiceRack,
//     moveSpiceRack2Position: moveSpiceRack2Position,
//     moveIngredientRack2Position: moveIngredientRack2Position,
//     dispenseOil: dispenseOil,
//     dispenseWater: dispenseWater,
//     setInductionTemperature: setInductionTemperature,
//     switchOnRiceCooker:  switchOnRiceCooker,
//     switchOffRiceCooker: switchOffRiceCooker,
//     setRiceCookerTemperature: setRiceCookerTemperature,
//     switchOnStirring: switchOnStirring,
//     switchOffStirring: switchOffStirring
// } 