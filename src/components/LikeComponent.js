import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { pushLike } from '../redux/likeReducer/likeReducer'

export default function LikeComponent(props) {

     const dispatch = useDispatch()
     const {like} = useSelector(state=>state.handleLike)

     const handleLike = ()=>{
          const action = pushLike(1)
          dispatch(action)
     }

     return (
          <div>
               <p className='test'>home</p>
               <button className='btn btn-success' onClick={handleLike} >like</button>
               <span>data from likeReducer: {like}</span>
               <br/>
               <NavLink to='/page2' className='btn btn-danger'>redirect to page 2</NavLink>
          </div>
     )
}
