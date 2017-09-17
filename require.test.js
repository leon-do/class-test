const {myRequire} = require('./require.js')


const myTest = class extends myRequire {

	constructor(args){
		super(args)
		this.tests()
	}

	tests(){
		test('this.init() to return this.NAME', () => {
  				expect(this.init()).toBe('helloWorld');
		});
	}

}

new myTest