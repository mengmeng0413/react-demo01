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
  addStudent(data){
    let arrData = createData(data.name, parseInt(data.age), parseInt(data.weight), data.grade, data.classes)
    axios.post('//localhost:8686/add', arrData)
    .then((res) => {
      if(res.request.responseText=='ok'){
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
  del(index){
    this.state.rows.splice(index, 1)
    this.setState({
      rows: this.state.rows
    })
  }
  render(){
    return (
      <div>
        <p className="title">
            学生信息一览表
            <Dialog ref="dialog" addStudent={(data) => this.addStudent(data)}/>
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
                      <m.Button variant="contained" color="secondary" onClick={()=>this.del(index)}>
                        删除
                      </m.Button>
                    </m.TableCell>
                  </m.TableRow>
                ))
              }
            </m.TableBody>
          </m.Table>
        </m.TableContainer>
      </div>
    )
  }
}

export default Son