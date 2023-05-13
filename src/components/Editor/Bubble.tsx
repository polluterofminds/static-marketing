import React, { useState, useCallback } from 'react'
import { BubbleMenu, EditorContentProps } from '@tiptap/react'
import { XMarkIcon } from '@heroicons/react/20/solid';

const Bubble = ({ editor }: EditorContentProps) => {
  const [enterLink, setEnterlink] = useState(false);
  const [link, setLink] = useState("");

  const handleLink = () => {
    if (link ===  null) {
      return
    }

    // empty
    if (link === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink()
        .run()

      return
    }

    // update link
    editor?.chain().focus().extendMarkRange('link').setLink({ href: link })
      .run()
  }

  const handleLinkChange = (e: any) => {
    setLink(e.target.value);
  }

  const keyPress = (e: any) => {
    if(e.key === "Enter"){
      handleLink();
      closeLinkMenu();
    }
  }

  const closeLinkMenu = () => {
    setLink("");
    setEnterlink(false);
  }

  const openLinkMenu = () => {
    const linkUrl = editor?.getAttributes('link').href;
    if(linkUrl) {
      setLink(linkUrl);
    }
    setEnterlink(true);
  }

  return (
    <BubbleMenu className="bubble-menu bg-black text-white rounded-full p-2" tippyOptions={{ duration: 100 }} editor={editor!}>
      {
        enterLink ?
          <div className="flex flex-row justify-between">
            <input onKeyDown={keyPress} value={link} onChange={handleLinkChange} className="bg-black text-white outline-none px-2" type="text" placeholder="Enter link..." />
            <button onClick={closeLinkMenu}><XMarkIcon className="w-4 h-4 text-white" /></button>
          </div> :
          <>
            <button
              onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
              className={editor?.isActive('heading', { level: 1 }) ? 'is-active mx-2 font-glacial-bold' : 'font-glacial-bold mx-2 font-glacial-bold'}
            >
              <i className="ri-h-1"></i>
            </button>
            <button
              onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
              className={editor?.isActive('heading', { level: 2 }) ? 'is-active mx-2 font-glacial-bold' : 'mx-2 font-glacial-bold'}
            >
              <i className="ri-h-2"></i>
            </button>
            <button
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className={editor?.isActive('bold') ? 'is-active mx-2 font-bold font-glacial-bold' : 'mx-2 font-glacial-bold'}
            >
              <i className="ri-bold"></i>
            </button>
            <button
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className={editor?.isActive('italic') ? 'is-active mx-2 font-glacial-bold' : 'mx-2 font-glacial-bold'}
            >
              <i className="ri-italic"></i>
            </button>
            <button
              onClick={() => editor?.chain().focus().toggleStrike().run()}
              className={editor?.isActive('strike') ? 'is-active mx-2 font-glacial-bold' : 'mx-2 font-glacial-bold'}
            >
              <i className="ri-strikethrough"></i>
            </button>
            <button
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              className={editor?.isActive('bulletList') ? 'is-active mx-2 font-glacial-bold' : 'mx-2 font-glacial-bold'}
            >
              <i className="ri-list-check"></i>
            </button>
            <button
              onClick={() => editor?.chain().focus().toggleOrderedList().run()}
              className={editor?.isActive('orderedList') ? 'is-active mx-2 font-glacial-bold' : 'mx-2 font-glacial-bold'}
            >
              <i className="ri-list-ordered"></i>
            </button>
            <button
              onClick={() => openLinkMenu()}
              className={editor?.isActive('link') ? 'is-active mx-2 font-glacial-bold' : 'mx-2 font-glacial-bold'}
            >
              <i className="ri-link"></i>
            </button>
            <button
              onClick={() => editor?.chain().focus().toggleBlockquote().run()}
              className={editor?.isActive('blockquote') ? 'is-active mx-2 font-glacial-bold' : 'mx-2 font-glacial-bold'}
            >
              <i className="ri-double-quotes-l"></i>
            </button>
          </>
      }
    </BubbleMenu>
  )
}

export default Bubble
