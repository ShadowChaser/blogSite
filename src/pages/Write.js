import React,{useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Write() {

  const [value, setValue] = useState('');



  return (
    <div className='add'>
      <div className='content'>
            <input type='text' placeholder='Title'/>
            <div className='editorContainer'>
            <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
            </div>
      </div>
      <div className='menu'>
              <div className='item'>
                <h1>Publish</h1>
                <span>
                    <b>Status: </b> Draft
                </span>
                <span>
                    <b>Visibility: </b> Public
                </span>
                <input style={{display:"none"}} type='file' id="file" name=""/>
                <label className='file' htmlFor="file">Upload Image</label>
                <div className='buttons'>
                  <button>Save as a draft</button>
                  <button>Update</button>
                </div>
              </div>
            <div className='item'>
              <h1>Category</h1>
                <div className='cat'>
                      <input type="radio" name="cat" value="art" id="art"/>
                      <label htmlFor="art">Art</label>
                </div>
                <div className='cat'>
                      <input type="radio" name="science" value="science" id="science"/>
                      <label htmlFor="science">science</label>
                  </div>
                  <div className='cat'>
                      <input type="radio" name="technology" value="technology" id="technology"/>
                      <label htmlFor="technology">technology</label>

                  </div>
                  <div className='cat'>
                      <input type="radio" name="cinema" value="cinema" id="cinema"/>
                      <label htmlFor="cinema">cinema</label>

                  </div>
                  <div className='cat'>
                      <input type="radio" name="design" value="design" id="design"/>
                      <label htmlFor="design">design</label>
                  </div>
            </div>
          </div>
    </div>
  )
}
