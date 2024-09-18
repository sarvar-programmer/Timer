import React from "react";
class TaymComponent extends React.Component{
   state={
    hour : 1,
    minute :  1,
    second : 59,
    setDisabled : false,
    interval : '',
   }
    onStart=()=>{
        this.setState({
            setDisabled : true
        })
        let i = setInterval(()=>{
            const {hour,minute,second} = this.state
       
            if(second===0) {
                if(minute===0) { 
                    if(hour!==0 && minute>-1 && second>-1)
                    this.setState({
                       minute : 59,
                       hour : hour-1
                    })
                }else{
                    this.setState({
                    second : 59,
                    minute : minute-1
                 })
                  
                }
            }else{
                this.setState({
                    second : second-1
                })
            }
        },1)
        this.setState({
            interval : i
        })
    }

    onStop=()=>{
        clearInterval(this.state.interval)
        this.setState({
            setDisabled : false
        })
    }
    render(){
        const {hour,minute,second,setDisabled}=this.state
        return <div>
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-6 offset-3"> 
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-">Taymer</h1>
                        </div>
                        <div className="card-body">
                            <h3 className="text-center">{hour}:{minute}:{second}</h3>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-3">
                                    <button className="btn btn-success" onClick={this.onStart} disabled={setDisabled}>Start</button>
                                </div>
                                <div className="col-md-3">
                                    <button className="btn btn-warning" onClick={this.onStop}>Stop</button>
                                </div>
                            </div>
                        </div>
                     </div>
                 </div>
             </div>
         </div>
    </div> 
    
    }

}
export default TaymComponent;