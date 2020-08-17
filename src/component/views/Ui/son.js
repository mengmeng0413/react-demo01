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
      // rows: [
      //   createData('赵帙', 10, 36, '小学', '三班'),
      //   createData('林溪', 14, 43, '初中', '二班'),
      //   createData('季苡忱', 17, 47, '高中', '一班'),
      //   createData('白辙', 21, 47, '大学', '一班')
      // ]
      rows: []
    }
  }
  componentDidMount(){
    axios.get('//localhost:8686/api',{params: {},jsonp:'handleCallback'})
    .then((res) => {
      this.setState({
        rows: JSON.parse(res.request.responseText).stu
      })
    })
    .catch((err) => {
      console.log(err);
      this.setState({
        rows: [
          createData('赵帙', 10, 36, '小学', '三班'),
          createData('林溪', 14, 43, '初中', '二班'),
          createData('季苡忱', 17, 47, '高中', '一班'),
          createData('白辙', 21, 47, '大学', '一班')
        ]
      })
    })
  }
  addStudent(data){
    let arrData = createData(data.name, parseInt(data.age), parseInt(data.weight), data.grade, data.classes)
    this.setState({
      rows: [...this.state.rows, arrData]
    })
    this.refs.dialog.handleClose()
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