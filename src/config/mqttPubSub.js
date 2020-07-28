/* eslint-disable no-unused-vars */
// A conversion bridge to get MQTT Publish messages as needed by the firmaware.
// Message structure
// [ "CONTROL_STRING", "ACTION_STRING", ...PARAMS ]

function generateRandomString (length) {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

// Contrl Dictionary
const ControlPubDictionary = {
  MQTT_RICE_CTRL: '20',
  MQTT_INDUCTION_CTRL: '21',
  MQTT_SPICE_CTRL: '22',
  MQTT_COOK_CTRL: '23',
  MQTT_OILWAT_CTRL: '24',
  MQTT_LASTCMD_STAT: '25',
  MQTT_LASTCMD_VAL: '26',
  MQTT_STATUS1: '27', // automatic
  MQTT_STATUS2: '28', // toogle
  MQTT_BIST_RESP_CTRL: '29'
}

// Spice Rack Control
const SpicePubDictionary = {
  SPICE_STAT_IDLE: '0',
  SPICE_STAT_INDEX: '1',
  SPICE_STAT_WEIGHT: '2',
  SPICE_STAT_DISPENSE: '3',
  SPICE_STAT_HOMERACK: '4',
  SPICE_STAT_HOMEPUSH: '5',
  SPICE_STAT_WT_TIMEOUT: '6',
  SPICE_STAT_GRAM: '7',
  SPICE_STAT_PTYPE1: 8,
  SPICE_STAT_PTYPE2: 9,
  SPICE_STAT_PTYPE3: 10,
  SPICE_STAT_IDLE_STR: 'IDLE',
  SPICE_STAT_INDEX_STR: 'INDEXING',
  SPICE_STAT_WEIGHT_STR: 'WEIGHING',
  SPICE_STAT_DISPENSE_STR: 'DISPENSING',
  SPICE_STAT_HOMERACK_STR: 'HOMING RACK',
  SPICE_STAT_HOMEPUSH_STR: 'HOMING PUSH',
  SPICE_STAT_WT_TIMEOUT_STR: 'WEIGHT_TIMEOUT',
  SPICE_STAT_GRAM_STR: 'GRAM',
  SPICE_STAT_PTYPE_STR: 'PTYPE',
  SPICE_STAT_STR: 'STATE',
  SPICE_STAT_NULL_STR: 'NULL',
  SPICE_STAT_UNKNOWN_STR: 'UNKNOWN'
}

// Induction Rack Control
const StirrerPubDictionary = {
  COOK_STAT_IDLE: 0,
  COOK_STAT_STIR: 1,
  COOK_STAT_INDEX: 2,
  COOK_STAT_HOME: 4,
  COOK_STAT_STR: 'STATE',
  COOK_STAT_IDLE_STR: 'IDLE',
  COOK_STAT_STIR_STR: 'STIRRING',
  COOK_STAT_INDEX_STR: 'INDEXING',
  COOK_STAT_COOK_STR: 'COOK',
  COOK_STAT_NULL_STR: 'NULL',
  COOK_STAT_UNKNOWN_STR: 'UNKNOWN'
}

const IngredientRackPubDictionary = {
  INGREDIENT_STAT_IDLE: '0',
  INGREDIENT_STAT_STIR: '1',
  INGREDIENT_STAT_INDEX: '2',
  INGREDIENT_STAT_HOME: '4',
  INGREDIENT_STAT_STR: 'STATE',
  INGREDIENT_STAT_IDLE_STR: 'IDLE',
  INGREDIENT_STAT_STIR_STR: 'STIRRING',
  INGREDIENT_STAT_INDEX_STR: 'INDEXING',
  INGREDIENT_STAT_COOK_STR: 'COOK',
  INGREDIENT_STAT_NULL_STR: 'NULL',
  INGREDIENT_STAT_UNKNOWN_STR: 'UNKNOWN'
}

// Liquid Station Control
const LiquidStationPubDictionary = {
  OILWAT_STAT_IDLE: 0,
  OILWAT_STAT_DISPOIL: 1,
  OILWAT_STAT_DISPWAT: 2,
  OILWAT_STAT_VOLUME: 3,
  OILWAT_TIME_STR: 'REM_TIME',
  OILWAT_STAT_IDLE_STR: 'IDLE',
  OILWAT_STAT_DISPOIL_STR: 'DISPOIL',
  OILWAT_STAT_DISPWAT_STR: 'DISPWAT',
  OILWAT_STAT_LOAD_CELL_STR: 'LC',
  OILWAT_STAT_NULL_LOAD_CELL_STR: 'NULL',
  OILWAT_STAT_VOLUME_STR: 'VOL',
  OILWAT_STAT_UNKNOWN_STR: 'UNKNOWN'
}

const RiceCookerPubDictionary = {
  LOOP_STAT_RICEON: 1 << 2,
  LOOP_STAT_RICEON_STR: 'ON',
  LOOP_STAT_RICEOFF_STR: 'OFF',
  LOOP_STAT_RICEWARM: 1 << 3,
  LOOP_STAT_RICEWARMON_STR: 'WARMON',
  LOOP_STAT_RICEWARMOFF_STR: 'WARMOFF',
  LOOP_STAT_TEMP_STR: 'TEMP',
  LOOP_STAT_RICE_TEMP_STR: 'RICETEMP',
  LOOP_STAT_NULL: 'NULL'
}

export const InductionPubDictionary = {
  LOOP_STAT_INDRICE_STATE: 'STATE',
  LOOP_STAT_INDON: 1 << 0,
  LOOP_STAT_INDON_STR: 'ON',
  LOOP_STAT_INDOFF_STR: 'OFF',
  LOOP_STAT_INDRLYON: 1 << 1,
  LOOP_STAT_INDRLYON_STR: 'RLYON',
  LOOP_STAT_INDRLYOFF_STR: 'RLYOFF',
  LOOP_STAT_IND_TEMP_STR: 'INDTEMP'
}

export const PubSubDictionary = {
  MQTT_BIST_RESP: '1',
  MQTT_STATUS1: '2',
  MQTT_STATUS2: '3',
  MQTT_SPICE_STATUS: '4',
  MQTT_SPICE_LC: '5',
  MQTT_SPICE_DATA: '6',
  MQTT_COOK_STATUS: '7',
  MQTT_COOK_LC: '8',
  MQTT_COOK_DATA: '9',
  MQTT_OILWAT_STATUS: '10',
  MQTT_RICE_TEMP: '11',
  MQTT_INDUCTION_TEMP: '12',
  MQTT_DEV_SRNO: '13',
  MQTT_SW_VER: '14',
  MQTT_MAGSNSR_POS: '15',
  MQTT_LASTCMD_STAT: '16',
  MQTT_LASTCMD_VAL1: '17',
  MQTT_LASTCMD_VAL2: '18'
}

function array2Obj (array) {
  const currentObj = {}
  const objKey = array.shift()
  currentObj[objKey] = [...array]
  // currentObj["packetIdentifier"] = generateRandomString(5)
  return currentObj
}

export function decodePayload (payload) {}

export function dispenseSpice (index, weight, pushType) {
  return array2Obj([
    ControlPubDictionary.MQTT_SPICE_CTRL,
    SpicePubDictionary.SPICE_STAT_DISPENSE,
    index,
    weight,
    pushType
  ])
}

export function dispenseIngredient (index) {
  return array2Obj([
    ControlPubDictionary.MQTT_COOK_CTRL,
    IngredientRackPubDictionary.INGREDIENT_STAT_INDEX,
    index
  ])
}

export function homeSpiceRack () {
  return array2Obj([
    ControlPubDictionary.MQTT_SPICE_CTRL,
    SpicePubDictionary.SPICE_STAT_HOMERACK
  ])
}

export function moveSpiceRack2Position (position) {
  return array2Obj([
    ControlPubDictionary.MQTT_SPICE_CTRL,
    SpicePubDictionary.SPICE_STAT_INDEX,
    position
  ])
}

export function moveIngredientRack2Position (position) {
  return array2Obj([
    ControlPubDictionary.MQTT_COOK_CTRL,
    IngredientRackPubDictionary.INGREDIENT_STAT_INDEX,
    position
  ])
}

export function dispenseOil (volume) {
  return array2Obj([
    ControlPubDictionary.MQTT_OILWAT_CTRL,
    LiquidStationPubDictionary.OILWAT_STAT_DISPOIL,
    volume
  ])
}

export function dispenseWater (volume) {
  return array2Obj([
    ControlPubDictionary.MQTT_OILWAT_CTRL,
    LiquidStationPubDictionary.OILWAT_STAT_DISPWAT,
    volume
  ])
}

export function switchOffRiceCooker () {
  return array2Obj([
    ControlPubDictionary.MQTT_RICE_CTRL,
    InductionPubDictionary.LOOP_STAT_RICEON_STR,
    'ON'
  ])
}

export function switchOnRiceCooker () {
  return array2Obj([
    ControlPubDictionary.MQTT_RICE_CTRL,
    InductionPubDictionary.LOOP_STAT_RICEON_STR,
    'OFF'
  ])
}

export function setRiceCookerTemperature (temperature) {
  return array2Obj([
    ControlPubDictionary.MQTT_RICE_CTRL,
    InductionPubDictionary.LOOP_STAT_RICE_TEMP_STR,
    temperature
  ])
}

export function setInductionTemperature (temperature) {
  return array2Obj([ControlPubDictionary.MQTT_INDUCTION_CTRL, temperature])
}

export function switchOnStirring () {
  return array2Obj([
    ControlPubDictionary.MQTT_COOK_CTRL,
    StirrerPubDictionary.COOK_STAT_STIR,
    1
  ])
}

export function switchOffStirring () {
  return array2Obj([
    ControlPubDictionary.MQTT_COOK_CTRL,
    StirrerPubDictionary.COOK_STAT_STIR,
    0
  ])
}
