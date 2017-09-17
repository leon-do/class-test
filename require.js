const {myExport} = require('./export.js')


const myRequire = class extends myExport {
	
	constructor(args){
		super(args)
		this.init()
	}

	init(){
		return this.NAME
	}

}

module.exports = {
	myRequire : myRequire
}