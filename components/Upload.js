import React, {
  Component
} from 'react'
import Dropzone from './dropzone/Dropzone'
import Progress from './progress/Progress'

var resultsLink = "";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      files: [],
      startedAnalyzing: false,
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false
    };
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }

  onFilesAdded(files) {
    files.forEach(file =>
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    })))
  }

  async uploadFiles() {
    const cleanreq = new XMLHttpRequest();
    cleanreq.open("POST", "http://localhost:4000/cleansession");
    cleanreq.send();

    this.setState({
      uploadProgress: {},
      uploading: true
    });
    const promises = [];
    this.state.files.forEach(file => {
      promises.push(this.sendRequest(file));
    });
    try {
      await Promise.all(promises);

      this.setState({
        successfullUploaded: true,
        uploading: false
      });
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      this.setState({
        successfullUploaded: true,
        uploading: false
      });
    }
  }

  sendRequest(file) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          const copy = {
            ...this.state.uploadProgress
          };
          copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100
          };
          this.setState({
            uploadProgress: copy
          });
        }
      });

      req.upload.addEventListener("load", event => {
        const copy = {
          ...this.state.uploadProgress
        };
        copy[file.name] = {
          state: "done",
          percentage: 100
        };
        this.setState({
          uploadProgress: copy
        });
        resolve(req.response);
      });

      req.upload.addEventListener("error", event => {
        const copy = {
          ...this.state.uploadProgress
        };
        copy[file.name] = {
          state: "error",
          percentage: 0
        };
        this.setState({
          uploadProgress: copy
        });
        reject(req.response);
      });

      if(fileAccepted(file)){
        const formData = new FormData();
        formData.append("file", file, file.name);
        req.open("POST", "http://localhost:4000/upload");
        req.send(formData);
      }
      else{
        console.log("file was not accepted");
        this.setState({
          successfullUploaded: false,
        });
      }

    });
  }

  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return ( <
        div className = "ProgressWrapper" >
        <
        Progress progress = {
          uploadProgress ? uploadProgress.percentage : 0
        }
        /> <
        img className = "CheckIcon"
        alt = "done"
        src = "baseline-check_circle_outline-24px.svg"
        style = {
          {
            opacity: uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
          }
        }
        /> < /
        div >
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
              { () => console.log("analysis called") }
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
