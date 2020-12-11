import React, {Component} from 'react'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import ImageResult from './ImageResult';

export class Search extends Component {
  state = {
    keyword: '',
    images: [],
    apiURL: 'https://pixabay.com/api/',
    apiKey: '19321648-d1f4460bd03bed0cee5b7739c'
  }

  onChange = (e) => {
    e.preventDefault()
    const val = e.target.value
    const {apiURL, apiKey, keyword} = this.state
    this.setState({
      [e.target.name]: val
    }, () => {
      if (val === "") {
        this.setState({images: []})
      } else {
        axios
          .get(`${apiURL}?key=${apiKey}&q=${keyword}&image_type=photo`)
          .then(res => this.setState({images: res.data.hits}))
          .catch(err => console.log('Error: Something going wrong'))
      }
    })
  }

  render() {
    return (
      <div>
        <form
          noValidate
          autoComplete="off"
          style={{
          marginTop: '20px'
        }}>
          <TextField
            style={{padding: '5px'}}
            value={this.state.keyword}
            onChange={this.onChange}
            name='keyword'
            id='standard-search'
            placeholder='Silahkan ketikan kata kunci disini'
            type='search'
            fullWidth={true}/>
        </form>
        <br/> {this.state.images.length > 0
          ? (<ImageResult images={this.state.images}/>)
          : null}
      </div>
    )
  }
}

export default Search
