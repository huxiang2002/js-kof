let Ac_Game_Object = []

class AcGameObject{
    constructor(){
        Ac_Game_Object.push(this);

        this.timedelta = 0
        this.has_call_start = false
    }

    start(){

    }

    update(){

    }

    destory(){
        for(let i in Ac_Game_Object){
            if(Ac_Game_Object[i] === this){
                Ac_Game_Object.splice(i,1);
            }
        }
    }
}


let last_timestamp;
let Ac_Game_Object_Frame = (timestamp) =>{
    for(let obj of Ac_Game_Object){
        if(!obj.has_call_start){
            obj.start();
            obj.has_call_start = true;
        }else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(Ac_Game_Object_Frame);
}

requestAnimationFrame(Ac_Game_Object_Frame);

export{
    AcGameObject
}