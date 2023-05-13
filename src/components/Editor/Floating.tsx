import React, { useState, useRef } from 'react'
import { EditorContentProps, FloatingMenu } from '@tiptap/react'
// import { uploadFile } from '../../renderer';

type ComponentProps = {
  editor: any, 
  setUploading: any
  setShowUnsplashSearch: (show:boolean) => void
}

const Floating = (props: ComponentProps) => {
  const { editor, setUploading } = props;
  const fileInput = useRef(null);
  const [imgFile, setImgFile] = useState<any>();
  const addImage = async () => {
    setUploading(true);
    try {
      // const cid = await uploadFile();
      // console.log(cid);
      // const url = `https://polluterofminds.mypinata.cloud/ipfs/${cid}`
      // if(cid) {
      //   editor.chain().focus().setImage({ src: url }).run();
      // }
      setUploading(false); 
    } catch (error) {
      setUploading(false);
    }    
  }

  const onImageChange = async (e: any) => {
    const target = e.target as HTMLInputElement;
    const files:any = target.files;    
    setImgFile(files[0]);
    try {
      // let url: any = "";
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //     console.log(reader.result);
      //     url = reader.result;
      //     console.log(url);
      //     if (url && editor) {
      //       editor.chain().focus().setImage({ src: url }).run()
      //     } 
      //     // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
      // };
      // reader.readAsDataURL(files[0]);
      // const cid = await window.paragraph.newUpload(files[0])//await uploadFile(files[0]);
      
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }
  return (
    <FloatingMenu className="floating-menu z-10" tippyOptions={{ duration: 100 }} editor={editor}>
      <div className="space-x-4">
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          <i className="ri-separator"></i>
        </button>
        <button onClick={() => addImage()}>
          <i className="ri-image-line"></i>
        </button>
        <button onClick={() => props.setShowUnsplashSearch(true)}>
         <i className="ri-unsplash-line"></i>
        </button>
        <button onClick={() => editor.commands.toggleCodeBlock()}>
          <i className="ri-code-line"></i>
        </button>
      </div>
    </FloatingMenu>
  )
}

export default Floating
