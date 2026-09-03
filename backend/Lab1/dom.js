import {EventEmitter} from "node:events";
function createDomElements(){
  const myemitter= new EventEmitter();
  return{
    addEventListener(eventType,listener){
        myemitter.on(eventType,listener);
        },
    removeEventListener(eventType,listener){
        myemitter.off(eventType,listener);
    },
    dispatchEvent(event){
        event.target=this;
        event.currentTarget=this;
        myemitter.emit(event.eventType,event);
    }
  }
}
const button=createDomElements();
button.addEventListener('save',()=>{
    console.log("saving.....");
});
button.dispatchEvent({
    eventType:"save"
});
button.dispatchEvent({
  eventType:"click",
  detail:"this is the click dispatcher"
});
