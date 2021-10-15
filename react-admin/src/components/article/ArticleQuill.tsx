import React from 'react'
import * as ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules = {
    toolbar: [
      ['image', 'link'],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean']
    ]
}

interface QuillProps {
  value: string,
  onChange: (val:string)=>void
}

export default (props: QuillProps) => {
  const {value, onChange} = props
  return (
    <div className='qf-article-quill'>
      <ReactQuill
        modules={modules}
        value={value}
        onChange={val=>onChange&&onChange(val)}
        theme='snow'
      />
    </div>
  )
}
