import React from "react"
import { makeStyles } from '@material-ui/core/styles' 
import m from '../../../material/material.js';
import axios from '../../../../model/axios'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

class Dialog extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
      formVal : {
        name: '',
        age: '',
        weight: '',
        grade: '',
        classes: ''
      }
    }
  }
  handleClickOpen(bool, item) {
    if(bool){ //新增
      this.setState({
        open: true
      })
    }else{   //编辑
      axios.post('//localhost:8686/edit', {name: item.name})
      .then(res => {
        let data = JSON.parse(res.request.responseText)
        this.setState({
          open: true,
          formVal : {
            name: data.name,
            age: data.age,
            weight: data.weight,
            grade: data.grade,
            classes: data.classes
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
  handleClose() {
    this.setState({
      open: false,
      formVal : {
        name: '',
        age: '',
        weight: '',
        grade: '',
        classes: ''
      }
    })
  }
  handleChange(e,attr){
    let formval = this.state.formVal
    formval[attr] = e.target.value
    this.setState({
      formVal: formval
    })
  }
  handleSubmit(){
    this.props.addStudent(this.state.formVal)
  }
  render() {
    return (
      <div >
        <m.Dialog open={this.state.open} onClose={() => {this.handleClose()}} aria-labelledby="form-dialog-title">
          <m.DialogTitle id="form-dialog-title">请输入学生信息：</m.DialogTitle>
          <m.DialogContent className='form-content'>
            <m.TextField label="姓名：" placeholder="向党羽" type="search" onChange={e => this.handleChange(e,'name')} value={this.state.formVal.name}/>
            <m.TextField label="年龄：" placeholder="17" type="search" onChange={e=> this.handleChange(e,'age')} value={this.state.formVal.age}/>
            <m.TextField label="体重(/Kg)：" placeholder="55" type="search" onChange={e => this.handleChange(e,'weight')} value={this.state.formVal.weight}/>
            <m.TextField label="年级：" placeholder="高中" type="search" onChange={e => this.handleChange(e,'grade')} value={this.state.formVal.grade}/>
            <m.TextField label="班级：" placeholder="二班" type="search" onChange={e => this.handleChange(e,'classes')} value={this.state.formVal.classes}/>
          </m.DialogContent>
          <m.DialogActions>
            <m.Button onClick={() => {this.handleClose()}} color="primary">
              取消
            </m.Button>
            <m.Button onClick={() => {this.handleSubmit()}} color="primary">
              确定
            </m.Button>
          </m.DialogActions>
      </m.Dialog>
      </div>
    )
  }
}

export default Dialog