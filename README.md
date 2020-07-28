# Riku Device UI

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

**NOTE: Always use Yarn.** All things related to package management are done using Yarn. Make sure to never commit a `package-lock.json` because it means you used npm.

## Building

To build and deploy a new version for the UI, you need to be on the **master branch**.

1. Change the version in `package.json` to reflect the new version.
2. Stage changes `git add .`
3. Commit changes `git commit -m "vX.Y.Z"`
4. Tag the release `git tag vX.Y.Z`
5. Push both tags and commits `git push && git push --tags`

Following this, you can go the [actions](https://github.com/futuristiclabs/riku-device-ui/actions) section on the repo and watch the build. If the build is successful, you can go to the [releases](https://github.com/futuristiclabs/riku-device-ui/releases) section and see the new draft, and publish it.

## MQTT

Some notes related to how I setup `mqtt-react` locally.

### Configuring Broker

Using mosquitto as the broker, make sure you add websockets transport to the conf file.

```pseudocode
...(mosquitto.conf)
listener 8083
protocol websockets
...snip...
```

This isn't enough. Adding this to the end of the `mosquitto.conf` file allows us to register an extra listener by websockets but it breaks mosquitto for some reason. Make sure to uncomment the default listener in the conf file as well. The file should look something like this disregarding all the comments.

```pseudocode
port 1883
listener 8083
protocol websockets
```

This makes sure that a listener with the mqtt protocol is available on port 1883 by default.

### Configuring the testServer

If you're using the testServer in the repo to test localhost connection, make sure to sure to have these two lines.

```python
mqttc = mqtt.Client(transport='websockets')
mqttc.connect("localhost", port=8083)
```

### Configuring React for MQTT

Using the `mqtt-react` library (wildly outdated, need to update), make sure you set the connection url to `ws://localhost:8083` given you followed the config above. 