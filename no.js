const EventEmmitter = require('events');

class DemoEitter extends EventEmmitter {
    constructor(opt) {
        super(opt)
    }
    init(){
        this.emit('init','12354')
    }
    close(){
        this.emit('close event');
    }
}

let d = new DemoEitter();
d.on('init', param =>{
    console.log(param)
})
d.init()