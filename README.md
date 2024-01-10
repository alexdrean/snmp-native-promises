snmp-native-promises
--------------------

This is a promises wrapper for [snmp-native](https://www.npmjs.com/package/snmp-native)


Usage
-----

### Import

```javascript
const snmp = require('snmp-native-promises');
```

### new Session(options)

See original docs

### Usage

```javascript
const res = await session.get({oid: ".1.3.6.1.4.1.42.1.0"})
const res = await session.getNext({oid: ".1.3.6.1.4.1.42"})
const res = await session.getAll({oids: [".1.3.6.1.4.1.42.1.0", ".1.3.6.1.4.1.42.2.0"]})
const res = await session.getSubtree({oid: ".1.3.6.1.4.1.42.1.0"})
const res = await session.set({oid: ".1.3.6.1.4.1.42.1.0", value: 42, type: 2})

await session.close()
```
