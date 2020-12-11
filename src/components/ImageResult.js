import React, {Component} from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ZoomIn from '@material-ui/icons/ZoomIn';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

export class ImageResult extends Component {
  state = {
    open: false,
    currentImg: ''
  }

  handleOpen = img => {
    this.setState({open: true, currentImg: img})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const {images} = this.props

    return (
      <div>
        <GridList style={{width: '100%', padding: '8px'}} cols={3}>
          {images.map((img) => (
            <GridListTile key={img.id}>
              <img src={img.largeImageURL} alt=''/>
              <GridListTileBar
                title={img.tags}
                subtitle={< span > by : {
                img.user
              } </span>}
                actionIcon={< IconButton onClick = {
                () => this.handleOpen(img.largeImageURL)
              } > <ZoomIn style={{
                color: 'white'
              }}/> </IconButton>}/>
            </GridListTile>
          ))}
        </GridList>

        <Dialog modal={false} open={this.state.open} onClose={this.handleClose}>
          <DialogContent>
            <img
              src={this.state.currentImg}
              alt=''
              style={{
              width: '100%'
            }}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default ImageResult
