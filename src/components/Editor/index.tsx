import React, { useState, useEffect } from "react";
import { useEditor, EditorContent } from '@tiptap/react'
import { useDebounce } from 'use-debounce';
import Bubble from "./Bubble";
import Floating from "./Floating";
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Heading from '@tiptap/extension-heading'
import Text from '@tiptap/extension-text'
import ListItem from '@tiptap/extension-list-item'
import BulletList from '@tiptap/extension-bullet-list';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Code from "@tiptap/extension-code"
import Link from '@tiptap/extension-link'
import History from '@tiptap/extension-history'
import TurndownService from 'turndown';
import Showdown from 'showdown';
import fm from "front-matter";
// import ContentInfoPane from "../Project/ContentInfoPane";
import HorizontalRule from '@tiptap/extension-horizontal-rule'

import Image from '@tiptap/extension-image'
import OrderedList from "@tiptap/extension-ordered-list";
import Blockquote from '@tiptap/extension-blockquote';
import Hardbreak from '@tiptap/extension-hard-break';
import Bold from '@tiptap/extension-bold';
import Strike from '@tiptap/extension-strike';
import Italic from '@tiptap/extension-italic';
import { lowlight } from 'lowlight/lib/core';
import UploadIndicator from "./UploadIndicator";
// import DeleteModal from "../Project/DeleteModal";
import SearchBox from "./SearchBox";
// import { handleFind } from "../../renderer";
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react'
import UnsplashModal from "./UnsplashModal";
import { CogIcon } from "@heroicons/react/20/solid";
import Sidebar from "./Sidebar";

const turndownService: any = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' })

const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

type EditorProps = {
  content: string,
  handleSave: any,
  projectPath: string,
  setContentPaneOpen: (open: boolean) => void,
  handleDelete: () => void
}

