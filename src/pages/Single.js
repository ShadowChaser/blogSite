import React from 'react'
import Edit from '../img/edit.png';
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';


export default function Single() {
  return (
    <div className='single'>
      <div className='content'>
          <img src="https://images.pexels.com/photos/1144265/pexels-photo-1144265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
          <div className='user'>
            <img src="https://images.pexels.com/photos/6510487/pexels-photo-6510487.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt=""/>
          <div className='info'> 
              <span>John</span>
              <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt=""/>
            </Link>
            
            <img src={Delete} alt=""/>
          </div>
          </div>
          <h1> Lorem</h1>
          <p> loredasasdashd asbdasuid hasbdiuasdhbasuasid basud asudbas ui dbn uionas dioasdasdas
            asdasdasdhasiudashd asi dasj doiasdasdioasjdoas das\d asd\\d 
            dasdjash dasui dashdasiodhjasodiasj  odiasdas
            d asdhasdbas dasnoi dasiodioasmd

            dasdasidhasiod asuiodasudoas djasodjasdasiu j dasjiop  djasdopa
            sdahjdbas judasbdaskidkbnasdkasd

            dashjdasgdiashdioas  hj daspo dhas opdasopdasudjasopdas


            dasdjasdghasiud asiods
          </p>
      </div>
      <Menu/>
    </div>
  )
}
