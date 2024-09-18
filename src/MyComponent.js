import React from "react";
class MyComponent extends React.Component{
    state={
        second : 0,
        minute : 0,
        hour : 0,
        setDisabled : false,
       
    }
    onStart=()=>{
        this.setState({
            setDisabled : true
        })
        let i = setInterval(()=>{
            const {hour,minute,second} = this.state
            if(second===59) {
                if(minute===59) {
                    this.setState({
                        minute : 0,
                        hour : hour+1
                    })
                }else{
                    this.setState({
                        second : 0,
                        minute : minute+1
                    })
                }
               
            }else{
                this.setState({
                    second : second+1
                })
            }
            
        },1000)
        this.setState({
            setInterval : i
        })
    }
    onStop=()=>{
        clearInterval(this.state.setInterval)
        this.setState({
            setDisabled : false
        })
       
    }
    onSave=()=>{
        const {hour,minute,second,savedIntervals} = this.state
        savedIntervals.push(hour+":"+minute+":"+second)
    }
    onClear=()=>{
        this.onStop ()
        this.setState ({
            hour : 0,
            minute : 0,
            second : 0,
            savedIntervals :[]
        })
    }

    render(){
        const {hour,minute,second,setDisabled,savedIntervals}=this.state
        return <div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-6 offset-3"> 
                        <div className="card">
                            <div className="card-header">
                                <h1>StopWatch</h1>
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
                                    <div className="col-md-3">
                                        <button className="btn btn-info" onClick={this.onSave}>Interval</button>
                                    </div>
                                    <div className="col-md-3">
                                        <button className="btn btn-danger" onClick={this.onClear}>Clear</button>
                                    </div>
                                </div>
                            </div>
                            {
                                savedIntervals.map((item)=> <p>
                                     {item}
                                </p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }   
}
export default MyComponent;