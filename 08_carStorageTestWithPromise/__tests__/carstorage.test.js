'use strict';


const storage=require('../carstorage');

// Four different ways of performing async resolve:
describe('Testing getLicence to resolve', () => {
	
	test('catch-then', () => {
		expect.assertions(1)  // promise is fulfilled rejected, or resolved. there might be errors that are not caught w/o this
		return storage.getWithLicence('ABC-1')  // returns a promise
			.then(data => expect(data)
			.toEqual({"model": "Nova", "licence": "ABC-1", "type": "GT"}))
	});	

	test('async-await', async () => {
		expect.assertions(1)
		const data = await storage.getWithLicence('ABC-1')
		expect(data).toEqual({"model": "Nova", "licence": "ABC-1", "type": "GT"})
	})

	test('resolves', () => {
		return expect(storage.getWithLicence('ABC-1'))
			.resolves.toEqual({"model": "Nova", "licence": "ABC-1", "type": "GT"})
	})

	test('resolves with async', async () => {
		expect.assertions(1)
		await expect(storage.getWithLicence('ABC-1'))
		.resolves.toEqual({"model": "Nova", "licence": "ABC-1", "type": "GT"})
	})
});

// Four different ways of performing async reject:
describe('Testing getLicence to reject', () => {
	test('then-catch', () => {
		expect.assertions(1);
		return storage.getWithLicence().catch(data => expect(data).toBe('licence number missing'));
});

	test('async-await', async () => {
		expect.assertions(1);
		try {
			await storage.getWithLicence();
		}
		catch(error) {
			expect(error).toBe('licence number missing');
		}
	});

	test('rejects', () => {
		return expect(storage.getWithLicence()).rejects.toBe('licence number missing');
	});

	test('rejects with async', async () => {
		expect.assertions(1);
		await expect(storage.getWithLicence()).rejects.toBe('licence number missing');
	});
});
