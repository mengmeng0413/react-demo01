import React, {Component} from "react"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring/web.cjs';
import m from '../../../material/material.js';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadow[5],
    padding: theme.spacing(2, 4, 3)
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });
  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};



class modal extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.onRef(this);
  }
  
  render() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = ()=>{
      setOpen(true);
    };
    const handleClose = ()=>{
      setOpen(false);
    };
    return (
      <div>
        <m.Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose()}
          closeAfterTransition
          BackdropComponent={m.Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="spring-modal-title">Spring modal</h2>
              <p id="spring-modal-description">react-spring animates me.</p>
            </div>
          </Fade>
        </m.Modal>
      </div>
    )
  }
}
export default modal