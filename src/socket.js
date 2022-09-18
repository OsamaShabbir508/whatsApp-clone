 import io from 'socket.io-client';
  export default  class Socket {
  initializeSocket(id) {
    if (!this.socket) {
      this.socket = io('http://192.168.2.104:5000', {
        transports: ['websocket'],
        autoConnect: 'false',
      });
      this.socket.on('connect',()=>{
        this.socket.emit('sign',{
          id
        })
      })
    }
  }
  
  disconnectSocket(){
    this.socket.disconnect()
}
emit(emit='msg',data={}){
  if (this.socket) {
    this.socket.emit(emit,data)
  }
    
}
on(callback){
  if (this.socket) {
    this.socket.off('message').on('message',(data)=>{
      callback(data)
    })
    
  }
    
}
}


