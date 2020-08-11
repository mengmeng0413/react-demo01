import React from 'react'
import stuModal from './common/stuModal'
import m from '../../material/material.js'
import "./Ui.less"

const useStyles = {
  table: {
    minWidth: 650,
  }
}

function createData(name, age, fat, grade, classes){
  return { name, age, fat, grade, classes};
}

class Son extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rows: [
        createData('赵帙', 10, 36, '小学', '三班'),
        createData('林溪', 14, 43, '初中', '二班'),
        createData('季苡忱', 17, 47, '高中', '一班'),
        createData('白辙', 21, 47, '大学', '一班'),
      ]
    }
  }
  onRef = (ref) => {
    this.child = ref
  }
  addStudent(){
    this.child.handleOpen()
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
            <m.Button 
              variant="contained" 
              color="primary" 
              size="small" 
              id="add-btn"
              onClick={()=>{this.addStudent()}}
            >添加学生</m.Button>
        </p>
        <m.TableContainer component={m.Paper}>
          <m.Table style={useStyles.table} aria-label="simple table">
            <m.TableHead>
              <m.TableRow>
                <m.TableCell>姓名</m.TableCell>
                <m.TableCell align="center">年龄</m.TableCell>
                <m.TableCell align="center">体重&nbsp;(Kg)</m.TableCell>
                <m.TableCell align="center">年纪&nbsp;</m.TableCell>
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
                    <m.TableCell align="center">{row.fat}</m.TableCell>
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
        <stuModal onRef={this.onRef}/>
      </div>
    )
  }
}

export default Son