import React from "react"
import { makeStyles } from '@material-ui/core/styles' 
import m from '../../../material/material.js';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Dialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div style={{display: 'inline-block',float: 'right'}}>
      <m.Button 
        variant="contained" 
        color="primary" 
        size="small" 
        onClick={handleClickOpen}
      >
        添加学生
      </m.Button>
      <m.Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <m.DialogTitle id="form-dialog-title">请输入学生信息：</m.DialogTitle>
      <m.DialogContent className='form-content'>
        <m.TextField label="姓名：" type="search" />
        <m.TextField label="年龄：" type="search" />
        <m.TextField label="体重(/Kg)：" type="search" />
        <m.TextField label="年级：" type="search" />
        <m.TextField label="班级：" type="search" />
      </m.DialogContent>
      <m.DialogActions>
        <m.Button onClick={handleClose} color="primary">
          取消
        </m.Button>
        <m.Button onClick={handleClose} color="primary">
          确定
        </m.Button>
      </m.DialogActions>
    </m.Dialog>
    </div>
  )
}