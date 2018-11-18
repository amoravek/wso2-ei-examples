function transform(mc) {
	var payload = mc.getPayloadJSON();
	var counter = Number(mc.getProperty('counter'));
	payload['service' + counter] = 'Success';
	delete payload.service;
	mc.setPayloadJSON(payload);
	mc.setProperty('counter', ++counter);
}