import { useState } from 'react'
import './comments.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from '../../features/postSlice';

const Comments = () => {
    const dispatch = useDispatch()


    const [userName, setUsername] = useState('');
    const [comment, setComment] = useState('');


    const onNameChange = e => setUsername(e.target.value)
    const onCommentChange = e => setComment(e.target.value)


    const onSave = () => {
        if(userName && comment) {
            dispatch(
                postAdded(userName, comment)
            )
            setUsername('')
            setComment('')
        }
    }




  return (
    <>
    <h2>Leave us a comment</h2>
      
<section>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    // value={title}
                    onChange={onNameChange}
                />
                {/* <label htmlFor="postAuthor">Author:</label> */}
                {/* <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select> */}
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    // value={content}
                    onChange={onCommentChange}
                />
                <button
                    type="button"
                    onClick={onSave}
                    // disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    </>
  )
}

export default Comments