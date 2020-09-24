import React from 'react'
import Dialog from './common/stuDialog'
import m from '../../material/material.js'
import axios from '../../../model/axios'
import "./Ui.less"

const useStyles = {
  table: {
    minWidth: 650,
  }
}

function createData(name, age, weight, grade, classes){
  return { name, age, weight, grade, classes};
}

class Son extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rows: []
    }
  }
  componentDidMount(){
    this.getStudent()
  }
  getStudent(){
    axios.get('//localhost:8686/api')
    .then((res) => {
      this.setState({
        rows: JSON.parse(res.request.responseText).stu
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
  openDialog(bool, item){
    this.bool = bool
    this.refs.dialog.handleClickOpen(bool, item)
  }
  addStudent(data){
    if((data.name||data.age||data.weight||data.grade||data.classes) === ''){
      alert('信息填写不完整！')
    }else{
      let arrData = createData(data.name, parseInt(data.age), parseInt(data.weight), data.grade, data.classes)
      axios.post('//localhost:8686/add', Object.assign(arrData, {bool: this.bool}))
      .then((res) => {
        if(res.request.responseText==='ok'){
          this.getStudent()
        }else{
          alert('数据重复')
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=>{
        this.refs.dialog.handleClose()
      })
    }
  }
  del(item){
    let sure = window.confirm('确认删除吗')
    if(sure){
      axios.post('//localhost:8686/del',{name: item.name})
      .then((res) => {
        if(res.request.responseText==='ok'){
          this.getStudent()
        }else{
          alert('删除失败')
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
  edit(item){
    this.openDialog(false, item)
  }
  render(){
    return (
      <div>
        <p className="title">
            学生信息一览表
            <m.Button 
              variant="contained" 
              color="primary" 
              size="small" 
              onClick={() => {this.openDialog(true, null)}}
              style={{display: 'inline-block',float: 'right'}}
            >
              添加学生
            </m.Button>
        </p>
        <m.TableContainer component={m.Paper}>
          <m.Table style={useStyles.table} aria-label="simple table">
            <m.TableHead>
              <m.TableRow>
                <m.TableCell>姓名</m.TableCell>
                <m.TableCell align="center">年龄</m.TableCell>
                <m.TableCell align="center">体重&nbsp;(Kg)</m.TableCell>
                <m.TableCell align="center">年级&nbsp;</m.TableCell>
                <m.TableCell align="center">班级&nbsp;</m.TableCell>
                <m.TableCell align="center">操作&nbsp;</m.TableCell>
              </m.TableRow>
            </m.TableHead>
            <m.TableBody>
              {
                this.state.rows.map((row, index) => (
                  <m.TableRow key={row.name}>
                    <m.TableCell component="th" scope="row">
                      {row.name}
                    </m.TableCell>
                    <m.TableCell align="center">{row.age}</m.TableCell>
                    <m.TableCell align="center">{row.weight}</m.TableCell>
                    <m.TableCell align="center">{row.grade}</m.TableCell>
                    <m.TableCell align="center">{row.classes}</m.TableCell>
                    <m.TableCell align="center">
                      <m.Button variant="contained" color="primary" size="small" onClick={()=>this.edit(row)}>
                        编辑
                      </m.Button>
                      <m.Button variant="contained" color="secondary" size="small" onClick={()=>this.del(row)}>
                        删除
                      </m.Button>
                    </m.TableCell>
                  </m.TableRow>
                ))
              }
            </m.TableBody>
          </m.Table>
        </m.TableContainer>
        <Dialog ref="dialog" addStudent={(data) => this.addStudent(data)}/>
      </div>
    )
  }
}

export default Son