const Editor = (props: EditorProps) => {
  const [contentPaneOpen, setContentPaneOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(`---
slug: "/make-small-apps"
date: "2021-03-19T17:31:58.000Z"
title: "Make Small Apps"
excerpt: "null"
status: "published"
layout: post
tags: posts
---
I’m finding myself more and more attracted to the idea of building small apps as a solo dev.

I work full time for a company I love, but I will always make things on the side. In the past, this has meant building large scale applications, the kinds you would normally expect to find working at a startup. Graphite Docs was my first. It started small, then it grew into a complex, permissioned, encrypted collaboration platform. I then built a blogging platform and a finance app. I’ve built dozens of apps, many of which were probably too large of a scale for a solo dev.

I’m now building [Perligo](<https://perligo.io/>), and I can see the writing on the wall. If I listen to my backlog, this thing is going to grow to be too big, too complex for me to manage as an indie. I have not yet launched out of alpha, but I am happy with the product now. My former MFA cohort uses the app and is happy with it. So, this means I might just leave it alone, even at the risk of it not being something people will pay for.

I’ve started working on smaller apps. I have a new one on iOS and macOS coming out soon. I feel like the constraints of small apps are better suited to indies, but the upside is, as you’d expect, much smaller.
  `);
  const [content, setContent] = useState(null);
  const [selectedTab, setSelectedTab] = useState("project");
  const [newDoc, setNewDoc] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showSaveInfo, setShowSaveInfo] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");
  const [markdownContent, setMarkdownContent] = useState("");
  const [frontmatter, setFrontmatter] = useState<any>(null);
  const [contentInfoPaneOpen, setContentInfoPaneOpen] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const [uploading, setUploading] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [keys, setKeys] = useState<String[]>([]);
  const [showUnsplashSearch, setShowUnsplashSearch] = useState(false);
  const [project, setProject] = useState<any>({
    title: "Demo Project", 
    files: []
  })

  const editor = useEditor({
    extensions: [
      Document,
      Blockquote.configure({
        HTMLAttributes: {
          class: 'pl-4 border-l-4 border-gray-700 italic'
        }
      }),
      Hardbreak,
      HorizontalRule,
      Text,
      Bold,
      Italic,
      Strike,
      BulletList,
      ListItem,
      OrderedList,
      History,
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: 'javascript',
        HTMLAttributes: {
          class: 'bg-gray-900 rounded-md p-4 text-gray-200',
        },
      }),
      Code.configure({
        HTMLAttributes: {
          class: 'text-xl bg-gray-900 rounded-md font-mono p-0.5 text-gray-200',
        },
      }),
      Paragraph.configure({
        HTMLAttributes: {
          class: 'text-2xl',
        },
      }),
      Heading.configure({
        HTMLAttributes: {
          levels: [1, 2],
          class: 'font-bold font-glacial-bold'
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'underline',
        },
      }),
      Image.configure({
        allowBase64: true,
        inline: true,
      })
    ],
    editorProps: {
      attributes: {
        class: 'font-grotesk p-10 space-y-6'
      }
    },
    content: htmlContent,
    onFocus: ({ editor: ed }) => {
      // props.setContentPaneOpen(false)
    },
    onUpdate: ({ editor: ed }) => {
      const proseMirror = document.getElementsByClassName("ProseMirror")[0];
      const html = ed.getHTML()
      const text = ed.getText();
      // console.log(text);
      if (proseMirror && !text) {
        proseMirror.setAttribute("data-placeholder", "Write something great...");
        proseMirror.removeAttribute("data-content")
      } else {
        proseMirror.setAttribute("data-content", "placeholder")
      }
      setHtmlContent(html);
      const markdown = turndownService.turndown(html);
      setMarkdownContent(markdown);
      setHasChanged(true);
    },
  });

  const [debouncedEditor] = useDebounce(editor?.state.doc.content, 1200);

  useEffect(() => {
    if (debouncedEditor) {
      // handleSaveFrontMatter(frontmatter)
    }
  }, [debouncedEditor]);

  useEffect(() => {
    if (selectedContent && editor) {
      const proseMirror = document.getElementsByClassName("ProseMirror")[0];
      const parsed: any = fm(selectedContent);
      console.log(parsed);
      setFrontmatter(parsed.attributes);
      const converter = new Showdown.Converter();
      const html = converter.makeHtml(parsed.body);
      if (proseMirror && !html) {
        proseMirror.setAttribute("data-placeholder", "Write something great...");
        proseMirror.removeAttribute("data-content")
      }
      setHtmlContent(html);
      const markdown = turndownService.turndown(html);
      setMarkdownContent(markdown);
      editor.commands.setContent(html);
    }
  }, [props.content, editor]);

  useEffect(() => {
    // handleFind(openSearchBox);
    // document.addEventListener('keydown', handleKeyDown);    

    // return () => {
    //   document.removeEventListener('keydown', handleKeyDown)      
    // }
  })

  // const openSearchBox = () => {
  //   setShowSearch(true);
  // }

  const handleTitleChange = debounce(function () {
    const titleDiv = document.getElementById('title');
    if (titleDiv) {
      const cloned = JSON.parse(JSON.stringify(frontmatter));
      cloned.title = titleDiv.innerText;
      handleSaveFrontMatter(cloned);
      titleDiv.focus();
      // document.execCommand('selectAll', false, null);
      // document.getSelection().collapseToEnd();
    }

  }, 1500);

  const toggleInfoPanel = () => {
    setContentInfoPaneOpen(!contentInfoPaneOpen);
  }

  const deleteDocument = async () => {
    await props.handleDelete();
    setDeleteModalOpen(false);
  }

  const handleSaveFrontMatter = (updatedFrontmatter: any) => {
    if (updatedFrontmatter) {
      setHasChanged(false);
      setFrontmatter(updatedFrontmatter);
      let frontmatterStr = `---\n`;
      const keys = Object.keys(updatedFrontmatter);
      keys.forEach(k => {
        frontmatterStr = frontmatterStr + `${k}: ${JSON.stringify(updatedFrontmatter[k])}\n`;
      });
      frontmatterStr = frontmatterStr + "---";
      handleConvertAndSave(frontmatterStr);
    }
  }

  const handleConvertAndSave = async (frontmatterStr: string) => {
    let fullDoc = ``;
    fullDoc = fullDoc + frontmatterStr + '\n';
    fullDoc = fullDoc + markdownContent;
    await props.handleSave(fullDoc);
  }

  const renderEditor = () => {
    if (editor) {
      return (
        <div className="flex flex-row w-screen">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} setContentPaneOpen={setContentPaneOpen} projectSelected={project ? true : false} content={project?.files} contentPaneOpen={contentPaneOpen} />
          <div className="w-3/5 m-auto">
            <SearchBox show={showSearch} setShow={setShowSearch} />
            {/* <DeleteModal handleDelete={deleteDocument} open={deleteModalOpen} setOpen={setDeleteModalOpen} /> */}
            <CogIcon className="h-6 w-6 cursor-pointer fixed top-4 right-4" onClick={toggleInfoPanel} />
            {/* {
            contentInfoPaneOpen &&
            <ContentInfoPane setOpen={setDeleteModalOpen} handleDelete={props.handleDelete} handleSaveFrontMatter={handleSaveFrontMatter} toggleInfoPanel={toggleInfoPanel} contentInfoPaneOpen={contentInfoPaneOpen} frontmatter={frontmatter} />
          } */}
            {
              showUnsplashSearch &&
              <UnsplashModal editor={editor} setShowUnsplashSearch={setShowUnsplashSearch} />
            }
            <div className="py-4 mb-6">
              <div id="title" onInput={handleTitleChange} contentEditable className="mt-12 h-auto w-full text-center font-glacial-bold text-5xl mt-2 outline-none">{frontmatter && frontmatter.title ? frontmatter.title : ""}</div>
              <Bubble editor={editor} />
              <Floating setShowUnsplashSearch={setShowUnsplashSearch} setUploading={setUploading} editor={editor} />
              <GrammarlyEditorPlugin clientId="client_MJZ4AhwpoSmcfJTgH7gvYi">
                <EditorContent editor={editor} />
              </GrammarlyEditorPlugin>
              {
                uploading &&
                <UploadIndicator />
              }
            </div>
          </div>
        </div>
      )
    }
    return <div />
  }

  return (
    <>
      {renderEditor()}
    </>
  )
}

export default Editor