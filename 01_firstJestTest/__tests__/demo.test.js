// Keep test.js files simple to avoid mistakes in the testing file!

/* This demo shows the order in which tests are run.
Tests actually do not test anything, they will only print out to console what is run */

/* beforeAll() will be run once before all other tests
afterAll() run once after all everything is finished */

beforeAll(() => {
  console.log('beforeAll', 'init before all tests'. toUpperCase());
});

afterAll(() => {
  console.log('afterAll', 'cleaning after all tests'. toUpperCase());
});

// test(test description, test function) or it(test description, test function)
test('This is not a test suite but an individual test', () => {
  console.log('Test', 'just some test');
})

it('This is another test, not in test suite', () => {
  console.log('it', 'just another test');
})

// in case want to run only one test:
// test.only('This is not a test suite but an individual test', () => {
//   console.log('Test', 'just some test');
// })

describe('This is a test suite 1', () => {
  beforeEach(() => {
    console.log('beforeEach', 'init test in suite 1 before every test');
  });

  afterEach(() => {
    console.log('afterEach', 'clearing after every test in suite 1');
  });

  test('Run test A of the first suite', () =>{
    console.log('testA')
  });

  test('Run test B of the first suite', () =>{
    console.log('testB')
  });

  test('Run test C of the first suite', () =>{
    console.log('testC')
  });
});

describe('This is suite2', () => {
  beforeAll(() => {
    console.log('BeforeAll2', 'init before all in suite2')
  });

  afterAll(() => {
    console.log('afterAll2', 'cleaning after all in suite2')
  });
  
  describe('This is 1st subsuite of suite2', () => {
    test('test D of the 1st subsuite of suite2', () => {
      console.log('test D')
    });

    test('test E of the 1st subsuite of suite2', () => {
      console.log('test E')
    });
  });

  describe('This is 2nd subsuite of suite2', () => {
    beforeEach(() => {
      console.log('beforeEach 2.2', 'init test in subsuite2 of suite2')
    });

    test('test F of the 2nd subsuite of suite2', () => {
      console.log('test F')
    });

    test('test G of the 2nd subsuite of suite2', () => {
      console.log('test G')
    });
  });
});

describe('This tests for an exception', () => {
  function testFunction() {
    throw new Error('this is an exception');
  }

  test('Tests if function throws a exception', () => {
    expect(() => testFunction()).toThrow('this is an exception'); // 'toThrow()' = a matcher
  })
});

describe('Test asynchronous functions', () => {
 test('Test promise resolve', () => {
    return expect(Promise.resolve('resolved')).resolves.toBe('resolved'); // 'resolves.toBe()' = a matcher
  });

  test('Promise reject', () => {
    return expect(Promise.reject('rejected')).rejects.toBe('rejected'); // 'rejects.toBe()' = a matcher
  })
});

describe('Test with an array of test values', () => {
  const testValues = [
    // inputA, inputB and expectedValue:
    ['first', 'second', 'firstsecond'], // one test case
    ['je', 'st', 'jest'], // another test case
    [1, 2, 3]
  ];
  const concat = (partA, partB) => partA + partB;
  // %s = placeholder that expects a string, see jest documentation for other options
  test.each(testValues)('%s and %s = %s', (inputA, inputB, expectedValue) => {
    expect(concat(inputA, inputB)).toBe(expectedValue);
  }) 
});

describe('Test individually', () => {
  const concat = (partA, partB) => partA + partB;

  test('first and second = firstsecond', () => {
    expect(concat('first', 'second')).toBe('firstsecond');
  });

  test('first and second = firstsecond', () => {
    expect(concat('je', 'st')).toBe('jest');
  });

  test('1 and 2 = 3', () => {
    expect(concat(1, 2)).toBe(3);
  });
})