import React, { useEffect } from 'react';
import { useQuill } from 'react-quilljs';

const TextEditor = ({ description, setDescription }) => {
    const theme = 'snow';
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", "blockquote", 'code-block'],
            [{ size: [] }],
            [{ font: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ color: [] }, { background: [] }],
            ['link', 'image'],
            ['clean'],
        ],
    };

    const placeholder = 'Write your content...';

    const formats = ['bold', 'italic', 'underline', 'strike', 'color', 'image', 'background', 'link', 'header', 'size', 'font', 'align', 'list', 'indent', 'blockquote', 'code-block', 'clean'];

    const { quill, quillRef } = useQuill({ theme, modules, formats, placeholder });

    useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
                // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
                // console.log(quill.getContents()); // Get delta contents
               //  console.log(quill.root.innerHTML); // Get innerHTML using quill
               console.log(delta)
                setDescription(quill.root.innerHTML);
            });
        }
    }, [quill, quillRef, setDescription]);

    return (
        <div className='bg-slate-100'>
            <div style={{ width: "100%", height: '100%' }}>
                <div ref={quillRef} />
            </div>
        </div>
    );
};

export default TextEditor;