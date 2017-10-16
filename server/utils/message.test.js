var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Kar';
		var text = "Some message";
		var message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,text});
	});
});

describe('geneLocationMessage', () => {
	it('should generate correct location object',() => {
		var from = 'Dev';
		var latitude = 15;
		var longitude = 29;
		var url = 'http://www.google.com/maps?q=15,29';
		var message = generateLocationMessage(from,latitude,longitude);
		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,url});
	});
})