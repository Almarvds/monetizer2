import React, {
  Component
} from 'react'
import Dropzone from '../dropzone/Dropzone'
import Progress from '../progress/Progress'
import {storage} from '../firebase/index'


class Upload extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      response: null,
      files: [],
      startedAnalyzing: false,
      uploading: false,
      uploadProgress: 0,
      successfullUploaded: 0
    };
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.renderActions = this.renderActions.bind(this);
    this.transferURLtoBackend = this.transferURLtoBackend.bind(this);
  }

  onFilesAdded(files) {
    files.forEach(file =>
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    })))
  }

  transferURLtoBackend(url){
    const firebaseURL = {
      FirebaseUrl_: url
    }
    console.log(JSON.stringify(firebaseURL));
    const transferURL = "http://localhost:5000/analyze";
    fetch(transferURL,{
      method: 'POST',
      body:JSON.stringify(firebaseURL),
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  async uploadFiles() {

    this.setState({
      uploadProgress: {},
      uploading: true
    });
    const promises = [];
    this.state.files.forEach(file => {
      var uploadTask = storage.ref(`uploads/${file.name}`).put(file);
      uploadTask.on('state_changed', (snapshot) => {
        //progress function
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
        this.setState({uploadProgress: progress});
        console.log(this.state.uploadProgress);
      }, (error) => {
        console.log(error);
      }, () => {
        //completion function
        console.log('completed');
        this.setState({successfullUploaded: 1, uploading:false});
        storage.ref('uploads').child(file.name).getDownloadURL().then(url=>{
          console.log(url);
          this.transferURLtoBackend(url);
        })
      });
    });
  }

  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress;
    //this.state.uploading || this.state.successfullUploaded
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div className='row justify-content-md-center' style={{marginTop:'1.5vh'}}>
        <div className = 'col-md-auto' style={{width:'5vw'}}/>
        <div className="col-md-auto progress mx-auto" style={{width:'50vw', padding:'0px'}}>
          <div className="progress-bar-striped bg-success" role="progressbar" style={{width: `${uploadProgress}%`,
          ariaValuenow:`${uploadProgress}`, ariaValuemin:"0", ariaValuemax:"100"}}></div>
        </div>
        <div className = 'col-md-auto' style={{width:'5vw'}}>
          <img id="CheckIcon" alt = "done" src = "/static/checkmark-circle.svg"
          style = {{ opacity:`${this.state.successfullUploaded}`, width:'2vw', height:'2vw', marginTop:'-1.5vh'}}/>
        </div>
        </div>
      );
    }
  }

  renderActions() {
    if (this.state.successfullUploaded && !this.state.startedAnalyzing) {
      return (
        <div className='row'>
          <div className='row mx-auto' style={{marginBottom:'2vh'}}>
            <div className='col-mx' style={{marginRight:'3vw'}}>
              <button className = "btn btn-outline-dark" onClick = {
                () =>
                this.setState({
                  files: [],
                  successfullUploaded: false,
                  startedAnalyzing: false,
                })
              }> Clear
              </button>
            </div>
            <div className='col-mx'>
              <button className = "btn btn-success" onClick =
              { () => {this.props.triggerPhaseShift()} }
              > Analyze </button>
            </div>
          </div >
        </div>
      );
    } else {
      return (
        <div className='row'>
          <div className='row mx-auto' style={{marginBottom:'2vh'}}>
            <div className='col-mx' style={{marginRight:'3vw'}}>
              <button className = "btn btn-dark" disabled = {
                this.state.files.length < 0 || this.state.uploading
              }
              onClick = {
                this.uploadFiles
              } >
              Upload <
              /button>
            </div>
            <div className='col-mx'>
              <button className = "btn btn-outline-success" disabled style= {{cursor: 'default'}}
              > Analyze </button>
            </div>
          </div >
        </div>
      );
    }
  }

  render() {
      return (
        <div className = "Upload" style={{marginTop:"5vh"}}>
          <div className = "Content mx-auto" style={{width:"60vw", marginBottom:"2vh", color:"black"}}>
            <div>
              <Dropzone onFilesAdded = {this.onFilesAdded} disabled = {
              this.state.uploading || this.state.successfullUploaded}/>
            </div>
            <div className = "Files">
            { this.state.files.map(file => {
              return (
                <div key = {file.name} className = "Row" id='filerow' >
                  <span> {file.name} < /span>
                  <img id='Cancel' src='/static/close-circle-outline.svg' alt="cancel" onClick = {
                    () => this.setState({
                      files: this.state.files.filter(f => f.name !== file.name)
                    })
                  }/>
                  {this.renderProgress(file)}
                </div>
                );
              })
            }
            </div>
          </div>
          <div className = "Actions" > {
            this.renderActions()
          } </div>
        </div>
      );
    }
  }

 function fileAccepted(file){
  var fileExtension = file.name.split('.').pop();
  console.log("File uploaded of type: " + fileExtension);
  if(fileExtension === "jpg" || fileExtension === "png"){
    console.log("image file type accepted");
    resultsLink = "/resultsthumbnail";
    return true;
  } else if(fileExtension === "mp4") {
    console.log("video file type accepted");
    resultsLink = "/resultsvideo";
    return true;
  } else {
    console.log("file type not accepted");
    return false;
    }
  }

export default Upload
